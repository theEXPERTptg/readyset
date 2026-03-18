import { Link } from "wouter";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-background/95 backdrop-blur-md text-foreground border-b-2 border-primary/20 shadow-lg">
      <Link href="/">
        <a className="font-display text-2xl tracking-tighter hover:text-secondary transition-colors">READYSET</a>
      </Link>
      
      <div className="hidden md:flex gap-8 font-mono text-sm uppercase tracking-widest">
        <Link href="/sobre" className="hover:line-through decoration-secondary decoration-2 underline-offset-4 hover:text-secondary">Sobre</Link>
        <Link href="/eventos" className="hover:line-through decoration-accent decoration-2 underline-offset-4 hover:text-accent">Eventos</Link>
        <Link href="/educacao" className="hover:line-through decoration-primary decoration-2 underline-offset-4 hover:text-primary">Educação</Link>
        <Link href="/contactos" className="hover:line-through decoration-primary decoration-2 underline-offset-4 hover:text-primary">Contacto</Link>
      </div>
      
      <button className="md:hidden text-foreground uppercase font-mono text-xs border border-border px-4 py-2 hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white transition-colors rounded-md">
        Menu
      </button>
    </nav>
  );
}
