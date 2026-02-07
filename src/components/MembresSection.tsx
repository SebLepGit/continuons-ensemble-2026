import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import yannickvacher from '@/assets/yannick-vacher-portrait.png';
import jeanpierrereynier from '@/assets/portraits/jeanpierre-reynier-portrait.png';
import mauricefavre from '@/assets/portraits/maurice-favre-portrait.png';
import josettegombert from '@/assets/portraits/josette-gombert-portrait.png';
import joelbroutin from '@/assets/portraits/joel-broutin-portrait.png';
import moniquedutraive from '@/assets/portraits/monique-dutraive-portrait.png';
import fredericmeunier from '@/assets/portraits/frederic-meunier-portrait.png';
import logoWatermark from '@/assets/logos/continuons-ensemble-light.svg';

interface Member {
  name: string;
  profession: string;
  verbatim: string;
  photo?: string;
}

const members: Member[] = [
  { 
    name: "Yannick Vacher", 
    profession: "Maire sortant", 
    verbatim: "Continuer à servir notre commune avec passion et détermination.",
    photo: yannickvacher
  },
  { 
    name: "Monique Dutraive", 
    profession: "", 
    verbatim: "",
    photo: moniquedutraive
  },
  { 
    name: "Jean-Pierre Reynier", 
    profession: "", 
    verbatim: "",
    photo: jeanpierrereynier
  },
  { 
    name: "Perrine Janin", 
    profession: "", 
    verbatim: ""
  },
  { 
    name: "Joël Broutin", 
    profession: "", 
    verbatim: "",
    photo: joelbroutin
  },
  { 
    name: "Pascale Romani", 
    profession: "", 
    verbatim: ""
  },
  { 
    name: "Maurice Favre", 
    profession: "", 
    verbatim: "",
    photo: mauricefavre
  },
  { 
    name: "Vanina Depardon", 
    profession: "", 
    verbatim: ""
  },
  { 
    name: "Frédéric Meunier", 
    profession: "", 
    verbatim: "",
    photo: fredericmeunier
  },
  { 
    name: "Josette Gombert", 
    profession: "", 
    verbatim: "",
    photo: josettegombert
  },
  { 
    name: "Raphaël Gaudin", 
    profession: "", 
    verbatim: ""
  },
  { 
    name: "Catherine Vincent", 
    profession: "", 
    verbatim: ""
  },
  { 
    name: "Sébastien Lépine", 
    profession: "", 
    verbatim: ""
  },
  { 
    name: "Andrea Moscicki", 
    profession: "", 
    verbatim: ""
  },
  { 
    name: "Joaquin Fernandez", 
    profession: "", 
    verbatim: ""
  },
  { 
    name: "Annie Rochet", 
    profession: "", 
    verbatim: ""
  },
  { 
    name: "Marc Dupuy", 
    profession: "", 
    verbatim: ""
  },
  { 
    name: "Andrée Defnet", 
    profession: "", 
    verbatim: ""
  },
  { 
    name: "Jean-Pierre Large", 
    profession: "", 
    verbatim: ""
  },
];

const MemberCard = ({ member, index, isInView }: { member: Member; index: number; isInView: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.05 * index }}
      className="group relative"
    >
      <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
        {/* Photo or Initials */}
        <div className="relative aspect-square overflow-hidden">
          {member.photo ? (
            <img 
              src={member.photo} 
              alt={`Portrait de ${member.name}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary via-primary/80 to-secondary/60 flex items-center justify-center relative">
              <span className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground/90 z-10">
                {member.name.split(' ').map(n => n[0]).join('')}
              </span>
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                  backgroundSize: '24px 24px'
                }} />
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 relative">
          {/* Logo watermark */}
          <img 
            src={logoWatermark} 
            alt="" 
            className="absolute top-3 right-3 h-6 w-auto opacity-10"
          />
          
          {/* Name */}
          <h3 className="font-heading font-semibold text-lg text-primary mb-1">
            {member.name}
          </h3>
          
          {/* Profession */}
          {member.profession && (
            <p className="text-sm text-secondary font-medium mb-3">
              {member.profession}
            </p>
          )}
          
          {/* Verbatim */}
          {member.verbatim && (
            <p className="text-sm text-muted-foreground italic leading-relaxed">
              "{member.verbatim}"
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const MembresSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembresSection;
