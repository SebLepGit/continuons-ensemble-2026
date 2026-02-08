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

const programItems = [
  {
    icon: Leaf,
    title: "Transition Écologique",
    description: "Hae duae provinciae bello quondam piratico catervis mixtae praedonum a Servilio pro consule missae sub iugum factae sunt vectigales. et hae quidem regiones velut in prominenti terrarum lingua positae ob orbe eoo monte Amano disparantur.",
    animation: "left",
  },
  {
    icon: GraduationCap,
    title: "Éducation & Jeunesse",
    description: "Hae duae provinciae bello quondam piratico catervis mixtae praedonum a Servilio pro consule missae sub iugum factae sunt vectigales. et hae quidem regiones velut in prominenti terrarum lingua positae ob orbe eoo monte Amano disparantur.",
    animation: "left",
  },
  {
    icon: HeartHandshake,
    title: "Solidarité & Seniors",
    description: "Hae duae provinciae bello quondam piratico catervis mixtae praedonum a Servilio pro consule missae sub iugum factae sunt vectigales. et hae quidem regiones velut in prominenti terrarum lingua positae ob orbe eoo monte Amano disparantur.",
    animation: "left",
  },
  {
    icon: Building2,
    title: "Développement Local",
    description: "Hae duae provinciae bello quondam piratico catervis mixtae praedonum a Servilio pro consule missae sub iugum factae sunt vectigales. et hae quidem regiones velut in prominenti terrarum lingua positae ob orbe eoo monte Amano disparantur.",
    animation: "left",
  },
  {
    icon: Shield,
    title: "Sécurité & Tranquillité",
    description: "Hae duae provinciae bello quondam piratico catervis mixtae praedonum a Servilio pro consule missae sub iugum factae sunt vectigales. et hae quidem regiones velut in prominenti terrarum lingua positae ob orbe eoo monte Amano disparantur.",
    animation: "left",
  },
    {
        icon: Shield,
        title: "Sécurité & Tranquillité",
        description: "Hae duae provinciae bello quondam piratico catervis mixtae praedonum a Servilio pro consule missae sub iugum factae sunt vectigales. et hae quidem regiones velut in prominenti terrarum lingua positae ob orbe eoo monte Amano disparantur.",
        animation: "left",
    },
    {
        icon: Shield,
        title: "Sécurité & Tranquillité",
        description: "Hae duae provinciae bello quondam piratico catervis mixtae praedonum a Servilio pro consule missae sub iugum factae sunt vectigales. et hae quidem regiones velut in prominenti terrarum lingua positae ob orbe eoo monte Amano disparantur.",
        animation: "left",
    },
    {
        icon: Shield,
        title: "Sécurité & Tranquillité",
        description: "Hae duae provinciae bello quondam piratico catervis mixtae praedonum a Servilio pro consule missae sub iugum factae sunt vectigales. et hae quidem regiones velut in prominenti terrarum lingua positae ob orbe eoo monte Amano disparantur.",
        animation: "left",
    },
    {
        icon: Shield,
        title: "Sécurité & Tranquillité",
        description: "Hae duae provinciae bello quondam piratico catervis mixtae praedonum a Servilio pro consule missae sub iugum factae sunt vectigales. et hae quidem regiones velut in prominenti terrarum lingua positae ob orbe eoo monte Amano disparantur.",
        animation: "left",
    },
];

const ProgrammeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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
            9 axes prioritaires pour continuer à construire l'avenir de notre commune
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
