import { motion, AnimatePresence } from 'framer-motion';
import { X, Quote } from 'lucide-react';
import logoLight from '@/assets/logos/continuons-ensemble-light.svg';

interface Member {
  name: string;
  profession: string;
  engagement: string;
  photo?: string;
  bio?: string;
}

interface MemberModalProps {
  member: Member | null;
  isOpen: boolean;
  onClose: () => void;
}

const MemberModal = ({ member, isOpen, onClose }: MemberModalProps) => {
  if (!member) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, type: "spring", damping: 25 }}
            className="fixed left-1/2 top-1/2 z-50 w-[95vw] max-w-4xl -translate-x-1/2 -translate-y-1/2 max-h-[90vh] overflow-y-auto"
          >
            <div className="bg-muted rounded-2xl p-6 md:p-10 shadow-2xl border border-border">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 md:right-6 md:top-6 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <X className="w-5 h-5 text-primary" />
              </button>

              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Portrait */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex-shrink-0"
                >
                  <div className="relative">
                    {member.photo ? (
                      <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-secondary shadow-card">
                        <img 
                          src={member.photo} 
                          alt={`Portrait de ${member.name}`}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    ) : (
                      <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-secondary shadow-card bg-gradient-to-br from-primary via-primary/90 to-primary/70 flex items-center justify-center">
                        <span className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground/90">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                    {/* Decorative ring */}
                    <div className="absolute -inset-2 rounded-full border-2 border-primary/20 -z-10" />
                    
                    {/* Logo watermark */}
                    <img 
                      src={logoLight} 
                      alt="" 
                      className="absolute -bottom-2 -right-2 w-16 h-16 opacity-30"
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="text-center lg:text-left flex-1">
                  <Quote className="w-12 h-12 text-secondary mx-auto lg:mx-0 mb-6 opacity-60" />
                  
                  <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-primary mb-2">
                    {member.name}
                  </h2>
                  
                  {member.profession && (
                    <p className="text-lg text-secondary font-semibold mb-6">
                      {member.profession}
                    </p>
                  )}
                  
                  {member.bio ? (
                    <div className="prose prose-lg max-w-none text-foreground/80 space-y-4">
                      {member.bio.split('\n').filter(p => p.trim()).map((paragraph, idx) => (
                        <p key={idx} className="text-base md:text-lg leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ) : member.engagement ? (
                    <div className="prose prose-lg max-w-none text-foreground/80">
                      <p className="text-base md:text-lg leading-relaxed italic">
                        "{member.engagement}"
                      </p>
                    </div>
                  ) : (
                    <p className="text-muted-foreground italic">
                      Biographie à venir...
                    </p>
                  )}
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-8 pt-6 border-t border-border"
                  >
                    <p className="text-sm text-muted-foreground">
                      Membre de la liste
                    </p>
                    <img 
                      src={logoLight} 
                      alt="Continuons Ensemble" 
                      className="h-8 mt-2 mx-auto lg:mx-0 opacity-70"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MemberModal;
