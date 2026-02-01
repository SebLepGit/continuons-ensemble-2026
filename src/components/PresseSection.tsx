import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Newspaper, ExternalLink } from 'lucide-react';

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

        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {pressArticles.map((article, index) => (
            <motion.a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group bg-card rounded-xl p-6 shadow-soft border border-border hover:shadow-card hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                {/* Logo placeholder */}
                <div className={`flex-shrink-0 w-14 h-14 ${article.logoColor} rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                  {article.logo}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">{article.date}</span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors flex-shrink-0" />
                  </div>
                  
                  <h3 className="font-heading font-semibold text-base md:text-lg text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-3">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm text-secondary font-medium">
                    {article.source}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PresseSection;
