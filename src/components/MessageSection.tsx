import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';
import mairePortrait from '@/assets/yannick-vacher-portrait.png';

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
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Portrait du maire - Style carte */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <div className="relative bg-primary rounded-2xl p-6 pb-4 shadow-card">
                {/* Decorative elements */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <div className="w-1 h-1 rounded-full bg-secondary/60" />
                  <div className="w-3 h-3 rounded-full border-2 border-secondary flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-secondary" />
                  </div>
                  <div className="w-1 h-1 rounded-full bg-secondary/60" />
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                </div>
                
                {/* Photo circulaire */}
                <div className="mt-4 relative">
                  <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-secondary mx-auto">
                    <img 
                      src={mairePortrait} 
                      alt="Yannick Vacher, Maire de Romanèche-Thorins"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                
                {/* Nom et badge */}
                <div className="text-center mt-4">
                  <h3 className="font-heading text-xl md:text-2xl text-primary-foreground italic">
                    Yannick Vacher
                  </h3>
                  <div className="mt-2 inline-block bg-secondary text-secondary-foreground px-6 py-1.5 rounded-full text-sm font-semibold">
                    Votre Maire
                  </div>
                </div>
                
                {/* Bottom decorative bar */}
                <div className="mt-4 h-1.5 bg-secondary rounded-full" />
              </div>
            </motion.div>

            {/* Message content */}
            <div className="text-center lg:text-left flex-1">
              <Quote className="w-12 h-12 text-secondary mx-auto lg:mx-0 mb-6 opacity-60" />
              
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary mb-6">
                Message de Yannick Vacher
              </h2>
              
              <div className="prose prose-lg max-w-none text-foreground/80 space-y-4">
                <p className="text-lg leading-relaxed">
                  Chers concitoyens et concitoyennes,
                </p>
                
                <p className="text-base md:text-lg leading-relaxed">
                  Depuis six ans, j'ai eu l'honneur de servir notre commune avec passion et dévouement. 
                  Ensemble, nous avons accompli de nombreux projets qui ont transformé positivement 
                  notre cadre de vie : rénovation des infrastructures, développement des espaces verts, 
                  amélioration des services aux familles et aux aînés.
                </p>
                
                <p className="text-base md:text-lg leading-relaxed">
                  Mais notre travail n'est pas terminé. Il reste tant à faire pour préparer l'avenir 
                  de notre commune et des générations futures. C'est pourquoi je vous propose de 
                  continuer cette aventure ensemble, avec la même énergie et le même engagement.
                </p>
                
                <p className="text-base md:text-lg leading-relaxed font-semibold text-primary">
                  Continuons Ensemble à bâtir la commune que nous aimons.
                </p>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8"
              >
                <p className="font-heading font-semibold text-xl text-primary">
                  Yannick Vacher
                </p>
                <p className="text-muted-foreground">
                  Votre Maire sortant
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MessageSection;
