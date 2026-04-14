import { Link } from "wouter";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="container-page py-3">
        <div
          className="glass rounded-2xl px-4 py-3 flex justify-between items-center"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, rgba(255,122,92,0.20), transparent 45%), radial-gradient(circle at 85% 30%, rgba(236,72,153,0.18), transparent 45%), radial-gradient(circle at 60% 90%, rgba(16,185,129,0.14), transparent 55%)",
          }}
        >
          <Link href="/">
            <a className="font-display text-2xl tracking-tighter text-foreground hover:text-primary transition-colors">
              READYSET
            </a>
          </Link>

          <div className="hidden md:flex items-center gap-7 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <Link href="/sobre">
              <a className="hover:text-primary hover:underline decoration-primary decoration-2 underline-offset-4">
                Sobre
              </a>
            </Link>
            <Link href="/eventos">
              <a className="hover:text-accent hover:underline decoration-accent decoration-2 underline-offset-4">
                Eventos
              </a>
            </Link>
            <Link href="/educacao">
              <a className="hover:text-secondary hover:underline decoration-secondary decoration-2 underline-offset-4">
                Educação
              </a>
            </Link>
            <Link href="/contactos">
              <a className="hover:text-primary hover:underline decoration-primary decoration-2 underline-offset-4">
                Contacto
              </a>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link href="/educacao">
              <a className="hidden md:inline-flex btn-primary">Educação</a>
            </Link>
            <button className="md:hidden btn-ghost">Menu</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
