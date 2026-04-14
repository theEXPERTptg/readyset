import { Navigation } from "@/components/navigation";

export default function ArtDanca() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-28 pb-20 px-6 md:px-12">
        <section className="max-w-5xl mx-auto space-y-10">
          <header className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
              Artes ReadySet · Dança
            </p>
            <h1 className="text-4xl md:text-6xl font-display leading-[0.9]">
              Dança
              <br />
              na ReadySet
            </h1>
            <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl">
              A dança nasce do corpo em movimento e da relação com o espaço.
              Abrimos momentos de prática e criação que atravessam estilos, técnicas
              e linguagens contemporâneas.
            </p>
          </header>

          <section className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h2 className="text-xl font-display tracking-tight normal-case">
                O que podes encontrar
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li>Aulas e oficinas (iniciação e aprofundamento).</li>
                <li>Laboratórios de criação e composição.</li>
                <li>Práticas somáticas e consciência corporal.</li>
                <li>Partilhas e apresentações informais.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-display tracking-tight normal-case">
                Para quem
              </h2>
              <p className="text-sm text-muted-foreground">
                Para quem quer mover-se, explorar e criar — com ou sem experiência.
                Trabalhamos com turmas diversas e propostas adaptáveis.
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

