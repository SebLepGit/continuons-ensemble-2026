import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Car, 
  Building, 
  Users, 
  TreePine,
  ChevronDown
} from 'lucide-react';

const programAxes = [
  {
    icon: Car,
    title: "Circulation & Voirie",
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
    items: [
      "Éclairage public, remplacement progressif par des LEDs",
      "Plantation d'arbres sur la place et la zone de loisir",
      "Continuer la politique de fleurissement pour obtenir la distinction village fleuri",
      "Aménagement du clos des mines",
    ],
  },
];

const AxeCard = ({ axe, index, isInView }: { axe: typeof programAxes[0]; index: number; isInView: boolean }) => {
  const [open, setOpen] = useState(false);
  const Icon = axe.icon;
  const previewCount = 3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.15 * index }}
      className="bg-card rounded-2xl border border-border shadow-soft overflow-hidden hover:shadow-card transition-shadow duration-300"
    >
      {/* Header */}
      <div className="bg-primary p-6 flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
          <Icon className="w-6 h-6 text-secondary" />
        </div>
        <h3 className="font-heading font-bold text-xl text-primary-foreground">
          {axe.title}
        </h3>
      </div>

      {/* Items */}
      <div className="p-6">
        <ul className="space-y-3">
          {axe.items.slice(0, open ? axe.items.length : previewCount).map((item, i) => (
            <motion.li
              key={i}
              initial={i >= previewCount ? { opacity: 0, height: 0 } : false}
              animate={i >= previewCount ? { opacity: 1, height: 'auto' } : undefined}
              transition={{ duration: 0.3, delay: (i - previewCount) * 0.05 }}
              className="flex items-start gap-3"
            >
              <span className="mt-1.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
              <span className="text-muted-foreground leading-relaxed text-sm">
                {item}
              </span>
            </motion.li>
          ))}
        </ul>

        {axe.items.length > previewCount && (
          <button
            onClick={() => setOpen(!open)}
            className="mt-4 flex items-center gap-1.5 text-secondary font-medium text-sm hover:opacity-80 transition-opacity"
          >
            {open ? 'Voir moins' : `Voir les ${axe.items.length - previewCount} autres points`}
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
          </button>
        )}
      </div>
    </motion.div>
  );
};

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

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {programAxes.map((axe, index) => (
            <AxeCard key={index} axe={axe} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgrammeSection;
