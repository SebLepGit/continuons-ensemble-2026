import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Facebook, Instagram } from 'lucide-react';
import logoLight from '@/assets/logos/continuons-ensemble-light.svg';
import logoDark from '@/assets/logos/continons-ensemble-dark.svg';

const navLinks = [
  { name: 'Accueil', href: '#hero' },
  { name: 'Message', href: '#message' },
  { name: 'Réunion publique', href: '#reunion' },
  { name: 'Presse', href: '#presse' },
  { name: 'Programme', href: '#programme' },
  { name: 'Membres', href: '#membres' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-navbar'
            : 'bg-transparent'
        }`}
      >
        <div className="container-campaign mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('#hero')}
              className="transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={isScrolled ? logoDark : logoLight} 
                alt="Continuons Ensemble" 
                className="h-10 md:h-14 w-auto"
              />
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`font-medium text-sm transition-colors duration-300 hover:text-secondary ${
                    isScrolled ? 'text-foreground' : 'text-primary-foreground'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              
              {/* Social Icons */}
              <div className="flex items-center gap-3 ml-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition-all duration-300 hover:bg-secondary hover:text-secondary-foreground ${
                    isScrolled ? 'text-primary' : 'text-primary-foreground'
                  }`}
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition-all duration-300 hover:bg-secondary hover:text-secondary-foreground ${
                    isScrolled ? 'text-primary' : 'text-primary-foreground'
                  }`}
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${
                isScrolled ? 'text-primary' : 'text-primary-foreground'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-20 lg:hidden"
          >
            <div className="flex flex-col items-center gap-6 p-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.href)}
                  className="font-heading font-semibold text-xl text-foreground hover:text-secondary transition-colors"
                >
                  {link.name}
                </motion.button>
              ))}
              
              <div className="flex items-center gap-6 mt-8">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-secondary transition-colors"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-secondary transition-colors"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
