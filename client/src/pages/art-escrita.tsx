import { Navigation } from "@/components/navigation";

export default function ArtEscrita() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-28 pb-20 px-6 md:px-12">
        <section className="max-w-5xl mx-auto space-y-10">
          <header className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
              Artes ReadySet · Escrita Criativa
            </p>
            <h1 className="text-4xl md:text-6xl font-display leading-[0.9]">
              Escrita
              <br />
              Criativa
            </h1>
            <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl">
              A escrita é prática, escuta e reescrita. Criamos espaços para
              experimentar poesia, narrativa, guiões e textos para palco — com
              partilha e acompanhamento em grupo.
            </p>
          </header>

          <section className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h2 className="text-xl font-display tracking-tight normal-case">
                O que podes encontrar
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li>Oficinas de escrita e leitura crítica.</li>
                <li>Exercícios de imaginação, ritmo e estilo.</li>
                <li>Guião para cinema e texto para teatro.</li>
                <li>Zines, publicação independente e partilhas.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-display tracking-tight normal-case">
                Para quem
              </h2>
              <p className="text-sm text-muted-foreground">
                Para quem quer escrever com regularidade e explorar a própria voz.
                Não precisas de experiência — só curiosidade e disponibilidade
                para experimentar.
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

