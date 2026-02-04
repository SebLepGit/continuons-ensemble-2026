import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import heroImage from '@/assets/hero-team.jpg';
import logoLight from '@/assets/logos/continuons-ensemble-light.svg';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.3]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.7, 0.9]);
  
  const scrollToProgram = () => {
    const element = document.querySelector('#programme');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          y: backgroundY,
          scale: backgroundScale
        }}
      >
        {/* Overlay with dynamic opacity */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90"
          style={{ opacity: overlayOpacity }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex-1 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Logo */}
          <img 
            src={logoLight} 
            alt="Continuons Ensemble" 
            className="h-24 md:h-36 lg:h-44 w-auto mx-auto mb-4"
          />
          
          <p className="text-lg md:text-xl text-primary-foreground/80 font-medium tracking-wide mb-8">
            Élection municipale 2026
          </p>

          <a
            href="https://www.service-public.fr/particuliers/vosdroits/R16396"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:scale-105"
          >
            S'inscrire sur les listes électorales
          </a>

        </motion.div>
      </div>

      {/* CTA Button - Fixed at bottom of hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 pb-8"
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
    </section>
  );
};

export default HeroSection;
