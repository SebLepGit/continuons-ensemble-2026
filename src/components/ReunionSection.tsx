import {motion} from 'framer-motion';
import {useInView} from 'framer-motion';
import {useRef} from 'react';
import {Vote} from 'lucide-react';

const ReunionSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, margin: "-100px"});

    return (
        <section id="reunion" className="py-0" ref={ref}>
            <motion.div
                initial={{opacity: 0, y: 30}}
                animate={isInView ? {opacity: 1, y: 0} : {}}
                transition={{duration: 0.7}}
                className="bg-secondary"
            >
                <div className="container-campaign mx-auto px-6 md:px-12 py-10 md:py-14">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        {/* Left: Date */}
                        <motion.div
                            initial={{opacity: 0, x: -30}}
                            animate={isInView ? {opacity: 1, x: 0} : {}}
                            transition={{duration: 0.6, delay: 0.2}}
                            className="flex-shrink-0 text-center md:text-left"
                        >
                            <Vote className="w-10 h-10 md:w-14 md:h-14 text-white mb-2 mx-auto md:mx-0" />
                            <p className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-none tracking-tight">
                                15 MARS
                            </p>
                            <p className="font-heading font-bold text-xl md:text-2xl lg:text-3xl text-white/90 mt-1 tracking-wide uppercase">
                                Tour unique
                            </p>
                        </motion.div>

                        {/* Right: Call to action */}
                        <motion.div
                            initial={{opacity: 0, x: 30}}
                            animate={isInView ? {opacity: 1, x: 0} : {}}
                            transition={{duration: 0.6, delay: 0.3}}
                            className="flex-1 text-center md:text-left"
                        >
                            <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed">
                                Le{' '}
                                <span className="inline-flex whitespace-nowrap bg-white px-2 py-0.5 rounded text-secondary font-semibold">
                                    dimanche 15 mars
                                </span>{' '}
                                c'est le jour du vote et{' '}
                                <span className="inline-flex whitespace-nowrap bg-white px-2 py-0.5 rounded text-secondary font-semibold">
                                    il n'y a qu'un seul tour
                                </span>.
                                Chaque voix compte&nbsp;! Mobilisez-vous et votez pour la liste{' '}
                                <span className="font-bold text-white">Continuons Ensemble</span>.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default ReunionSection;
