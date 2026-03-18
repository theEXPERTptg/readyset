import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Ticket, Clock, Users } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Jam Session Aberta",
    type: "Música",
    category: "Jazz",
    description: "Sessão aberta de jam com músicos locais. Todos os níveis são bem-vindos.",
    date: "24 Fev 2024",
    time: "21:00",
    location: "Sede ReadySet, Machico",
    capacity: 50,
    price: "Gratuito",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=2664&auto=format&fit=crop",
    status: "Próximo"
  },
  {
    id: 2,
    title: "Workshop de Teatro",
    type: "Workshop",
    category: "Teatro",
    description: "Introdução às técnicas básicas de atuação e improvisação teatral.",
    date: "02 Mar 2024",
    time: "10:00",
    location: "Fórum Machico",
    capacity: 25,
    price: "15€",
    image: "https://images.unsplash.com/photo-1503095392237-7362137d70df?q=80&w=2670&auto=format&fit=crop",
    status: "Inscrições abertas"
  },
  {
    id: 3,
    title: "Noite de Rock Indie",
    type: "Concerto",
    category: "Rock",
    description: "Apresentação de bandas locais de rock independente.",
    date: "15 Mar 2024",
    time: "22:30",
    location: "Praça Principal, Machico",
    capacity: 200,
    price: "10€",
    image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?q=80&w=2670&auto=format&fit=crop",
    status: "Próximo"
  },
  {
    id: 4,
    title: "Festival de Dança Urbana",
    type: "Festival",
    category: "Dança",
    description: "Competição e apresentações de dança urbana com DJs convidados.",
    date: "05 Abr 2024",
    time: "18:00",
    location: "Centro Cultural, Machico",
    capacity: 150,
    price: "8€",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    status: "Em breve"
  },
  {
    id: 5,
    title: "Exposição de Artes Visuais",
    type: "Exposição",
    category: "Artes Visuais",
    description: "Mostra coletiva de artistas madeirenses com vernissage.",
    date: "12 Abr 2024",
    time: "17:00",
    location: "Galeria Municipal",
    capacity: 100,
    price: "Gratuito",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    status: "Em breve"
  },
  {
    id: 6,
    title: "Masterclass de Escrita Criativa",
    type: "Masterclass",
    category: "Escrita",
    description: "Sessão com escritor premiado sobre técnicas de narrativa.",
    date: "20 Abr 2024",
    time: "14:00",
    location: "Biblioteca Municipal",
    capacity: 30,
    price: "20€",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2724&auto=format&fit=crop",
    status: "Inscrições abertas"
  }
];

const categories = ["Todos", "Música", "Teatro", "Dança", "Artes Visuais", "Escrita", "Cinema"];

export default function Events() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ background: 'linear-gradient(135deg, hsl(45 100% 97%) 0%, hsl(200 20% 95%) 50%, hsl(140 40% 95%) 100%)' }}>
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20 rounded-2xl"></div>
            <div className="relative z-10 p-8">
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
                Eventos <span className="text-primary">Artísticos</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Descobre os próximos eventos culturais da ReadySet. Concertos, workshops,
                exposições e muito mais para celebrar a arte em Machico.
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

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card key={event.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {event.status}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="text-xs">
                      {event.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                    <Clock className="w-4 h-4 ml-2" />
                    <span>{event.time}</span>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="space-y-2 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>Capacidade: {event.capacity} pessoas</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">Preço:</span>
                      <span className="font-bold text-primary">{event.price}</span>
                    </div>
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors group-hover:shadow-md">
                    <Ticket className="w-4 h-4" />
                    Inscrever-se
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 p-8 bg-card rounded-2xl border border-border">
            <h2 className="text-3xl font-display font-bold mb-4">
              Organiza o teu próprio evento
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Tens uma ideia para um evento artístico? A ReadySet apoia artistas locais
              na organização de eventos culturais. Entra em contacto para saber mais.
            </p>
            <button className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
              Propor Evento
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}