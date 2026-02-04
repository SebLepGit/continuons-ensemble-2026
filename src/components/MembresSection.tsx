import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import yannickvacher from '@/assets/yannick-vacher-portrait.png';

interface Member {
  name: string;
  profession: string;
  engagement: string;
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
    profession: "", 
    engagement: ""
  },
  { 
    name: "Jean-Pierre Reynier", 
    profession: "", 
    engagement: ""
  },
  { 
    name: "Perrine Janin", 
    profession: "", 
    engagement: ""
  },
  { 
    name: "Joël Broutin", 
    profession: "", 
    engagement: ""
  },
  { 
    name: "Pascale Romani", 
    profession: "", 
    engagement: ""
  },
  { 
    name: "Maurice Favre", 
    profession: "", 
    engagement: ""
  },
  { 
    name: "Vanina Depardon", 
    profession: "", 
    engagement: ""
  },
  { 
    name: "Frédéric Meunier", 
    profession: "", 
    engagement: ""
  },
  { 
    name: "Josette Gombert", 
    profession: "", 
    engagement: ""
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

const MemberCard = ({ member, index, isInView }: { member: Member; index: number; isInView: boolean }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.08 * index }}
      className="group relative cursor-pointer"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onClick={() => setIsActive(!isActive)}
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
          <p className="text-sm text-secondary font-medium">
            {member.profession}
          </p>
        </div>

        {/* Overlay on hover/click with blur effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 backdrop-blur-sm bg-primary/80 flex flex-col justify-end p-4 md:p-5"
        >
          <h3 className="font-heading font-semibold text-lg md:text-xl text-primary-foreground mb-1">
            {member.name}
          </h3>
          <p className="text-sm md:text-base text-secondary font-semibold mb-3">
            {member.profession}
          </p>
          <p className="text-sm md:text-base text-primary-foreground/90 leading-relaxed">
            "{member.engagement}"
          </p>
        </motion.div>
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
