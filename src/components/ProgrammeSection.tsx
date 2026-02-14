import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Car, 
  Building, 
  Users, 
  TreePine,
  Check
} from 'lucide-react';

const programAxes = [
  {
    icon: Car,
    title: "Circulation & Voirie",
    accent: "from-primary to-primary/80",
    items: [
      "Favorisation des déplacements doux (piétons, vélo)",
      "Sécurisation des croisements",
      "Lutte contre la vitesse et l'accidentologie récurrente",
      "Optimisation des itinéraires poids lourds",
      "Amélioration de l'éclairage public",
      "Amélioration de la signalétique touristique",
      "Réaménagement des quartiers",
    ],
  },
  {
    icon: Building,
    title: "Bâtiments & Patrimoine",
    accent: "from-secondary to-secondary/80",
    items: [
      "Réfection totale de la place Benoit Raclet (création d'îlots de fraîcheur)",
      "Création d'une halle communale sur la place",
      "Mise en accessibilité PMR des bâtiments municipaux",
      "Renforcement de l'isolation thermique des bâtiments",
      "Changement système de chauffage et régulation thermique",
    ],
  },
  {
    icon: Users,
    title: "Services à la Population",
    accent: "from-primary to-primary/80",
    items: [
      "Mise en place d'un budget participatif pour financer des projets citoyens",
      "Moderniser l'identité numérique de la commune",
      "Communiquer plus régulièrement sur les réalisations",
      "Favorisation du commerce de proximité",
      "Rénovation des installations sportives",
      "Renforcement du secteur associatif",
      "Mise à disposition d'une salle pour les cérémonies laïques",
      "Renforcement de l'offre de transport",
    ],
  },
  {
    icon: TreePine,
    title: "Environnement & Embellissement",
    accent: "from-secondary to-secondary/80",
    items: [
      "Éclairage public, remplacement progressif par des LEDs",
      "Plantation d'arbres sur la place et la zone de loisir",
      "Continuer la politique de fleurissement pour obtenir la distinction village fleuri",
      "Aménagement du clos des mines",
    ],
  },
];

const ProgrammeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="programme" className="section-padding bg-muted" ref={ref}>
      <div className="container-campaign mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
            Notre Programme
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            4 axes prioritaires pour continuer à construire l'avenir de notre commune
          </p>
        </motion.div>

        <div className="space-y-10 max-w-5xl mx-auto">
          {programAxes.map((axe, axeIndex) => {
            const Icon = axe.icon;
            const isEven = axeIndex % 2 === 0;

            return (
              <motion.div
                key={axeIndex}
                initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * axeIndex }}
                className="bg-card rounded-2xl border border-border shadow-soft overflow-hidden"
              >
                <div className={`flex flex-col md:flex-row ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                  {/* Colored sidebar with icon & title */}
                  <div className={`bg-gradient-to-b ${axe.accent} p-8 md:p-10 flex flex-col items-center justify-center md:w-72 shrink-0`}>
                    <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-white text-center leading-tight">
                      {axe.title}
                    </h3>
                    <div className="mt-3 text-white/70 text-sm font-medium">
                      {axe.items.length} engagements
                    </div>
                  </div>

                  {/* Items list */}
                  <div className="p-6 md:p-8 flex-1">
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {axe.items.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.2 * axeIndex + 0.07 * i }}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted transition-colors duration-200"
                        >
                          <span className={`mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br ${axe.accent} flex items-center justify-center shrink-0`}>
                            <Check className="w-3 h-3 text-white" strokeWidth={3} />
                          </span>
                          <span className="text-foreground/80 text-sm leading-relaxed">
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgrammeSection;
