import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Leaf, 
  GraduationCap, 
  HeartHandshake, 
  Building2, 
  Shield 
} from 'lucide-react';
import {useTrackSection} from "@/hooks/useTrackSection.ts";

const programItems = [
  {
    icon: Leaf,
    title: "Transition Écologique",
    description: "Développer les espaces verts, créer des pistes cyclables sécurisées, installer des bornes de recharge électrique et promouvoir les énergies renouvelables dans les bâtiments communaux.",
    animation: "left",
  },
  {
    icon: GraduationCap,
    title: "Éducation & Jeunesse",
    description: "Rénover les écoles, créer un espace numérique pour les jeunes, développer les activités périscolaires et soutenir les associations sportives et culturelles.",
    animation: "right",
  },
  {
    icon: HeartHandshake,
    title: "Solidarité & Seniors",
    description: "Renforcer les services d'aide à domicile, créer un pôle intergénérationnel, améliorer l'accessibilité des espaces publics et organiser des événements pour nos aînés.",
    animation: "left",
  },
  {
    icon: Building2,
    title: "Développement Local",
    description: "Soutenir les commerces de proximité, attirer de nouvelles entreprises, revitaliser le centre-ville et améliorer les infrastructures numériques.",
    animation: "right",
  },
  {
    icon: Shield,
    title: "Sécurité & Tranquillité",
    description: "Renforcer la police municipale, améliorer l'éclairage public, installer des dispositifs de vidéoprotection et créer des actions de prévention.",
    animation: "up",
  },
];

const ProgrammeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

    // 👇 tracking analytics
    useTrackSection(ref, "Programme");

  const getAnimationProps = (animation: string, index: number) => {
    const delay = 0.15 * index;
    
    switch (animation) {
      case "left":
        return {
          initial: { opacity: 0, x: -50 },
          animate: isInView ? { opacity: 1, x: 0 } : {},
          transition: { duration: 0.6, delay },
        };
      case "right":
        return {
          initial: { opacity: 0, x: 50 },
          animate: isInView ? { opacity: 1, x: 0 } : {},
          transition: { duration: 0.6, delay },
        };
      default:
        return {
          initial: { opacity: 0, y: 40 },
          animate: isInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.6, delay },
        };
    }
  };

  return (
    <section id="programme" className="section-padding bg-background" ref={ref}>
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
            5 axes prioritaires pour continuer à construire l'avenir de notre commune
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {programItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                {...getAnimationProps(item.animation, index)}
                className={`bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-card hover:-translate-y-1 transition-all duration-300 ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''
                }`}
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-secondary" />
                </div>
                
                <h3 className="font-heading font-bold text-xl text-primary mb-4">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgrammeSection;
