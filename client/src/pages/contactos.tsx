import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "ola@readyset.pt",
    description: "Envie-nos uma mensagem"
  },
  {
    icon: Phone,
    title: "Telefone",
    value: "+351 291 123 456",
    description: "Ligue-nos para informações"
  },
  {
    icon: MapPin,
    title: "Morada",
    value: "Rua das Artes, 123\nMachico, Madeira\nPortugal",
    description: "Visite-nos na nossa sede"
  },
  {
    icon: Clock,
    title: "Horário",
    value: "Seg-Sex: 9h-18h\nSáb: 10h-16h",
    description: "Dias e horários de funcionamento"
  }
];

const faqs = [
  {
    question: "Como posso participar nos eventos?",
    answer: "Pode inscrever-se diretamente no nosso site ou contactar-nos por email/telefone. Algumas atividades têm inscrições limitadas."
  },
  {
    question: "Oferecem workshops para principiantes?",
    answer: "Sim! Temos workshops introdutórios em todas as áreas artísticas, adequados para todos os níveis de experiência."
  },
  {
    question: "Como posso apoiar a ReadySet?",
    answer: "Pode tornar-se sócio, fazer donativos, ou participar como voluntário nos nossos eventos e projetos."
  },
  {
    question: "Trabalham com escolas?",
    answer: "Sim, desenvolvemos projetos educativos para escolas e oferecemos visitas guiadas e workshops pedagógicos."
  }
];

export default function Contactos() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Mensagem enviada! Entraremos em contacto em breve.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ background: 'linear-gradient(135deg, hsl(240 50% 95%) 0%, hsl(25 60% 95%) 50%, hsl(140 40% 95%) 100%)' }}>
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2724&auto=format&fit=crop')] bg-cover bg-center opacity-25 rounded-2xl"></div>
            <div className="relative z-10 p-8">
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
                Contacte-<span className="text-primary">nos</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Tem dúvidas, sugestões ou quer participar nos nossos projetos?
                Entre em contacto connosco através dos vários canais disponíveis.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-3xl font-display font-bold mb-8">Informações de Contacto</h2>

              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                          <p className="text-muted-foreground mb-2">{info.description}</p>
                          <p className="font-mono text-sm whitespace-pre-line">{info.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <MessageSquare className="w-6 h-6" />
                    Envie-nos uma Mensagem
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Nome *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Assunto *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                      >
                        <option value="">Selecione um assunto</option>
                        <option value="informacao">Informações gerais</option>
                        <option value="eventos">Eventos e inscrições</option>
                        <option value="parceria">Parcerias e colaborações</option>
                        <option value="voluntario">Voluntariado</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Mensagem *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background resize-none"
                        placeholder="Escreva a sua mensagem aqui..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                    >
                      <Send className="w-5 h-5" />
                      Enviar Mensagem
                    </button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-bold mb-4">
                Perguntas <span className="text-primary">Frequentes</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Encontre respostas para as dúvidas mais comuns
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="mt-20">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Localização</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Mapa interativo em breve</p>
                    <p className="text-sm">Rua das Artes, 123 - Machico, Madeira</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}