import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["ARTE", "MÚSICA", "TEATRO", "DANÇA", "CINEMA", "ESCRITA", "VISUAIS"];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] w-full flex flex-col items-center justify-center overflow-hidden text-foreground">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/15 via-background to-accent/15" />
      <div className="absolute inset-0 z-0 opacity-[0.07] bg-[url('/assets/texture-bg.png')] bg-cover bg-center pointer-events-none" />
      <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-secondary/18 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-accent/18 blur-3xl" />

      <div className="z-10 container-page">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground mb-4">
            Associação Cultural • Machico, Madeira
          </p>

          <h1 className="text-[12vw] md:text-7xl lg:text-8xl leading-[0.85] font-display font-black tracking-tighter">
            READY
            <br />
            SET
          </h1>

          <div className="mt-4 md:mt-6 h-[14vw] md:h-24 relative flex items-center justify-center w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ y: 80, opacity: 0, rotate: 4 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: -80, opacity: 0, rotate: -4 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="absolute text-[11vw] md:text-7xl lg:text-8xl leading-[0.85] font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary tracking-tighter"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </div>

          <p className="mt-6 md:mt-8 text-base md:text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Organização de eventos, workshops, masterclasses e residências artísticas.
            Formação, intercâmbio e partilha entre artistas.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a className="btn-primary" href="#areas-artisticas">
              Explorar áreas
            </a>
            <a className="btn-ghost" href="/#/educacao">
              Educação & inscrições
            </a>
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-0 right-0 text-center uppercase tracking-widest text-[11px] text-muted-foreground font-mono"
      >
        Machico • Madeira • Portugal
      </motion.div>
    </section>
  );
}
