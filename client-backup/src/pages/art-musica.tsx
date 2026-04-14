import { Navigation } from "@/components/navigation";

export default function ArtMusica() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-28 pb-20 px-6 md:px-12 bg-gradient-to-br from-background via-accent/3 to-secondary/3">
        <section className="max-w-5xl mx-auto space-y-10">
          <header className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-secondary">
              Artes ReadySet · Música
            </p>
            <h1 className="text-4xl md:text-6xl font-display leading-[0.9] text-primary">
              Música
              <br />
              na ReadySet
            </h1>
            <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl">
              A música é um dos pilares da associação. Acolhemos ensaios,
              residências artísticas, jam sessions e concertos intimistas,
              ligando músicos locais e convidados de fora da ilha.
            </p>
          </header>

          <section className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h2 className="text-xl font-display tracking-tight normal-case">
                O que podes encontrar
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li>Ensaios de bandas e projetos autorais.</li>
                <li>Jam sessions abertas a diferentes níveis.</li>
                <li>Residências artísticas com convidados internacionais.</li>
                <li>Concertos em formato íntimo e showcases.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-display tracking-tight normal-case">
                Para quem
              </h2>
              <p className="text-sm text-muted-foreground">
                Músicos, estudantes de música e curiosos com vontade de
                experimentar. Não é necessário ter formação académica —
                valorizamos sobretudo a vontade de criar, ouvir e partilhar.
              </p>
              <p className="text-sm text-muted-foreground">
                Para saber mais sobre inscrições e próximos ciclos de atividades,
                visita a página de Educação ou escreve para{" "}
                <a
                  href="mailto:readysetartsassociation@gmail.com"
                  className="underline decoration-primary decoration-2 underline-offset-4"
                >
                  readysetartsassociation@gmail.com
                </a>
                .
              </p>
            </div>
          </section>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border-t border-border/50 py-12 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
            <span className="text-primary">ReadySet</span> • Machico • Madeira • Portugal
          </p>
        </div>
      </footer>
    </div>
  );
}

