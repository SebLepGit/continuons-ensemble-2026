import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import MemberAvatar from './MemberAvatar';
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
  photo?: string;
}

const members: Member[] = [
  { 
    name: "Yannick Vacher", 
    profession: "Maire sortant", 
    photo: yannickvacher
  },
  { 
    name: "Monique Dutraive", 
    profession: "",
    photo: moniquedutraive
  },
  { 
    name: "Jean-Pierre Reynier", 
    profession: "",
    photo: jeanpierrereynier
  },
  { 
    name: "Perrine Janin", 
    profession: ""
  },
  { 
    name: "Joël Broutin", 
    profession: "",
    photo: joelbroutin
  },
  { 
    name: "Pascale Romani", 
    profession: ""
  },
  { 
    name: "Maurice Favre", 
    profession: "",
    photo: mauricefavre
  },
  { 
    name: "Vanina Depardon", 
    profession: ""
  },
  { 
    name: "Frédéric Meunier", 
    profession: "",
    photo: fredericmeunier
  },
  { 
    name: "Josette Gombert", 
    profession: "",
    photo: josettegombert
  },
  { 
    name: "Raphaël Gaudin", 
    profession: ""
  },
  { 
    name: "Catherine Vincent", 
    profession: ""
  },
  { 
    name: "Sébastien Lépine", 
    profession: ""
  },
  { 
    name: "Andrea Moscicki", 
    profession: ""
  },
  { 
    name: "Joaquin Fernandez", 
    profession: ""
  },
  { 
    name: "Annie Rochet", 
    profession: ""
  },
  { 
    name: "Marc Dupuy", 
    profession: ""
  },
  { 
    name: "Andrée Defnet", 
    profession: ""
  },
  { 
    name: "Jean-Pierre Large", 
    profession: ""
  },
];

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

        {/* Grid: responsive layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto justify-items-center">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * index }}
            >
              <MemberAvatar 
                name={member.name}
                profession={member.profession}
                photo={member.photo}
                size="md"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembresSection;
