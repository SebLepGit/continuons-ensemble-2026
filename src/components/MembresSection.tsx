import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import yannickvacher from '@/assets/yannick-vacher-portrait.png';
import jeanpierrereynier from '@/assets/portraits/jeanpierre-reynier-portrait.png';
import mauricefavre from '@/assets/portraits/maurice-favre-portrait.png';
import josettegombert from '@/assets/portraits/josette-gombert-portrait.png';
import joelbroutin from '@/assets/portraits/joel-broutin-portrait.png';
import moniquedutraive from '@/assets/portraits/monique-dutraive-portrait.png';
import fredericmeunier from '@/assets/portraits/frederic-meunier-portrait.png';

interface Member {
  name: string;
  profession: string;
  engagement: string;
  bio?: string;
  photo?: string;
}

const members: Member[] = [
  { 
    name: "Yannick Vacher", 
    profession: "Maire sortant", 
    engagement: "Continuer à servir notre commune avec passion et détermination pour les 6 prochaines années.",
    photo: yannickvacher
  },
  { 
    name: "Monique Dutraive", 
    profession: "Retraitée - Assistante de service social", 
    engagement: "Mettre mes compétences au service de la commune",
    bio: `J'ai 67 ans, mariée, 3 enfants, retraitée depuis 3 ans.

Je suis habitante de Romanèche-Thorins depuis 2013 (quartier du moulin à vent), mais le Beaujolais est ma région d'origine. Étant membre d'une famille de vignerons j'ai vécu à Fleurie jusqu'à mon entrée dans la vie active en 1980.

Je suis conseillère municipale depuis 6 ans, plus particulièrement investie dans le domaine social notamment les différentes actions du CCAS.

Je suis aussi engagée dans le domaine associatif, vice-présidente de l'association FLORA au bénéfice des résidents de l'EHPAD, et trésorière du comité des anciens.

J'ai une formation d'assistante de service social, profession que j'ai exercée pendant 19 ans avant de prendre des fonctions de responsable de service social d'abord régionales puis nationales jusqu'à ma retraite.

J'ai travaillé pour différents ministères : Armée, Justice, Agriculture. J'ai eu une parenthèse de 2 ans comme conseillère d'orientation au lycée français de Djibouti en Afrique.

Je souhaite continuer de mettre mes compétences au service de la commune, poursuivre et développer les actions engagées pour répondre aux besoins de ses habitants.`,
    photo: moniquedutraive
  },
  { 
    name: "Jean-Pierre Reynier", 
    profession: "", 
    engagement: "",
    photo: jeanpierrereynier
  },
  { 
    name: "Perrine Janin", 
    profession: "", 
    engagement: ""
  },
  { 
    name: "Joël Broutin", 
    profession: "", 
    engagement: "",
    photo: joelbroutin
  },
  { 
    name: "Pascale Romani", 
    profession: "", 
    engagement: ""
  },
  { 
    name: "Maurice Favre", 
    profession: "", 
    engagement: "",
    photo: mauricefavre
  },
  { 
    name: "Vanina Depardon", 
    profession: "", 
    engagement: ""
  },
  { 
    name: "Frédéric Meunier", 
    profession: "", 
    engagement: "",
    photo: fredericmeunier
  },
  { 
    name: "Josette Gombert", 
    profession: "", 
    engagement: "",
    photo: josettegombert
  },
  { 
    name: "Raphaël Gaudin", 
    profession: "", 
    engagement: ""
  },
  { 
    name: "Catherine Vincent", 
    profession: "", 
    engagement: ""
  },
  { 
    name: "Sébastien Lépine", 
    profession: "", 
    engagement: ""
  },
  { 
    name: "Andrea Moscicki", 
    profession: "", 
    engagement: ""
  },
  { 
    name: "Joaquin Fernandez", 
    profession: "", 
    engagement: ""
  },
  { 
    name: "Annie Rochet", 
    profession: "", 
    engagement: ""
  },
  { 
    name: "Marc Dupuy", 
    profession: "", 
    engagement: ""
  },
  { 
    name: "Andrée Defnet", 
    profession: "", 
    engagement: ""
  },
  { 
    name: "Jean-Pierre Large", 
    profession: "", 
    engagement: ""
  },
];

