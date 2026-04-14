import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-secondary/5 text-foreground flex flex-col items-center justify-center p-6">
      <h1 className="text-[20vw] font-display font-black text-primary leading-none drop-shadow-lg">404</h1>
      <p className="text-2xl font-body mt-4 mb-8 text-secondary">Página não encontrada</p>
      <Link href="/">
        <a className="border border-border px-8 py-4 uppercase font-mono text-sm hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white hover:border-transparent transition-all duration-300 rounded-md">
          Voltar ao Início
        </a>
      </Link>
    </div>
  );
}
