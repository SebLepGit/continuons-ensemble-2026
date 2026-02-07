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
            {/* Portrait du maire avec design comme l'image de référence */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0 flex flex-col items-center"
            >
              <div className="relative pb-8">
                {/* Cercle bleu extérieur avec marge réduite (8px) */}
                <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full border-4 border-primary flex items-center justify-center">
                  {/* Photo en cercle - marge réduite */}
                  <div className="w-44 h-44 md:w-60 md:h-60 lg:w-68 lg:h-68 rounded-full overflow-hidden">
                    <img 
                      src={mairePortrait} 
                      alt="Yannick Vacher, Maire de Romanèche-Thorins"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                
                {/* Icône décorative en haut à droite */}
                <div className="absolute -top-2 -right-2 text-secondary">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M12 2v2M12 14v2M8 8H6M18 8h-2" />
                  </svg>
                </div>
                
                {/* Cadres nom et fonction - remontés sous le cercle */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  {/* Cadre nom - fond transparent avec bordure */}
                  <div className="px-6 py-1.5 border-2 border-primary rounded-t-lg bg-background">
                    <p className="font-heading text-lg md:text-xl text-primary italic whitespace-nowrap">
                      Yannick VACHER
                    </p>
                  </div>
                  
                  {/* Cadre fonction - fond bleu, collé au cadre du nom */}
                  <div className="px-6 py-1 bg-primary rounded-b-md">
                    <p className="text-xs md:text-sm text-primary-foreground font-medium whitespace-nowrap">
                      Votre Maire sortant
                    </p>
                  </div>
                </div>
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
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MessageSection;
