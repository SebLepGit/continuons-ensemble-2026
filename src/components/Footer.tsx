import { motion } from 'framer-motion';
import { Facebook, Instagram, Mail, MapPin } from 'lucide-react';
import logoLight from '@/assets/logos/continuons-ensemble-light.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container-campaign mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {/* Brand */}
          <div>
            <img 
              src={logoLight} 
              alt="Continuons Ensemble" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-primary-foreground/80 leading-relaxed">
              Continuons à construire l'avenir de notre commune
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@continuons-ensemble.fr"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                <Mail size={18} />
                <span>contact@continuons-ensemble.fr</span>
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Suivez-nous</h4>
            <div className="flex gap-4">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Facebook size={22} />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Instagram size={22} />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Continuons Ensemble - Tous droits réservés
          </p>
          <p className="text-primary-foreground/40 text-xs mt-2">
            Élections municipales 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
