import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Video, FileText, Users, Calendar, ExternalLink } from "lucide-react";

const resources = [
  {
    id: 1,
    title: "Workshop de Música Eletrónica",
    type: "Workshop",
    category: "Música",
    description: "Aprende os fundamentos da produção musical com ferramentas digitais.",
    duration: "4 horas",
    instructor: "João Silva",
    date: "Próxima: 15 Abril",
    icon: Video,
    link: "#",
    level: "Iniciante"
  },
  {
    id: 2,
    title: "Curso de Teatro Contemporâneo",
    type: "Curso",
    category: "Teatro",
    description: "Explora técnicas modernas de atuação e improvisação.",
    duration: "8 semanas",
    instructor: "Maria Santos",
    date: "Inscrições abertas",
    icon: Users,
    link: "#",
    level: "Intermédio"
  },
  {
    id: 3,
    title: "Guia de Escrita Criativa",
    type: "Recurso",
    category: "Escrita",
    description: "Material didático para desenvolver habilidades de escrita criativa.",
    duration: "Auto-estudo",
    instructor: "Ana Costa",
    date: "Disponível",
    icon: FileText,
    link: "#",
    level: "Todos os níveis"
  },
  {
    id: 4,
    title: "Masterclass de Dança Urbana",
    type: "Masterclass",
    category: "Dança",
    description: "Sessão intensiva com coreógrafo profissional de hip-hop.",
    duration: "2 horas",
    instructor: "Carlos Mendes",
    date: "Próxima: 22 Abril",
    icon: Calendar,
    link: "#",
    level: "Avançado"
  },
  {
    id: 5,
    title: "Biblioteca Digital de Artes Visuais",
    type: "Recurso",
    category: "Artes Visuais",
    description: "Acesso a ebooks, tutoriais e galerias virtuais.",
    duration: "Ilimitado",
    instructor: "Biblioteca ReadySet",
    date: "Sempre disponível",
    icon: BookOpen,
    link: "#",
    level: "Todos os níveis"
  },
  {
    id: 6,
    title: "Laboratório de Cinema Experimental",
    type: "Workshop",
    category: "Cinema",
    description: "Criação de curtas-metragens com técnicas experimentais.",
    duration: "6 horas",
    instructor: "Pedro Almeida",
    date: "Próxima: 5 Maio",
    icon: Video,
    link: "#",
    level: "Intermédio"
  }
];

const categories = ["Todos", "Música", "Teatro", "Dança", "Escrita", "Artes Visuais", "Cinema"];

export default function Education() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ background: 'linear-gradient(135deg, hsl(60 50% 95%) 0%, hsl(25 60% 95%) 50%, hsl(240 50% 95%) 100%)' }}>
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-25 rounded-2xl"></div>
            <div className="relative z-10 p-8">
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
                Educação <span className="text-primary">Artística</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Recursos educacionais dinâmicos para desenvolver as tuas habilidades artísticas.
                Cursos, workshops, masterclasses e materiais didáticos sempre disponíveis.
              </p>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => {
              const IconComponent = resource.icon;
              return (
                <Card key={resource.id} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {resource.level}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {resource.title}
                    </CardTitle>
                    <div className="flex gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">
                        {resource.type}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {resource.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {resource.description}
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground mb-6">
                      <div className="flex justify-between">
                        <span>Duração:</span>
                        <span className="font-medium">{resource.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Instrutor:</span>
                        <span className="font-medium">{resource.instructor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Disponibilidade:</span>
                        <span className="font-medium">{resource.date}</span>
                      </div>
                    </div>
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors group-hover:shadow-md">
                      <ExternalLink className="w-4 h-4" />
                      Aceder Recurso
                    </button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 p-8 bg-card rounded-2xl border border-border">
            <h2 className="text-3xl font-display font-bold mb-4">
              Tens uma ideia para um novo recurso?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Estamos sempre a expandir a nossa oferta educativa. Se tens sugestões para novos cursos,
              workshops ou materiais didáticos, entra em contacto connosco.
            </p>
            <button className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
              Sugerir Recurso
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}