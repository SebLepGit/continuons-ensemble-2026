import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const MessageSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="message" className="section-padding bg-muted" ref={ref}>
      <div className="container-campaign mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Quote className="w-16 h-16 text-secondary mx-auto mb-8 opacity-60" />
          
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary mb-8">
            Message de Yannick Vacher
          </h2>
          
          <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
            <p className="text-lg md:text-xl leading-relaxed">
              Chers concitoyens et concitoyennes,
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed">
              Depuis six ans, j'ai eu l'honneur de servir notre commune avec passion et dévouement. 
              Ensemble, nous avons accompli de nombreux projets qui ont transformé positivement 
              notre cadre de vie : rénovation des infrastructures, développement des espaces verts, 
              amélioration des services aux familles et aux aînés.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed">
              Mais notre travail n'est pas terminé. Il reste tant à faire pour préparer l'avenir 
              de notre commune et des générations futures. C'est pourquoi je vous propose de 
              continuer cette aventure ensemble, avec la même énergie et le même engagement.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed font-semibold text-primary">
              Continuons Ensemble à bâtir la commune que nous aimons.
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12"
          >
            <p className="font-heading font-semibold text-xl text-primary">
              Yannick Vacher
            </p>
            <p className="text-muted-foreground">
              Votre Maire sortant
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MessageSection;
