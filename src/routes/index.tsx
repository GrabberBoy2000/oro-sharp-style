import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Instagram, Scissors, Sparkles, Crown } from "lucide-react";

import { Button } from "@/components/ui/button";

const PHONE_NUMBER = "041 796 2012";
const PHONE_HREF = "tel:+358417962012";
const ADDRESS = "Norkkokuja 3";
const MAPS_LINK = `https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
const INSTAGRAM_HANDLE = "@orobarbershop2";
const INSTAGRAM_URL = "https://instagram.com/orobarbershop2";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Oro Barbershop — Terävä tukka. Ei kiemuroita." },
      {
        name: "description",
        content:
          "Oro Barbershop Norkkokuja 3:la. Klassiset hiustenleikkaukset, modernit fadet, partaveden ajot ja viimeistellyt lookit. Varaa aika tai tule walk-inina.",
      },
      { property: "og:title", content: "Oro Barbershop — Terävä tukka. Ei kiemuroita." },
      {
        property: "og:description",
        content:
          "Oro Barbershop Norkkokuja 3:la. Klassiset hiustenleikkaukset, modernit fadet, partaveden ajot ja viimeistellyt lookit.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <BookingSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <Crown className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold tracking-wider text-foreground uppercase">
            Oro Barbershop
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#palvelut" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Palvelut
          </a>
          <a href="#ajanvaraus" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Ajanvaraus
          </a>
          <a href="#sijainti" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Sijainti
          </a>
        </nav>

        <Button asChild size="sm" className="hidden md:inline-flex">
          <a href={PHONE_HREF}>
            <Phone className="h-4 w-4" />
            {PHONE_NUMBER}
          </a>
        </Button>

        <Button asChild size="icon" variant="ghost" className="md:hidden" aria-label="Soita">
          <a href={PHONE_HREF}>
            <Phone className="h-5 w-5 text-primary" />
          </a>
        </Button>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,oklch(0.75_0.15_85/0.12),transparent_50%)]" />
      <div className="mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm font-medium text-primary">
          <MapPin className="h-4 w-4" />
          {ADDRESS}
        </div>

        <h1 className="mt-8 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-7xl">
          Terävä tukka.
          <br />
          <span className="text-primary">Ei kiemuroita.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Klassiset leikkaukset, terävät fadet ja perinteiset parranajot huolellisella kädellä. Tule
          sellaisena kuin olet — lähdet parempana versiona.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href={PHONE_HREF}>
              <Phone className="h-5 w-5" />
              Varaa aika: {PHONE_NUMBER}
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5" />
              {INSTAGRAM_HANDLE}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: Scissors,
      title: "Hiustenleikkaus",
      description: "Klassinen leikkaus tai moderni fade — aina siisti lopputulos.",
    },
    {
      icon: Sparkles,
      title: "Parranajo & muotoilu",
      description: "Perinteinen partaveitsiajo ja parran trimmaus tarkalla kädellä.",
    },
    {
      icon: Crown,
      title: "Muotoilu & viimeistely",
      description: "Viimeistele look laadukkailla tuotteilla ja tyylillä.",
    },
  ];

  return (
    <section id="palvelut" className="border-t border-border px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">Palvelut</h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Mitä teemme
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Jokainen asiakas saa täyden huomion ja lopputuloksen, joka sopii juuri sinulle.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/50"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookingSection() {
  return (
    <section id="ajanvaraus" className="border-t border-border px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">
              Ajanvaraus
            </h2>
            <p className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Varaa helposti puhelimitse
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Soita suoraan ja sovi sinulle sopiva aika. Palvelemme arkisin ja viikonloppuisin.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href={PHONE_HREF}>
                  <Phone className="h-5 w-5" />
                  Soita {PHONE_NUMBER}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                  {INSTAGRAM_HANDLE}
                </a>
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent p-8 sm:p-10">
            <div className="flex items-start gap-4">
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Walk-in tervetullut</h3>
                <p className="mt-3 text-muted-foreground">
                  Ei varausta? Ei hätää. Tule paikan päälle — otamme vastaan asiakkaita myös ilman
                  ajanvarausta, kun tuolissa on tilaa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section id="sijainti" className="border-t border-border px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">Sijainti</h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Tule käymään
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Löydät meidät Norkkokuja 3:sta. Olemme täällä, jotta voit lähteä paremman näköisenä.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-8 lg:col-span-1">
            <h3 className="text-lg font-semibold text-foreground">Osoite</h3>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-primary transition-colors hover:text-primary/80"
            >
              <MapPin className="h-4 w-4" />
              {ADDRESS}
            </a>

            <h3 className="mt-8 text-lg font-semibold text-foreground">Puhelin</h3>
            <a
              href={PHONE_HREF}
              className="mt-2 inline-flex items-center gap-2 text-primary transition-colors hover:text-primary/80"
            >
              <Phone className="h-4 w-4" />
              {PHONE_NUMBER}
            </a>

            <h3 className="mt-8 text-lg font-semibold text-foreground">Instagram</h3>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-primary transition-colors hover:text-primary/80"
            >
              <Instagram className="h-4 w-4" />
              {INSTAGRAM_HANDLE}
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border lg:col-span-2">
            <iframe
              title="Oro Barbershop sijainti"
              src={MAPS_LINK}
              width="100%"
              height="100%"
              className="min-h-[360px] w-full border-0 lg:min-h-[420px]"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <Crown className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold tracking-wider text-foreground uppercase">
              Oro Barbershop
            </span>
          </div>

          <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              {ADDRESS}
            </span>
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Phone className="h-4 w-4 text-primary" />
              {PHONE_NUMBER}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Instagram className="h-4 w-4 text-primary" />
              {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Oro Barbershop. Kaikki oikeudet pidätetään.
        </p>
      </div>
    </footer>
  );
}
