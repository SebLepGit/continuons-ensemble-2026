import {motion, AnimatePresence} from 'framer-motion';
import {useInView} from 'framer-motion';
import {useRef, useState} from 'react';
import {Dialog, DialogContent, DialogHeader, DialogTitle} from '@/components/ui/dialog';
import {Quote, X} from 'lucide-react';
import yannickvacher from '@/assets/yannick-vacher-portrait.png';
import jeanpierrereynier from '@/assets/portraits/jeanpierre-reynier-portrait.png';
import mauricefavre from '@/assets/portraits/maurice-favre-portrait.png';
import josettegombert from '@/assets/portraits/josette-gombert-portrait.png';
import joelbroutin from '@/assets/portraits/joel-broutin-portrait.png';
import moniquedutraive from '@/assets/portraits/monique-dutraive-portrait.png';
import fredericmeunier from '@/assets/portraits/frederic-meunier-portrait.png';

interface Member {
    name: string;
    profession: string;
    engagement: string;
    bio?: string;
    photo?: string;
}

const loremBio150 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.`;

const bioEnCours = "Biographie en cours de rédaction.";

const members: Member[] = [
    {
        name: "Yannick Vacher",
        profession: "Retraité (Finance & Conseil) / Maire sortant",
        engagement: "Avec rigueur et envie intacte, je sollicite votre confiance pour finaliser nos projets et continuer à améliorer notre qualité de vie.",
        bio: `Romanéchois depuis 28 ans, j'ai choisi en 2020 de mettre mon expérience au service de notre collectivité après une carrière exigeante dans la finance et le conseil. Depuis 6 ans, avec une équipe soudée, nous avons travaillé sans relâche pour que Romanèche-Thorins change de visage et gagne en qualité de vie.

