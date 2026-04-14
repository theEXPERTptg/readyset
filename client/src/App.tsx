import { Router as WouterRouter, Switch, Route } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Sobre from "@/pages/sobre";
import Education from "@/pages/education";
import Eventos from "@/pages/eventos";
import Contactos from "@/pages/contactos";
import NotFound from "@/pages/not-found";
import ArtMusica from "@/pages/art-musica";
import ArtTeatro from "@/pages/art-teatro";
import ArtDanca from "@/pages/art-danca";
import ArtArtesVisuais from "@/pages/art-artes-visuais";
import ArtEscrita from "@/pages/art-escrita";
import ArtCinema from "@/pages/art-cinema";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/educacao" component={Education} />
      <Route path="/eventos" component={Eventos} />
      <Route path="/contactos" component={Contactos} />
      <Route path="/arte/musica" component={ArtMusica} />
      <Route path="/arte/teatro" component={ArtTeatro} />
      <Route path="/arte/danca" component={ArtDanca} />
      <Route path="/arte/artes-visuais" component={ArtArtesVisuais} />
      <Route path="/arte/escrita" component={ArtEscrita} />
      <Route path="/arte/cinema" component={ArtCinema} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <WouterRouter hook={useHashLocation}>
          <Router />
        </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
