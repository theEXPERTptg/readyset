import { Ticket } from "lucide-react";

const arts = [
  {
    id: "musica",
    label: "Música",
    icon: Ticket,
    description: "Bandas, jam sessions, ensaios e concertos.",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "teatro",
    label: "Teatro",
    icon: Ticket,
    description: "Criação de peças, improviso e expressão dramática.",
    image:
      "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "danca",
    label: "Dança",
    icon: Ticket,
    description: "Movimento, corpo e coreografia para todas as idades.",
    image:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "artes-visuais",
    label: "Artes Visuais",
    icon: Ticket,
    description: "Pintura, ilustração, fotografia e instalação.",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "escrita",
    label: "Escrita Criativa",
    icon: Ticket,
    description: "Literatura, poesia, guiões e storytelling.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "cinema",
    label: "Cinema & Multimédia",
    icon: Ticket,
    description: "Curta-metragens, vídeo arte e edição.",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=80",
  },
];

export function ArtAreas() {
  return (
    <section
      id="areas-artisticas"
      className="section-pad"
    >
      <div className="container-page space-y-10">
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground mb-3">
              Explorar
            </p>
            <h2 className="text-4xl md:text-6xl font-display leading-[0.9] mb-2">
              Áreas Artísticas
            </h2>
            <p className="font-body text-base md:text-lg text-muted-foreground max-w-xl">
              Descobre os caminhos onde a ReadySet atua. Clica numa área para
              saber mais e inscrever-te nas atividades.
            </p>
          </div>

          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
            Música • Teatro • Dança • Artes Visuais • Escrita • Cinema
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {arts.map((art) => {
            const Icon = art.icon;
            return (
              <a
                key={art.id}
                href={`/arte/${art.id}`}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url('${art.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
                <div className="absolute inset-0 ring-1 ring-white/10" />

                <div className="relative p-4 min-h-[180px] flex flex-col justify-end gap-2">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-display tracking-tight normal-case text-white">
                      {art.label}
                    </h3>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white border border-white/15">
                      <Icon className="w-4 h-4" />
                    </span>
                  </div>

                  <p className="font-body text-sm text-white/80">
                    {art.description}
                  </p>

                  <span className="mt-2 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-white/85">
                    Ver página
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

