import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Newspaper, ExternalLink } from 'lucide-react';

const pressArticles = [
  {
    title: "Le maire sortant présente son bilan de mandat",
    source: "Le Journal Local",
    date: "15 Février 2025",
    url: "#",
  },
  {
    title: "Continuons Ensemble : une équipe renouvelée pour le prochain mandat",
    source: "Info Région",
    date: "10 Février 2025",
    url: "#",
  },
  {
    title: "Les projets phares de la municipalité pour 2025-2031",
    source: "La Gazette Municipale",
    date: "5 Février 2025",
    url: "#",
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
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
              <div className="flex items-start justify-between mb-4">
                <span className="text-sm text-muted-foreground">{article.date}</span>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors" />
              </div>
              
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              
              <p className="text-sm text-secondary font-medium">
                {article.source}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PresseSection;
