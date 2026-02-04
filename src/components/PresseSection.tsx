import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Newspaper, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pressArticles = [
  {
    title: "« Six ans c'est long, mais c'est court pour tout réaliser » : Yannick Vacher repart en tête de liste pour les municipales",
    source: "Le Journal de Saône-et-Loire",
    date: "23 Janvier 2026",
    url: "https://www.lejsl.com/elections/2026/01/23/six-ans-c-est-long-mais-c-est-court-pour-tout-realiser-yannick-vacher-repart-en-tete-de-liste-pour-les-municipales",
    logo: "JSL",
    logoColor: "bg-red-600",
  },
  {
    title: "Municipales 2026 : Yannick Vacher va briguer un nouveau mandat à Romanèche-Thorins",
    source: "MesInfos / Le Patriote",
    date: "28 Janvier 2026",
    url: "https://mesinfos.fr/auvergne-rhone-alpes/municipales-2026-yannick-vacher-va-briguer-un-nouveau-mandat-a-romaneche-thorins-238629.html",
    logo: "MI",
    logoColor: "bg-[#5e233a]",
  },
];

const PresseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const scrollPrev = () => {
    setCurrent((prev) => (prev === 0 ? pressArticles.length - 1 : prev - 1));
  };

  const scrollNext = () => {
    setCurrent((prev) => (prev === pressArticles.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="presse" className="section-padding bg-muted" ref={ref}>
      <div className="container-campaign mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <Newspaper className="w-12 h-12 text-secondary mx-auto mb-4" />
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
            Presse
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Retrouvez les derniers articles de presse sur notre campagne
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Carousel container */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-out"
              animate={{ x: `-${current * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {pressArticles.map((article, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <motion.a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="group block bg-card rounded-xl p-6 md:p-8 shadow-soft border border-border hover:shadow-card transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 md:gap-6">
                      {/* Logo placeholder */}
                      <div className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 ${article.logoColor} rounded-xl flex items-center justify-center text-white font-bold text-xl md:text-2xl shadow-md`}>
                        {article.logo}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-muted-foreground">{article.date}</span>
                          <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors flex-shrink-0" />
                        </div>
                        
                        <h3 className="font-heading font-semibold text-lg md:text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        
                        <p className="text-base text-secondary font-medium">
                          {article.source}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full h-10 w-10 border-primary/20 hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Article précédent</span>
            </Button>

            {/* Dots indicator */}
            <div className="flex gap-2">
              {pressArticles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === current 
                      ? 'bg-secondary w-8' 
                      : 'bg-primary/20 hover:bg-primary/40 w-2.5'
                  }`}
                  aria-label={`Aller à l'article ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full h-10 w-10 border-primary/20 hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Article suivant</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresseSection;
