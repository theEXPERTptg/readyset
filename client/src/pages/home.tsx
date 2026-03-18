import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Events } from "@/components/events";
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

      <footer id="contact" className="bg-primary text-black py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <h2 className="text-[15vw] leading-[0.8] font-display font-black tracking-tighter mb-8">
              READY<br/>SET...
            </h2>
            <p className="font-mono text-sm uppercase tracking-widest max-w-md border-l-2 border-black pl-4">
              Organização de eventos, workshops, masterclasses e residências artísticas.
              <br/>
              Formação, intercâmbio e partilha entre artistas.
            </p>
          </div>

          <div className="flex flex-col gap-8 text-right md:pt-12">
            <div>
              <h4 className="font-display text-2xl mb-2">Morada</h4>
              <p className="font-body text-lg">Machico, Madeira<br/>Portugal</p>
            </div>
            
            <div>
              <h4 className="font-display text-2xl mb-2">Contacto</h4>
              <a href="mailto:ola@readyset.pt" className="font-body text-lg hover:underline decoration-2">ola@readyset.pt</a>
            </div>

            <div className="flex gap-4 justify-end">
              <a href="#" className="p-3 border-2 border-black hover:bg-black hover:text-primary transition-colors rounded-full">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="p-3 border-2 border-black hover:bg-black hover:text-primary transition-colors rounded-full">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-black/20 flex justify-between font-mono text-xs uppercase opacity-60">
          <span>© 2024 ReadySet Associação.</span>
          <span>Made in Madeira</span>
        </div>
      </footer>
    </div>
  );
}
