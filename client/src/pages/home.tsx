import { Navigation } from "../components/navigation";
import { Hero } from "../components/hero";
import { ArtAreas } from "../components/art-areas";
import { About } from "../components/about";
import { Events } from "../components/events";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main>
        <Hero />
        <ArtAreas />
        <About />
        <Events />
      </main>

      <footer
        id="contact"
        className="section-pad"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(255,122,92,0.18), transparent 55%), radial-gradient(circle at 80% 25%, rgba(16,185,129,0.14), transparent 55%), radial-gradient(circle at 60% 85%, rgba(236,72,153,0.16), transparent 60%), linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.65))",
        }}
      >
        <div className="container-page">
          <div
            className="glass rounded-3xl p-7 md:p-10"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=2000&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "overlay",
            }}
          >
            <div className="absolute inset-0" />
            <div className="flex flex-col md:flex-row justify-between items-start gap-12">
              <div>
                <h2 className="text-[14vw] md:text-7xl leading-[0.82] font-display font-black tracking-tighter mb-5 text-white">
              READY
              <br />
              SET...
            </h2>
                <p className="font-body text-sm md:text-base text-white/85 max-w-lg border-l-2 border-white/20 pl-4">
                  Organização de <span className="text-secondary">eventos</span>, workshops,
                  masterclasses e{" "}
                  <span className="text-accent">residências artísticas</span>.
                  <br />
                  <span className="text-primary">Formação</span>, intercâmbio e partilha
                  entre artistas.
                </p>
              </div>

              <div className="flex flex-col gap-8 text-left md:text-right md:pt-8">
                <div>
                  <h4 className="font-display text-2xl mb-2 text-secondary">
                    Morada
                  </h4>
                  <p className="font-body text-sm md:text-base text-white/80">
                    Machico, Madeira
                    <br />
                    Portugal
                  </p>
                </div>

                <div>
                  <h4 className="font-display text-2xl mb-2 text-accent">
                    Contacto
                  </h4>
                  <a
                    href="mailto:ola@readyset.pt"
                    className="font-body text-sm md:text-base hover:underline decoration-2 decoration-white/60 hover:text-primary transition-colors text-white/90"
                  >
                    ola@readyset.pt
                  </a>
                </div>

                <div className="flex gap-3 justify-start md:justify-end">
                  <a href="#" className="btn-ghost">
                    Instagram
                  </a>
                  <a href="#" className="btn-ghost">
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/15 flex justify-between font-mono text-[11px] uppercase tracking-widest text-white/65">
              <span>© 2024 ReadySet Associação.</span>
              <span>Made in Madeira</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

