import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import heroImage from '@/assets/hero-team.jpg';
import {useTrackSection} from "@/hooks/useTrackSection.ts";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

    // 👇 tracking analytics
    useTrackSection(sectionRef, "Hero");

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
          {/* Logo / Title */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 leading-tight">
            Continuons
            <span className="block text-secondary">Ensemble</span>
          </h1>

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