Mais l'action publique est un temps long, et de nombreux projets attendent encore d'être finalisés pour vous bénéficier pleinement. C'est avec cette même rigueur et une envie intacte que je sollicite votre confiance pour un nouveau mandat.`,
        photo: yannickvacher
    },
    {
        name: "Monique Lenfant Dutraive",
        profession: "Responsable de service social retraitée",
        engagement: "Je souhaite continuer à mettre mes compétences humaines et administratives au service d'une commune solidaire et attentionnée.",
        bio: `Installée au quartier du Moulin à Vent depuis 2013, je suis issue d'une famille de vignerons de Fleurie. J'ai consacré ma vie professionnelle au service social pour différents ministères.

Conseillère municipale sortante, je me suis particulièrement investie au CCAS pour soutenir les plus fragiles d'entre nous. Très active dans le milieu associatif, notamment pour les résidents de l'EHPAD et nos anciens, je souhaite continuer à mettre mes compétences humaines et administratives au service d'une commune solidaire et attentionnée envers chacun de ses habitants.`,
        photo: moniquedutraive
    },
    {
        name: "Jean-Pierre Reynier",
        profession: "1er Adjoint sortant / Ancien technicien territorial",
        engagement: "Je souhaite poursuivre ce travail de terrain pour vous garantir des infrastructures sûres et de qualité.",
        bio: `Romanéchois depuis 1966, mon parcours est celui d'un engagement total pour Romanèche-Thorins, que ce soit à la tête du centre de secours pendant 10 ans ou au sein de la VSR depuis deux décennies.

Marié et père de trois enfants, j'ai mis ma carrière de technicien territorial au service de l'aménagement de notre espace public. Adjoint à la voirie sortant, je souhaite poursuivre ce travail de terrain pour vous garantir des infrastructures sûres et de qualité, en m'appuyant sur ma connaissance intime de notre territoire.`,
        photo: jeanpierrereynier
    },
    {
        name: "Perrine Janin",
        profession: "Viticultrice",
        engagement: "Mon engagement : soutenir les projets en cours tout en portant des idées innovantes pour l'avenir de nos concitoyens.",
        bio: `Enfant du pays du quartier de la Chanillière, j'ai grandi au cœur de nos vignes. Après des études d'œnologie et des expériences enrichissantes en Australie et aux États-Unis, je suis revenue aux racines pour travailler aux côtés de mon père sur le domaine familial.

Très impliquée dans la vie du Cru Moulin-à-Vent, je souhaite aujourd'hui apporter l'énergie de ma jeunesse et un regard neuf à notre conseil municipal. Mon engagement : soutenir les projets en cours tout en portant des idées innovantes pour l'avenir de nos concitoyens.`
    },
    {
        name: "Joël Broutin",
        profession: "Lorem ipsum dolor sit amet",
        engagement: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        bio: bioEnCours,
        photo: joelbroutin
    },
    {
        name: "Pascale Romani",
        profession: "Lorem ipsum dolor sit amet",
        engagement: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        bio: bioEnCours
    },
    {
        name: "Maurice Favre",
        profession: "Adjoint aux travaux / Ancien Directeur technique",
        engagement: "Mon engagement personnel : mettre mon expertise professionnelle au service du suivi rigoureux de nos chantiers communaux.",
        bio: `Résident depuis 1981, j'ai été Directeur technique dans le bâtiment durant ma carrière. J'ai toujours aimé construire et organiser. Engagé de longue date dans le milieu associatif et passionné d'auto-modélisme, j'ai rejoint le conseil en 2014 avant de devenir Adjoint en charge des travaux en 2020.

Mon engagement personnel reste le même : mettre mon expertise professionnelle au service de notre liste pour assurer le suivi rigoureux de nos chantiers communaux et préparer l'avenir de nos bâtiments.`,
        photo: mauricefavre
    },
    {
        name: "Vanina Depardon",
        profession: "Responsable adjointe en logistique vinicole",
        engagement: "Je m'engage avec détermination pour poursuivre les projets structurants et contribuer au bien-être de notre village.",
        bio: `Résidente depuis 2018, mon lien avec Romanèche-Thorins remonte à 2002, année où j'y tenais un commerce. Ancienne commerçante, je suis aujourd'hui responsable logistique dans le secteur du vin.

Je suis également très impliquée dans la vie associative en tant que trésorière de la Pétanque Romanéchoise. Je m'engage avec détermination pour poursuivre les projets structurants lancés par l'équipe actuelle et contribuer, chaque jour, à améliorer le bien-être et le dynamisme de notre beau village.`
    },
    {
        name: "Frédéric Meunier",
        profession: "Aide-soignant en santé publique",
        engagement: "Je veux défendre la culture comme ciment de notre lien social, favorisant le partage et le dynamisme.",
        bio: `Installé au quartier de la Pierre depuis 20 ans, je suis aide-soignant dévoué au service public hospitalier. J'ai passé ma carrière à prendre soin des autres. Profondément attaché au quartier de la Pierre, je souhaite désormais porter cet engagement au sein de notre conseil municipal.

Passionné de musique et de théâtre, je suis convaincu que la culture est le ciment de notre lien social. Elle favorise le partage et le dynamisme, des valeurs que je veux défendre pour notre commune.`,
        photo: fredericmeunier
    },
    {
        name: "Josette Gombert",
        profession: "Adjointe sortante au social / Institutrice retraitée",
        engagement: "Je reste présente pour accompagner la finalisation de nos grands projets et aider à imaginer ceux de demain.",
        bio: `Installée au quartier des Guillates depuis 15 ans, ancienne institutrice, j'ai eu l'honneur de servir notre commune en tant qu'adjointe au social durant ce mandat. Installée définitivement dans notre maison de famille aux Guillates, je ressens une immense fierté pour tout ce que nous avons accompli en 6 ans.

Si je souhaite aujourd'hui laisser la place à de nouvelles responsabilités, je reste présente sur la liste pour accompagner la finalisation de nos grands projets et aider à imaginer ceux de demain.`,
        photo: josettegombert
    },
    {
        name: "Raphaël Gaudin",
        profession: "Responsable informatique",
        engagement: "Je m'engage pour une commune moderne, efficace et toujours tournée vers l'avenir.",
        bio: `Habitant de la rue des Garniers depuis 3 ans, j'ai immédiatement été séduit par la convivialité et l'âme de notre village. Pour m'ancrer concrètement dans la vie locale, j'ai rejoint le Comité des Fêtes et je ne manque jamais le rendez-vous annuel des vendanges.

Professionnel de l'informatique, je souhaite mettre ma technicité au service d'une gestion municipale dont j'ai pu apprécier le sérieux et la rigueur. Je m'engage pour une commune moderne, efficace et toujours tournée vers l'avenir.`
    },
    {
        name: "Catherine Vincent",
        profession: "Ancienne salariée locale",
        engagement: "Mon ambition est simple : être à votre écoute et participer activement aux projets qui font battre le cœur de notre vie locale.",
        bio: `Enfant de Romanèche-Thorins, j'ai toujours vécu à Romanèche, un village auquel je suis viscéralement attachée. En y travaillant durant la majeure partie de ma carrière, j'ai eu la chance de bien connaître notre commune et, surtout, de vous connaître, vous, ses habitants.

Ancienne membre active du foyer rural, j'ai aujourd'hui le désir profond de m'investir davantage. Mon ambition est simple : être à votre écoute et participer activement aux projets qui font battre le cœur de notre vie locale.`
    },
    {
        name: "Sébastien Lépine",
        profession: "Engineering Manager",
        engagement: "Convaincu que chacun peut apporter sa pierre à l'édifice, je mets mon énergie et mes compétences au service de Romanèche-Thorins.",
        bio: `36 ans, marié et papa d'un enfant de 2 ans, je suis originaire du Mâconnais. Avant notre installation à Romanèche-Thorins, j'ai été joueur de football, président des Conscrits, membre actif d'associations locales et artificier, ce qui m'a permis de découvrir de nombreuses communes de la région.

Professionnellement, je suis Engineering Manager dans l'informatique, spécialisé dans la gestion des temps et de la planification, accompagnant des entreprises de toutes tailles au niveau national et international.

Depuis trois ans, nous avons posé nos valises dans le quartier des Fargets, convaincus que Romanèche-Thorins était l'endroit idéal pour concilier vie professionnelle, vie de famille et engagement local. Je souhaite mettre mon énergie et mes compétences au service de notre village pour en renforcer le dynamisme et la convivialité.`
    },
    {
        name: "Andréa Moscicki",
        profession: "Spécialiste du bâti ancien / Intermittente du spectacle",
        engagement: "Je m'engage pour pérenniser ce renouveau que nous connaissons depuis 5 ans avec Yannick Vacher.",
        bio: `Installée au lieu-dit la Rivière depuis 2005, je suis descendante d'une famille profondément liée à l'histoire de notre village. Mon parcours, de la médecine chinoise à la restauration du bâti ancien (pisé, chaux), m'a appris la patience et le respect du patrimoine.

Après avoir travaillé la vigne, j'ai à cœur d'améliorer les conditions de vie de ceux qui font l'âme de notre village. Je m'engage pour pérenniser ce renouveau que nous connaissons depuis 5 ans avec Yannick Vacher.`
    },
    {
        name: "Joaquin Fernandez",
        profession: "Lorem ipsum dolor sit amet",
        engagement: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        bio: bioEnCours
    },
    {
        name: "Annie Rochet",
        profession: "Lorem ipsum dolor sit amet",
        engagement: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        bio: bioEnCours
    },
    {
        name: "Marc Dupuy",
        profession: "Retraité",
        engagement: "Fier de ce village qui m'a si bien accueilli, je souhaite apporter ma contribution au rayonnement de notre commune.",
        bio: `Installé depuis quatre ans dans le quartier des Fargets, j'ai été immédiatement séduit par la beauté de nos paysages et la richesse de nos échanges. Observateur du travail accompli par l'équipe actuelle, j'ai été convaincu par la quantité et la qualité des travaux réalisés.

Fier de ce village qui m'a si bien accueilli, je souhaite aujourd'hui m'impliquer pour rendre la pareille et apporter ma contribution au rayonnement de notre commune.`
    },
    {
        name: "Andrée Defnet",
        profession: "Présidente des ADMR / Couturière retraitée",
        engagement: "Je mets mon sens de l'écoute et mes compétences relationnelles au service de tous les Romanéchois, avec la proximité pour seule boussole.",
        bio: `Installée au quartier de la Rivière depuis 1981, mariée et mère de trois enfants, j'habite le quartier de la Rivière depuis plus de 40 ans. Présidente locale des ADMR, mon combat quotidien est de permettre à nos aînés de rester chez eux dans les meilleures conditions possibles.

Déjà engagée au CCAS pour soutenir les personnes en difficulté, j'ai rejoint la liste pour mettre mon sens de l'écoute et mes compétences relationnelles au service de tous les Romanéchois, avec la proximité pour seule boussole.`
    },
    {
        name: "Jean-Pierre Large",
        profession: "Retraité de l'hôtellerie-restauration",
        engagement: "Je m'engage pour apporter ma modeste pierre à l'édifice et m'investir pleinement pour la qualité de vie de chacun d'entre vous.",
        bio: `Natif de Romanèche-Thorins, je suis revenu dans la maison familiale en 2020 après 45 ans d'une carrière passionnée dans l'hôtellerie-restauration. Mon métier m'a appris l'écoute et le sens du service.

Frappé par l'ampleur inédite des travaux réalisés lors du dernier mandat, j'ai ressenti le besoin de soutenir cet élan. Je m'engage pour apporter ma modeste pierre à l'édifice et m'investir pleinement pour la qualité de vie de chacun d'entre vous.`
    },
];


