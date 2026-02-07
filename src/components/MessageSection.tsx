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
            {/* Portrait du maire */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-secondary shadow-card">
                  <img 
                    src={mairePortrait} 
                    alt="Yannick Vacher, Maire de Romanèche-Thorins"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Decorative ring */}
                <div className="absolute -inset-2 rounded-full border-2 border-primary/20 -z-10" />
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
                   Maire sortant
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
