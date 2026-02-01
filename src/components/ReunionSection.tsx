import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const ReunionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reunion" className="section-padding bg-background" ref={ref}>
      <div className="container-campaign mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
            Réunion Publique
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Venez nombreux échanger avec notre équipe et découvrir notre programme
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card rounded-2xl shadow-card p-8 md:p-12 border border-border">
            <div className="flex flex-col items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center">
                <Users className="w-10 h-10 text-secondary" />
              </div>

              <div className="text-center space-y-6 w-full">
                <div className="flex items-center justify-center gap-3 text-foreground">
                  <Calendar className="w-6 h-6 text-primary" />
                  <span className="text-xl md:text-2xl font-heading font-semibold">
                    3 Mars 2025
                  </span>
                </div>

                <div className="flex items-center justify-center gap-3 text-foreground">
                  <Clock className="w-6 h-6 text-primary" />
                  <span className="text-xl md:text-2xl font-heading font-semibold">
                    19h00
                  </span>
                </div>

                <div className="flex items-center justify-center gap-3 text-foreground">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span className="text-xl md:text-2xl font-heading font-semibold">
                    Salle Benoît Raclet
                  </span>
                </div>
              </div>

              <div className="w-full pt-6 border-t border-border mt-4">
                <p className="text-muted-foreground text-center">
                  Entrée libre • Questions-réponses avec l'équipe
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReunionSection;
