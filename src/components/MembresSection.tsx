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

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-primary/60 flex items-center justify-center"
        >
          <span className="text-primary-foreground font-semibold text-lg">Voir le profil</span>
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
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0 gap-0 border-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Header with photo */}
          <div className="relative">
            {member.photo ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative h-64 md:h-80 overflow-hidden"
              >
                <img 
                  src={member.photo} 
                  alt={`Portrait de ${member.name}`}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
              </motion.div>
            ) : (
              <div className="h-48 bg-gradient-to-br from-primary via-primary/90 to-primary/70 flex items-center justify-center">
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="text-7xl font-heading font-bold text-primary-foreground/90"
                >
                  {member.name.split(' ').map(n => n[0]).join('')}
                </motion.span>
              </div>
            )}
            
            {/* Name overlay */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="absolute bottom-0 left-0 right-0 p-6"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">
                {member.name}
              </h2>
              {member.profession && (
                <p className="text-secondary font-semibold text-lg mt-1">
                  {member.profession}
                </p>
              )}
            </motion.div>
          </div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="p-6 bg-background"
          >
            {member.bio ? (
              <div className="prose prose-lg max-w-none">
                <blockquote className="border-l-4 border-secondary pl-4 italic text-muted-foreground">
                  "{member.engagement}"
                </blockquote>
                <div className="mt-6 space-y-4 text-foreground leading-relaxed whitespace-pre-line">
                  {member.bio}
                </div>
              </div>
            ) : member.engagement ? (
              <blockquote className="border-l-4 border-secondary pl-4 italic text-muted-foreground text-lg">
                "{member.engagement}"
              </blockquote>
            ) : (
              <p className="text-muted-foreground italic">
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
