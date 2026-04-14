import { Calendar, MapPin, Ticket } from "lucide-react";
import { Badge } from "./ui/badge";

const events = [
  {
    id: 1,
    title: "Jam Session Aberta",
    type: "JAZZ",
    date: "24 Fev",
    time: "21:00",
    location: "Sede ReadySet",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=2664&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Workshop de Teatro",
    type: "CURSO",
    date: "02 Mar",
    time: "10:00",
    location: "Fórum Machico",
    image: "https://images.unsplash.com/photo-1503095392237-7362137d70df?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Noite de Rock Indie",
    type: "ROCK",
    date: "15 Mar",
    time: "22:30",
    location: "Praça Principal",
    image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?q=80&w=2670&auto=format&fit=crop"
  }
];

export function Events() {
  return (
    <section id="events" className="section-pad">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground mb-3">
              Agenda
            </p>
            <h2 className="text-5xl md:text-7xl font-display uppercase">
              Próximos
              <br />
              <span className="text-secondary">Eventos</span>
            </h2>
          </div>
          <button className="btn-ghost w-full md:w-auto">
            Ver agenda completa
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:-translate-y-1 transition-all duration-300"
            >
              <div className="aspect-[16/11] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/25 via-transparent to-accent/25 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                />
                <Badge className="absolute top-4 right-4 bg-primary text-white border-none text-xs font-mono uppercase rounded-full px-3 py-1">
                  {event.type}
                </Badge>
              </div>
              
              <div className="p-4 space-y-3">
                <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {event.date}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {event.location}</span>
                </div>
                
                <h3 className="text-xl font-display uppercase leading-none group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                
                <button className="w-full mt-2 btn-primary rounded-xl">
                  <Ticket className="w-3 h-3" /> Reservar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
