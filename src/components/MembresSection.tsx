import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import yannickvacher from '@/assets/yannick-vacher-portrait.png';
import { useTrackSection } from "@/hooks/useTrackSection.ts";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Member {
  name: string;
  profession: string;
  engagement: string;
  photo?: string; // URL ou import de l'image (optionnel)
}

const members: Member[] = [
  { 
    name: "Yannick Vacher", 
    profession: "Maire sortant", 
    engagement: "Continuer à servir notre commune avec passion et détermination pour les 6 prochaines années.",
    photo: yannickvacher
  },
  { 
    name: "Marie Dupont", 
    profession: "Enseignante", 
    engagement: "L'éducation pour tous, priorité absolue. Former les citoyens de demain."
  },
  { 
    name: "Jean Martin", 
    profession: "Artisan", 
    engagement: "Soutenir nos commerces locaux et dynamiser l'économie de proximité."
  },
  { 
    name: "Sophie Bernard", 
    profession: "Infirmière", 
    engagement: "La santé au cœur de nos préoccupations, accessible à tous."
  },
  { 
    name: "Pierre Moreau", 
    profession: "Agriculteur", 
    engagement: "Préserver notre patrimoine rural et promouvoir une agriculture durable."
  },
  { 
    name: "Claire Rousseau", 
    profession: "Architecte", 
    engagement: "Un urbanisme respectueux de l'environnement et du cadre de vie."
  },
  { 
    name: "Michel Leroy", 
    profession: "Retraité", 
    engagement: "L'expérience au service des générations futures et du lien intergénérationnel."
  },
  { 
    name: "Isabelle Petit", 
    profession: "Commerçante", 
    engagement: "Dynamiser le centre-ville et attirer de nouvelles enseignes."
  },
  { 
    name: "François Garcia", 
    profession: "Ingénieur", 
    engagement: "Innovation et modernisation des services publics numériques."
  },
  { 
    name: "Anne Richard", 
    profession: "Assistante sociale", 
    engagement: "Solidarité et entraide envers les plus vulnérables."
  },
  { 
    name: "Thomas Durand", 
    profession: "Chef d'entreprise", 
    engagement: "Créer des emplois locaux et attirer de nouvelles entreprises."
  },
  { 
    name: "Julie Lambert", 
    profession: "Avocate", 
    engagement: "Justice et équité pour tous dans l'accès aux services."
  },
  { 
    name: "Éric Mercier", 
    profession: "Professeur", 
    engagement: "La culture accessible à tous, moteur d'épanouissement."
  },
  { 
    name: "Nathalie Bonnet", 
    profession: "Médecin", 
    engagement: "Améliorer l'accès aux soins et développer la prévention."
  },
  { 
    name: "David Laurent", 
    profession: "Éducateur sportif", 
    engagement: "Le sport pour la cohésion sociale et le bien-être de tous."
  },
  { 
    name: "Céline Girard", 
    profession: "Comptable", 
    engagement: "Une gestion rigoureuse et transparente des finances communales."
  },
  { 
    name: "Olivier Roux", 
    profession: "Pompier", 
    engagement: "Sécurité et prévention des risques pour protéger nos habitants."
  },
  { 
    name: "Valérie Simon", 
    profession: "Bibliothécaire", 
    engagement: "Promouvoir la lecture et le savoir pour tous les âges."
  },
];

const MembresSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  // 👇 tracking analytics
  useTrackSection(ref, "Membres");

  return (
    <section id="membres" className="section-padding bg-muted" ref={ref}>
      <div className="container-campaign mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
            Notre Équipe
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            18 citoyens engagés pour l'avenir de notre commune
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="group text-center cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative mb-4">
                <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center overflow-hidden shadow-soft group-hover:shadow-card transition-all duration-300 group-hover:scale-105">
                  {member.photo ? (
                    <img 
                      src={member.photo} 
                      alt={`Portrait de ${member.name}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  )}
                </div>
                <div className="absolute inset-0 w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-auto rounded-full border-2 border-secondary opacity-0 group-hover:opacity-100 scale-110 transition-all duration-300" />
              </div>
              
              <h3 className="font-heading font-semibold text-sm md:text-base text-foreground mb-1">
                {member.name}
              </h3>
              
              <p className="text-xs md:text-sm text-secondary font-medium mb-2">
                {member.profession}
              </p>
              
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-3 px-1">
                "{member.engagement}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal membre */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 md:w-40 md:h-40 mb-4 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center overflow-hidden shadow-card">
                {selectedMember?.photo ? (
                  <img 
                    src={selectedMember.photo} 
                    alt={`Portrait de ${selectedMember.name}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">
                    {selectedMember?.name.split(' ').map(n => n[0]).join('')}
                  </span>
                )}
              </div>
              <DialogTitle className="text-xl md:text-2xl font-heading text-primary">
                {selectedMember?.name}
              </DialogTitle>
              <p className="text-secondary font-medium mt-1">
                {selectedMember?.profession}
              </p>
            </div>
          </DialogHeader>
          <DialogDescription className="text-center pt-4 border-t border-border">
            <span className="text-base text-foreground leading-relaxed italic">
              "{selectedMember?.engagement}"
            </span>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default MembresSection;
