import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Newspaper, ExternalLink, ChevronLeft, ChevronRight, FileText, Download, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import tract20260210preview from '@/assets/tracts/TRACT-20260210.png';
import tract20260210 from '@/assets/tracts/TRACT-20260210.pdf';

const pressArticles = [
  {
    title: "« Six ans c'est long, mais c'est court pour tout réaliser » : Yannick Vacher repart en tête de liste pour les municipales",
    source: "Le Journal de Saône-et-Loire",
    date: "23 Janvier 2026",
    url: "https://www.lejsl.com/elections/2026/01/23/six-ans-c-est-long-mais-c-est-court-pour-tout-realiser-yannick-vacher-repart-en-tete-de-liste-pour-les-municipales",
    logo: "JSL",
    logoColor: "bg-red-600",
  },
  {
    title: "Municipales 2026 : Yannick Vacher va briguer un nouveau mandat à Romanèche-Thorins",
    source: "MesInfos / Le Patriote",
    date: "28 Janvier 2026",
    url: "https://mesinfos.fr/auvergne-rhone-alpes/municipales-2026-yannick-vacher-va-briguer-un-nouveau-mandat-a-romaneche-thorins-238629.html",
    logo: "MI",
    logoColor: "bg-[#5e233a]",
  },
];

// Tracts: ajouter de nouveaux tracts ici
// Pour chaque tract, fournir: title, date, pdfUrl (chemin vers le PDF dans public/), et previewImage (image de prévisualisation)
const tracts = [
  {
    title: "",
    date: "10 Février 2026",
    pdfUrl: tract20260210,
    previewImage: tract20260210preview,
  },
];

const PresseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [previewTract, setPreviewTract] = useState<typeof tracts[0] | null>(null);

  const scrollPrev = () => {
    setCurrent((prev) => (prev === 0 ? pressArticles.length - 1 : prev - 1));
  };

  const scrollNext = () => {
    setCurrent((prev) => (prev === pressArticles.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === pressArticles.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="presse" className="section-padding bg-background" ref={ref}>
      <div className="container-campaign mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <Newspaper className="w-12 h-12 text-secondary mx-auto mb-4" />
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
            Actualités & Ressources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Retrouvez nos dernières actualités et nos documents de campagne
          </p>
        </motion.div>

        <Tabs defaultValue="presse" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-primary/10">
            <TabsTrigger 
              value="presse" 
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-heading text-base gap-2"
            >
              <Newspaper className="w-4 h-4" />
              Presse
            </TabsTrigger>
            <TabsTrigger 
              value="tracts"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-heading text-base gap-2"
            >
              <FileText className="w-4 h-4" />
              Nos Tracts
            </TabsTrigger>
          </TabsList>

          {/* PRESSE TAB */}
          <TabsContent value="presse">
            <div className="max-w-3xl mx-auto">
              <div className="relative overflow-hidden">
                <motion.div
                  className="flex"
                  animate={{ x: `-${current * 100}%` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {pressArticles.map((article, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-2">
                      <motion.a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        className="group block bg-card rounded-xl p-6 md:p-8 shadow-soft border border-border hover:shadow-card transition-all duration-300"
                      >
                        <div className="flex items-start gap-4 md:gap-6">
                          <div className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 ${article.logoColor} rounded-xl flex items-center justify-center text-white font-bold text-xl md:text-2xl shadow-md`}>
                            {article.logo}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-sm text-muted-foreground">{article.date}</span>
                              <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors flex-shrink-0" />
                            </div>
                            <h3 className="font-heading font-semibold text-lg md:text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                              {article.title}
                            </h3>
                            <p className="text-base text-secondary font-medium">
                              {article.source}
                            </p>
                          </div>
                        </div>
                      </motion.a>
                    </div>
                  ))}
                </motion.div>
              </div>

              <div className="flex items-center justify-center gap-4 mt-6">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={scrollPrev}
                  className="rounded-full h-10 w-10 border-primary/20 hover:bg-primary hover:text-primary-foreground"
                >
                  <ChevronLeft className="h-5 w-5" />
                  <span className="sr-only">Article précédent</span>
                </Button>
                <div className="flex gap-2">
                  {pressArticles.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrent(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        index === current
                          ? 'bg-secondary w-8'
                          : 'bg-primary/20 hover:bg-primary/40 w-2.5'
                      }`}
                      aria-label={`Aller à l'article ${index + 1}`}
                    />
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={scrollNext}
                  className="rounded-full h-10 w-10 border-primary/20 hover:bg-primary hover:text-primary-foreground"
                >
                  <ChevronRight className="h-5 w-5" />
                  <span className="sr-only">Article suivant</span>
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* TRACTS TAB */}
          <TabsContent value="tracts">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tracts.map((tract, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="group bg-card rounded-xl overflow-hidden shadow-soft border border-border hover:shadow-card transition-all duration-300"
                >
                  {/* Preview image */}
                  <div 
                    className="relative aspect-[3/4] bg-muted cursor-pointer overflow-hidden"
                    onClick={() => setPreviewTract(tract)}
                  >
                    <img
                      src={tract.previewImage}
                      alt={tract.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback si pas d'image de preview
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                        const fallback = document.createElement('div');
                        fallback.className = 'flex flex-col items-center gap-3 text-muted-foreground';
                        fallback.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg><span class="text-sm">Aperçu</span>`;
                        e.currentTarget.parentElement?.appendChild(fallback);
                      }}
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/80 text-primary-foreground rounded-full p-3">
                        <Eye className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <p className="text-xs text-muted-foreground mb-1">{tract.date}</p>
                    <h3 className="font-heading font-semibold text-sm text-foreground mb-3 line-clamp-2">
                      {tract.title}
                    </h3>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 text-xs gap-1.5"
                        onClick={() => setPreviewTract(tract)}
                      >
                        <Eye className="w-3.5 h-3.5" />
                        Voir
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 text-xs gap-1.5 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                        asChild
                      >
                        <a href={tract.pdfUrl} download>
                          <Download className="w-3.5 h-3.5" />
                          Télécharger
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {tracts.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Les tracts seront bientôt disponibles</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Modal de prévisualisation du tract */}
      <Dialog open={!!previewTract} onOpenChange={() => setPreviewTract(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] bg-background p-0 overflow-hidden">
          <DialogTitle className="sr-only">{previewTract?.title}</DialogTitle>
          {previewTract && (
            <div className="flex flex-col h-full">
              <div className="p-4 border-b border-border flex items-center justify-between">
                <div>
                  <h3 className="font-heading font-semibold text-foreground">{previewTract.title}</h3>
                  <p className="text-sm text-muted-foreground">{previewTract.date}</p>
                </div>
                <Button
                  size="sm"
                  className="gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground mr-8"
                  asChild
                >
                  <a href={previewTract.pdfUrl} download>
                    <Download className="w-4 h-4" />
                    Télécharger
                  </a>
                </Button>
              </div>
              <div className="flex-1 overflow-auto p-4 bg-muted/50 flex items-start justify-center">
                <img
                  src={previewTract.previewImage}
                  alt={previewTract.title}
                  className="max-w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PresseSection;
