import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["ART", "ROCK", "JAZZ", "DANCE", "PLAY", "JAM", "POP"];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-primary/80 via-secondary/60 to-accent/70 text-foreground" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('/assets/texture-bg.png')] bg-cover bg-center mix-blend-overlay pointer-events-none" />
      
      <div className="z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-[12vw] leading-[0.8] font-display font-black tracking-tighter text-white drop-shadow-lg">
          READY
          <br />
          SET
        </h1>
        
        <div className="h-[12vw] relative flex items-center justify-center w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={words[index]}
              initial={{ y: 100, opacity: 0, rotate: 5 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: -100, opacity: 0, rotate: -5 }}
              transition={{ duration: 1.0, ease: "easeInOut" }}
              className="absolute text-[12vw] leading-[0.8] font-display font-black text-primary tracking-tighter drop-shadow-lg"
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-0 right-0 text-center uppercase tracking-widest text-sm text-white font-mono drop-shadow"
      >
        Machico • Madeira • Portugal
      </motion.div>
    </section>
  );
}
