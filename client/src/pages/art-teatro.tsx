import { Navigation } from "@/components/navigation";

export default function ArtTeatro() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-28 pb-20 px-6 md:px-12">
        <section className="max-w-5xl mx-auto space-y-10">
          <header className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
              Artes ReadySet · Teatro
            </p>
            <h1 className="text-4xl md:text-6xl font-display leading-[0.9]">
              Teatro
              <br />
              na ReadySet
            </h1>
            <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl">
              O teatro é um lugar de encontro: corpo, palavra, presença e escuta.
              Promovemos oficinas e processos de criação com foco na
              experimentação, colaboração e partilha.
            </p>
          </header>

          <section className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h2 className="text-xl font-display tracking-tight normal-case">
                O que podes encontrar
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li>Interpretação, improviso e criação de cenas.</li>
                <li>Trabalho de voz, texto e movimento.</li>
                <li>Partilhas abertas e pequenos estudos em palco.</li>
                <li>Projetos interdisciplinares (teatro + música/imagem).</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-display tracking-tight normal-case">
                Para quem
              </h2>
              <p className="text-sm text-muted-foreground">
                Para iniciantes, estudantes e pessoas curiosas. O foco é criar um
                espaço seguro para explorar e evoluir, respeitando o ritmo de cada
                participante.
              </p>
              <p className="text-sm text-muted-foreground">
                Para inscrições e detalhes, visita a página de Educação ou escreve
                para{" "}
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
    </div>
  );
}

