import { Navigation } from "../components/navigation.tsx";
import { Hero } from "../components/hero.tsx";
import { About } from "../components/about.tsx";
import { Events } from "../components/events.tsx";
import { Facebook, Instagram, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Events />
      </main>

      <footer id="contact" className="bg-gradient-to-r from-primary/60 via-secondary/50 to-accent/60 text-white py-24 px-6 md:px-12" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(25, 25, 25, 0.8)' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <h2 className="text-[15vw] leading-[0.8] font-display font-black tracking-tighter mb-8 text-white drop-shadow-lg">
              READY<br/>SET...
            </h2>
            <p className="font-mono text-sm uppercase tracking-widest max-w-md border-l-2 border-white/50 pl-4">
              Organização de <span className="text-secondary">eventos</span>, workshops, masterclasses e <span className="text-accent">residências artísticas</span>.
              <br/>
              <span className="text-primary">Formação</span>, intercâmbio e partilha entre artistas.
            </p>
          </div>

          <div className="flex flex-col gap-8 text-right md:pt-12">
            <div>
              <h4 className="font-display text-2xl mb-2 text-secondary">Morada</h4>
              <p className="font-body text-lg">Machico, Madeira<br/>Portugal</p>
            </div>
            
            <div>
              <h4 className="font-display text-2xl mb-2 text-accent">Contacto</h4>
              <a href="mailto:ola@readyset.pt" className="font-body text-lg hover:underline decoration-2 decoration-white hover:text-primary transition-colors">ola@readyset.pt</a>
            </div>

            <div className="flex gap-4 justify-end">
              <a href="#" className="p-3 border-2 border-white hover:bg-gradient-to-br hover:from-secondary/80 hover:to-accent/80 hover:text-white transition-all duration-300 rounded-full hover:scale-105">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="p-3 border-2 border-white hover:bg-gradient-to-br hover:from-accent/80 hover:to-primary/80 hover:text-white transition-all duration-300 rounded-full hover:scale-105">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/20 flex justify-between font-mono text-xs uppercase opacity-60">
          <span>© 2024 ReadySet Associação.</span>
          <span>Made in Madeira</span>
        </div>
      </footer>
    </div>
  );
}
