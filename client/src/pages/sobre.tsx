import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Music, Target, Award, Globe } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Paixão pela Arte",
    description: "Acreditamos que a arte transforma vidas e comunidades, promovendo criatividade e expressão pessoal."
  },
  {
    icon: Users,
    title: "Comunidade",
    description: "Construímos uma rede de artistas, criativos e amantes da cultura em Machico e além."
  },
  {
    icon: Music,
    title: "Inovação Cultural",
    description: "Incentivamos a fusão de tradições madeirenses com tendências contemporâneas."
  },
  {
    icon: Target,
    title: "Inclusão",
    description: "Oferecemos oportunidades artísticas para pessoas de todas as idades e backgrounds."
  },
  {
    icon: Award,
    title: "Excelência",
    description: "Comprometemo-nos com a qualidade e profissionalismo em todas as nossas atividades."
  },
  {
    icon: Globe,
    title: "Intercâmbio",
    description: "Promovemos a troca cultural entre artistas locais e internacionais."
  }
];

const team = [
  {
    name: "João Silva",
    role: "Diretor Executivo",
    bio: "Músico e produtor cultural com 15 anos de experiência em gestão artística.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2670&auto=format&fit=crop"
  },
  {
    name: "Maria Santos",
    role: "Coordenadora de Eventos",
    bio: "Especialista em produção de eventos culturais e teatro comunitário.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=2670&auto=format&fit=crop"
  },
  {
    name: "Carlos Mendes",
    role: "Diretor Artístico",
    bio: "Coreógrafo e dançarino premiado, responsável pela programação artística.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop"
  }
];

export default function Sobre() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ background: 'linear-gradient(135deg, hsl(25 60% 95%) 0%, hsl(140 40% 95%) 50%, hsl(200 50% 95%) 100%)' }}>
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-25 rounded-2xl"></div>
            <div className="relative z-10 p-8">
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
                Sobre a <span className="text-primary">ReadySet</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Uma associação cultural dedicada à promoção da arte e cultura em Machico,
                Madeira. Conheça a nossa missão, valores e equipa.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
                  Nossa <span className="text-primary">Missão</span>
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  A ReadySet é uma associação cultural sem fins lucrativos sediada em Machico, Madeira,
                  dedicada à promoção e divulgação de atividades artísticas e culturais.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Incentivamos a criação artística nas áreas da música, teatro, dança, literatura,
                  cinema e artes plásticas, promovendo o intercâmbio cultural entre artistas locais e internacionais.
                </p>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <blockquote className="text-xl font-medium italic text-primary">
                    "Promover a expressão artística madeirense pelo mundo e trazer o mundo à Madeira através da arte e cultura."
                  </blockquote>
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Arte e cultura"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Nossos <span className="text-primary">Valores</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Os princípios que guiam todas as nossas ações e projetos
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Team */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Nossa <span className="text-primary">Equipa</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Conheça as pessoas por trás da ReadySet
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                    />
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <Badge variant="secondary">{member.role}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-display font-bold mb-4">
                ReadySet em <span className="text-primary">Números</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Artistas apoiados</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">Eventos realizados</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Parceiros</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10</div>
                <div className="text-muted-foreground">Anos de atividade</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}