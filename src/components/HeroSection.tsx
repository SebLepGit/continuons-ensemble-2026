import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-team.jpg';

const HeroSection = () => {
  const scrollToProgram = () => {
    const element = document.querySelector('#programme');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Logo / Title */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 leading-tight">
            Continuons
            <span className="block text-secondary">Ensemble</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-light">
            Yannick Vacher
          </p>
          
          <p className="text-lg text-primary-foreground/80 mb-12">
            Votre maire sortant, engagé pour notre commune
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToProgram}
            className="group flex flex-col items-center gap-2 text-primary-foreground/90 hover:text-secondary transition-colors duration-300"
          >
            <span className="font-medium text-sm uppercase tracking-widest">
              Découvrir le programme
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown size={32} className="group-hover:text-secondary transition-colors" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
