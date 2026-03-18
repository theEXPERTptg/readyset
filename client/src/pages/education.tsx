import { useLocation } from "wouter";
import { Navigation } from "@/components/navigation";
import { Mail, Calendar, CheckCircle2 } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

type ActivityKey =
  | "musica"
  | "teatro"
  | "danca"
  | "artes-visuais"
  | "escrita"
  | "cinema";

const activityLabels: Record<ActivityKey, string> = {
  musica: "Música",
  teatro: "Teatro",
  danca: "Dança",
  "artes-visuais": "Artes Visuais",
  escrita: "Escrita Criativa",
  cinema: "Cinema & Multimédia",
};

const allActivities = Object.entries(activityLabels).map(([value, label]) => ({
  value,
  label,
}));

function buildMailtoBody({
  area,
  nome,
  email,
  idade,
  telefone,
  atividades,
  mensagem,
}: {
  area?: string;
  nome: string;
  email: string;
  idade: string;
  telefone: string;
  atividades: string[];
  mensagem: string;
}) {
  const lines = [
    "Nova inscrição nas atividades educativas ReadySet",
    "",
    `Nome: ${nome}`,
    `Email: ${email}`,
    `Idade: ${idade || "—"}`,
    `Telefone: ${telefone || "—"}`,
    "",
    `Área principal de interesse: ${area || "—"}`,
    `Atividades selecionadas: ${
      atividades.length ? atividades.join(", ") : "—"
    }`,
    "",
    "Mensagem / Motivação:",
    mensagem || "—",
  ];

  return encodeURIComponent(lines.join("\n"));
}

export default function Education() {
  const [location] = useLocation();
  const searchParams = useMemo(
    () => new URLSearchParams(location.split("?")[1] || ""),
    [location]
  );

  const initialArea = searchParams.get("area") ?? undefined;

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [telefone, setTelefone] = useState("");
  const [area, setArea] = useState<string | undefined>(initialArea || undefined);
  const [atividadesSelecionadas, setAtividadesSelecionadas] = useState<
    string[]
  >([]);
  const [mensagem, setMensagem] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function toggleActivity(value: string) {
    setAtividadesSelecionadas((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!nome || !email) {
      alert("Por favor preenche pelo menos o nome e o email.");
      return;
    }

    const subject = encodeURIComponent("Inscrição em atividades educativas");
    const body = buildMailtoBody({
      area,
      nome,
      email,
      idade,
      telefone,
      atividades: atividadesSelecionadas.map(
        (key) => activityLabels[key as ActivityKey] || key
      ),
      mensagem,
    });

    window.location.href = `mailto:readysetartsassociation@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Navigation />

      <main className="pt-28 pb-20 px-6 md:px-12">
        <section className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr,0.9fr] gap-12">
          <div className="space-y-8">
            <header className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                Educação & Formação Artística
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-[0.9]">
                Inscrições em
                <br />
                atividades &{" "}
                <span className="text-primary">workshops</span>
              </h1>
              <p className="font-body text-base md:text-lg text-muted-foreground max-w-xl">
                Este espaço é dedicado à partilha, aprendizagem e experimentação
                artística. Preenche o formulário para manifestares interesse nas
                atividades da ReadySet — entraremos em contacto por email.
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-card-border bg-card/80 rounded-2xl p-5 space-y-3">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary border border-primary/30">
                  <Calendar className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-display tracking-tight normal-case">
                  Formações contínuas & pontuais
                </h2>
                <p className="text-sm text-muted-foreground">
                  Oferecemos oficinas regulares e intensivas nas áreas de música,
                  teatro, dança, escrita e artes visuais, para iniciantes e
                  artistas em desenvolvimento.
                </p>
              </div>

              <div className="border border-card-border bg-card/80 rounded-2xl p-5 space-y-3">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary border border-primary/30">
                  <Mail className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-display tracking-tight normal-case">
                  Confirmação por email
                </h2>
                <p className="text-sm text-muted-foreground">
                  As inscrições são enviadas diretamente para{" "}
                  <span className="font-semibold">
                    readysetartsassociation@gmail.com
                  </span>
                  . A equipa entra em contacto com todos os detalhes.
                </p>
              </div>
            </div>
          </div>

          <section className="border border-card-border bg-card/90 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
            <header className="space-y-1">
              <h2 className="text-xl font-display tracking-tight normal-case">
                Formulário de inscrição
              </h2>
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">
                Campos marcados com * são obrigatórios
              </p>
            </header>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-[0.25em]">
                  Nome completo *
                </label>
                <input
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full border border-card-border bg-background/40 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Escreve o teu nome"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-[0.25em]">
                  Email *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-card-border bg-background/40 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="nome@exemplo.com"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-[0.25em]">
                    Idade
                  </label>
                  <input
                    type="number"
                    min={4}
                    max={120}
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                    className="w-full border border-card-border bg-background/40 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Opcional"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-[0.25em]">
                    Telemóvel
                  </label>
                  <input
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    className="w-full border border-card-border bg-background/40 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Para contacto rápido (opcional)"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-[0.25em]">
                  Área principal de interesse
                </label>
                <select
                  value={area ?? ""}
                  onChange={(e) => setArea(e.target.value || undefined)}
                  className="w-full border border-card-border bg-background/40 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Escolhe uma opção (opcional)</option>
                  {allActivities.map((activity) => (
                    <option key={activity.value} value={activity.value}>
                      {activity.label}
                    </option>
                  ))}
                </select>
              </div>

              <fieldset className="space-y-3">
                <legend className="block text-xs font-mono uppercase tracking-[0.25em] mb-1">
                  Atividades de interesse
                </legend>
                <p className="text-[11px] text-muted-foreground">
                  Podes selecionar várias opções. Serve apenas para a equipa
                  perceber melhor os teus interesses.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {allActivities.map((activity) => (
                    <label
                      key={activity.value}
                      className={`flex items-center justify-between gap-3 border rounded-lg px-3 py-2 text-xs cursor-pointer transition-colors ${
                        atividadesSelecionadas.includes(activity.value)
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-card-border bg-background/40 hover:border-primary/40"
                      }`}
                    >
                      <span>{activity.label}</span>
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={atividadesSelecionadas.includes(activity.value)}
                        onChange={() => toggleActivity(activity.value)}
                      />
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-[0.25em]">
                  Mensagem / Motivação
                </label>
                <textarea
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  className="w-full min-h-[120px] border border-card-border bg-background/40 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Conta-nos um pouco sobre a tua experiência, disponibilidade e o que gostavas de explorar na ReadySet."
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 inline-flex items-center justify-center gap-2 border border-primary bg-primary text-primary-foreground rounded-lg py-2.5 text-xs font-mono uppercase tracking-[0.25em] hover:bg-primary/90 transition-colors"
              >
                Enviar inscrição por email
              </button>

              {submitted && (
                <p className="flex items-center gap-2 text-xs text-emerald-600 mt-1">
                  <CheckCircle2 className="w-4 h-4" />
                  Formulário preparado — verifica o teu programa de email para
                  concluir o envio.
                </p>
              )}
            </form>
          </section>
        </section>
      </main>
    </div>
  );
}