interface MemberCardProps {
    member: Member;
    index: number;
    isInView: boolean;
    onClick: () => void;
}

const MemberCard = ({member, index, isInView, onClick}: MemberCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{opacity: 0, y: 30}}
            animate={isInView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.5, delay: 0.08 * index}}
            className="group relative cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            {/* Card Container - Instagram-like aspect ratio (4:5) */}
            <div
                className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-soft group-hover:shadow-card transition-shadow duration-300">
                {/* Background Image or Initials */}
                {member.photo ? (
                    <img
                        src={member.photo}
                        alt={`Portrait de ${member.name}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div
                        className="w-full h-full bg-gradient-to-br from-primary via-primary/90 to-primary/70 flex items-center justify-center">
            <span className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground/90">
              {member.name.split(' ').map(n => n[0]).join('')}
            </span>
                    </div>
                )}

                {/* Name always visible at bottom */}
                <div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 pt-12">
                    <h3 className="font-heading text-base font-semibold md:text-lg text-white">
                        {member.name}
                    </h3>
                    {member.profession && (
                        <p className="text-sm text-secondary font-medium">
                            {member.profession}
                        </p>
                    )}
                </div>

                {/* Hover overlay with engagement */}
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: isHovered ? 1 : 0}}
                    transition={{duration: 0.3}}
                    className="absolute inset-0 backdrop-blur-sm bg-primary/80 flex flex-col justify-end p-4 md:p-5"
                >
                    <h3 className="font-heading font-semibold text-lg md:text-xl text-primary-foreground mb-1">
                        {member.name}
                    </h3>
                    {member.profession && (
                        <p className="text-sm md:text-base text-secondary font-semibold mb-3">
                            {member.profession}
                        </p>
                    )}
                    {member.engagement && (
                        <p className="text-sm md:text-base text-primary-foreground/90 leading-relaxed mb-3">
                            "{member.engagement}"
                        </p>
                    )}
                    <span className="text-secondary font-semibold text-sm mt-auto">Voir la présentation →</span>
                </motion.div>
            </div>
        </motion.div>
    );
};

interface MemberModalProps {
    member: Member | null;
    isOpen: boolean;
    onClose: () => void;
}

const MemberModal = ({member, isOpen, onClose}: MemberModalProps) => {
    if (!member) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-6 md:p-8 bg-background border-border">
                <motion.div
                    initial={{opacity: 0, scale: 0.95}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.3, ease: "easeOut"}}
                    className="flex flex-col lg:flex-row gap-6 lg:gap-10"
                >
                    {/* Left side - Photo and info */}
                    <motion.div
                        initial={{opacity: 0, x: -20}}
                        animate={{opacity: 1, x: 0}}
                        transition={{delay: 0.1, duration: 0.4}}
                        className="flex-shrink-0 text-center lg:text-left"
                    >
                        {/* Photo */}
                        <div className="relative inline-block">
                            {member.photo ? (
                                <div
                                    className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-secondary shadow-card mx-auto lg:mx-0">
                                    <img
                                        src={member.photo}
                                        alt={`Portrait de ${member.name}`}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                            ) : (
                                <div
                                    className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full bg-gradient-to-br from-primary via-primary/90 to-primary/70 flex items-center justify-center border-4 border-secondary shadow-card mx-auto lg:mx-0">
                  <span className="text-5xl md:text-6xl font-heading font-bold text-primary-foreground/90">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                                </div>
                            )}
                        </div>

                        {/* Name and profession */}
                        <div className="mt-6">
                            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                                {member.name}
                            </h2>
                            {member.profession && (
                                <p className="text-secondary font-semibold text-lg mt-1">
                                    {member.profession}
                                </p>
                            )}
                        </div>

                        {/* Engagement quote */}
                        {member.engagement && (
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{delay: 0.3, duration: 0.4}}
                                className="mt-4 max-w-xs mx-auto lg:mx-0"
                            >
                                <blockquote
                                    className="border-l-4 border-secondary pl-4 italic text-muted-foreground text-sm">
                                    "{member.engagement}"
                                </blockquote>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Right side - Bio */}
                    <motion.div
                        initial={{opacity: 0, x: 20}}
                        animate={{opacity: 1, x: 0}}
                        transition={{delay: 0.2, duration: 0.4}}
                        className="flex-1"
                    >
                        <Quote className="w-12 h-12 text-secondary mx-auto lg:mx-0 mb-6 opacity-60"/>

                        {member.bio ? (
                            <div className="prose prose-lg max-w-none">
                                <div className="text-foreground leading-relaxed whitespace-pre-line">
                                    {member.bio}
                                </div>
                            </div>
                        ) : (
                            <p className="text-muted-foreground italic text-center lg:text-left">
                                Biographie à venir...
                            </p>
                        )}
                    </motion.div>
                </motion.div>
            </DialogContent>
        </Dialog>
    );
};

const MembresSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, margin: "-50px"});
    const [selectedMember, setSelectedMember] = useState<Member | null>(null);

    return (
        <section id="membres" className="section-padding bg-background" ref={ref}>
            <div className="container-campaign mx-auto">
                <motion.div
                    initial={{opacity: 0, y: 40}}
                    animate={isInView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.7}}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
                        Notre Équipe
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        19 citoyens engagés pour l'avenir de notre commune
                    </p>
                </motion.div>

                {/* Grid: 2 columns mobile, 3 tablet, 4 desktop */}
                <div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {members.map((member, index) => (
                        <MemberCard
                            key={index}
                            member={member}
                            index={index}
                            isInView={isInView}
                            onClick={() => setSelectedMember(member)}
                        />
                    ))}
                </div>
            </div>

            {/* Member Modal */}
            <MemberModal
                member={selectedMember}
                isOpen={!!selectedMember}
                onClose={() => setSelectedMember(null)}
            />
        </section>
    );
};

export default MembresSection;
