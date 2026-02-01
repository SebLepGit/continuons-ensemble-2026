import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const members = [
  { name: "Yannick Vacher", profession: "Maire sortant", engagement: "Continuer à servir notre commune avec passion" },
  { name: "Marie Dupont", profession: "Enseignante", engagement: "L'éducation pour tous, priorité absolue" },
  { name: "Jean Martin", profession: "Artisan", engagement: "Soutenir nos commerces locaux" },
  { name: "Sophie Bernard", profession: "Infirmière", engagement: "La santé au cœur de nos préoccupations" },
  { name: "Pierre Moreau", profession: "Agriculteur", engagement: "Préserver notre patrimoine rural" },
  { name: "Claire Rousseau", profession: "Architecte", engagement: "Un urbanisme respectueux de l'environnement" },
  { name: "Michel Leroy", profession: "Retraité", engagement: "L'expérience au service des générations futures" },
  { name: "Isabelle Petit", profession: "Commerçante", engagement: "Dynamiser le centre-ville" },
  { name: "François Garcia", profession: "Ingénieur", engagement: "Innovation et modernisation" },
  { name: "Anne Richard", profession: "Assistante sociale", engagement: "Solidarité et entraide" },
  { name: "Thomas Durand", profession: "Chef d'entreprise", engagement: "Créer des emplois locaux" },
  { name: "Julie Lambert", profession: "Avocate", engagement: "Justice et équité pour tous" },
  { name: "Éric Mercier", profession: "Professeur", engagement: "La culture accessible à tous" },
  { name: "Nathalie Bonnet", profession: "Médecin", engagement: "Améliorer l'accès aux soins" },
  { name: "David Laurent", profession: "Éducateur sportif", engagement: "Le sport pour la cohésion sociale" },
  { name: "Céline Girard", profession: "Comptable", engagement: "Une gestion rigoureuse et transparente" },
  { name: "Olivier Roux", profession: "Pompier", engagement: "Sécurité et prévention des risques" },
  { name: "Valérie Simon", profession: "Bibliothécaire", engagement: "Promouvoir la lecture et le savoir" },
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
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
            Notre Équipe
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            18 citoyens engagés pour l'avenir de notre commune
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="group text-center"
            >
              <div className="relative mb-4">
                <div className="w-24 h-24 md:w-28 md:h-28 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center overflow-hidden shadow-soft group-hover:shadow-card transition-shadow duration-300">
                  <span className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="absolute inset-0 w-24 h-24 md:w-28 md:h-28 mx-auto rounded-full border-2 border-secondary opacity-0 group-hover:opacity-100 scale-110 transition-all duration-300" />
              </div>
              
              <h3 className="font-heading font-semibold text-sm md:text-base text-foreground mb-1">
                {member.name}
              </h3>
              
              <p className="text-xs md:text-sm text-secondary font-medium mb-2">
                {member.profession}
              </p>
              
              <p className="text-xs text-muted-foreground leading-snug hidden md:block">
                "{member.engagement}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembresSection;
