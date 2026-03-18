import { Palette, Music, Theater, PenTool, Film, Dance } from "lucide-react";

const arts = [
  {
    id: "musica",
    label: "Música",
    icon: Music,
    description: "Bandas, jam sessions, ensaios e concertos.",
  },
  {
    id: "teatro",
    label: "Teatro",
    icon: Theater,
    description: "Criação de peças, improviso e expressão dramática.",
  },
  {
    id: "danca",
    label: "Dança",
    icon: Dance,
    description: "Movimento, corpo e coreografia para todas as idades.",
  },
  {
    id: "artes-visuais",
    label: "Artes Visuais",
    icon: Palette,
    description: "Pintura, ilustração, fotografia e instalação.",
  },
  {
    id: "escrita",
    label: "Escrita Criativa",
    icon: PenTool,
    description: "Literatura, poesia, guiões e storytelling.",
  },
  {
    id: "cinema",
    label: "Cinema & Multimédia",
    icon: Film,
    description: "Curta-metragens, vídeo arte e edição.",
  },
];

export function ArtAreas() {
  return (
    <section
      id="areas-artisticas"
      className="py-20 px-6 md:px-12 bg-secondary/40 text-foreground"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {arts.map((art) => {
            const Icon = art.icon;
            return (
              <a
                key={art.id}
                href={`/arte/${art.id}`}
                className="group flex flex-col justify-between border border-card-border bg-card/80 hover:bg-card hover:border-primary/60 hover:-translate-y-1 transition-all duration-200 p-5 rounded-xl cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4 gap-3">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/30">
                      <Icon className="w-5 h-5" />
                    </span>
                    <h3 className="text-xl font-display tracking-tight normal-case">
                      {art.label}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground group-hover:text-primary">
                    Explorar
                  </span>
                </div>

                <p className="font-body text-sm text-muted-foreground group-hover:text-foreground mb-4">
                  {art.description}
                </p>

                <span className="mt-auto inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-primary group-hover:gap-3">
                  Ver atividades
                  <span aria-hidden>→</span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

