import { Link } from "wouter";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-5 flex justify-between items-center bg-background/70 backdrop-blur-md border-b border-border">
      <Link href="/">
        <a className="font-display text-2xl tracking-tighter text-foreground hover:text-primary transition-colors">
          READYSET
        </a>
      </Link>
      
      <div className="hidden md:flex gap-8 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
        <a
          href="#about"
          className="hover:text-primary hover:underline decoration-primary decoration-2 underline-offset-4"
        >
          Sobre
        </a>
        <a
          href="#events"
          className="hover:text-primary hover:underline decoration-primary decoration-2 underline-offset-4"
        >
          Eventos
        </a>
        <Link href="/educacao">
          <a className="hover:text-primary hover:underline decoration-primary decoration-2 underline-offset-4">
            Educação
          </a>
        </Link>
        <a
          href="#contact"
          className="hover:text-primary hover:underline decoration-primary decoration-2 underline-offset-4"
        >
          Contacto
        </a>
      </div>
      
      <button className="md:hidden text-foreground uppercase font-mono text-[10px] border border-border px-4 py-2 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
        Menu
      </button>
    </nav>
  );
}
