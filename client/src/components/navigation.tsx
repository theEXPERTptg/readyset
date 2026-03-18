import { Link } from "wouter";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
      <Link href="/">
        <a className="font-display text-2xl tracking-tighter hover:text-primary transition-colors">READYSET</a>
      </Link>
      
      <div className="hidden md:flex gap-8 font-mono text-sm uppercase tracking-widest">
        <a href="#about" className="hover:line-through decoration-primary decoration-2 underline-offset-4">Sobre</a>
        <a href="#events" className="hover:line-through decoration-primary decoration-2 underline-offset-4">Eventos</a>
        <a href="#contact" className="hover:line-through decoration-primary decoration-2 underline-offset-4">Contacto</a>
      </div>
      
      <button className="md:hidden text-white uppercase font-mono text-xs border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-colors">
        Menu
      </button>
    </nav>
  );
}