interface MemberCardProps {
  member: Member;
  index: number;
  isInView: boolean;
  onClick: () => void;
}

const MemberCard = ({ member, index, isInView, onClick }: MemberCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.08 * index }}
      className="group relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Card Container - Instagram-like aspect ratio (4:5) */}
      <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-soft group-hover:shadow-card transition-shadow duration-300">
        {/* Background Image or Initials */}
        {member.photo ? (
          <img 
            src={member.photo} 
            alt={`Portrait de ${member.name}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary via-primary/90 to-primary/70 flex items-center justify-center">
            <span className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground/90">
              {member.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        )}
        
        {/* Name always visible at bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 pt-12">
          <h3 className="font-heading font-semibold text-base md:text-lg text-white">
            {member.name}
          </h3>
          {member.profession && (
            <p className="text-sm text-secondary font-medium">
              {member.profession}
            </p>
          )}
        </div>

        {/* Hover overlay with engagement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 backdrop-blur-sm bg-primary/80 flex flex-col justify-end p-4 md:p-5"
        >
          <h3 className="font-heading font-semibold text-lg md:text-xl text-primary-foreground mb-1">
            {member.name}
          </h3>
          {member.profession && (
            <p className="text-sm md:text-base text-secondary font-semibold mb-3">
              {member.profession}
            </p>
          )}
          {member.engagement && (
            <p className="text-sm md:text-base text-primary-foreground/90 leading-relaxed mb-3">
              "{member.engagement}"
            </p>
          )}
          <span className="text-secondary font-semibold text-sm mt-auto">Voir la présentation →</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

interface MemberModalProps {
  member: Member | null;
  isOpen: boolean;
  onClose: () => void;
}

const MemberModal = ({ member, isOpen, onClose }: MemberModalProps) => {
  if (!member) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-6 md:p-8 bg-background border-border">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex flex-col lg:flex-row gap-6 lg:gap-10"
        >
          {/* Left side - Photo and info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="flex-shrink-0 text-center lg:text-left"
          >
            {/* Photo */}
            <div className="relative inline-block">
              {member.photo ? (
                <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-secondary shadow-card mx-auto lg:mx-0">
                  <img 
                    src={member.photo} 
                    alt={`Portrait de ${member.name}`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              ) : (
                <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full bg-gradient-to-br from-primary via-primary/90 to-primary/70 flex items-center justify-center border-4 border-secondary shadow-card mx-auto lg:mx-0">
                  <span className="text-5xl md:text-6xl font-heading font-bold text-primary-foreground/90">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              )}
            </div>

            {/* Name and profession */}
            <div className="mt-6">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                {member.name}
              </h2>
              {member.profession && (
                <p className="text-secondary font-semibold text-lg mt-1">
                  {member.profession}
                </p>
              )}
            </div>

            {/* Engagement quote */}
            {member.engagement && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="mt-4 max-w-xs mx-auto lg:mx-0"
              >
                <blockquote className="border-l-4 border-secondary pl-4 italic text-muted-foreground text-sm">
                  "{member.engagement}"
                </blockquote>
              </motion.div>
            )}
          </motion.div>

          {/* Right side - Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="flex-1"
          >
            {member.bio ? (
              <div className="prose prose-lg max-w-none">
                <div className="text-foreground leading-relaxed whitespace-pre-line">
                  {member.bio}
                </div>
              </div>
            ) : (
              <p className="text-muted-foreground italic text-center lg:text-left">
                Biographie à venir...
              </p>
            )}
          </motion.div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

const MembresSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  return (
    <section id="membres" className="section-padding bg-muted" ref={ref}>
      <div className="container-campaign mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
            Notre Équipe
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            19 citoyens engagés pour l'avenir de notre commune
          </p>
        </motion.div>

        {/* Grid: 2 columns mobile, 3 tablet, 4 desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {members.map((member, index) => (
            <MemberCard 
              key={index} 
              member={member} 
              index={index} 
              isInView={isInView}
              onClick={() => setSelectedMember(member)}
            />
          ))}
        </div>
      </div>

      {/* Member Modal */}
      <MemberModal 
        member={selectedMember}
        isOpen={!!selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </section>
  );
};

export default MembresSection;
