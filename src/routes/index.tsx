import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Instagram, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import logoUrl from "@/assets/oro-logo.png";
import barberHeroUrl from "@/assets/barber-hero.jpg";

const PHONE_NUMBER = "041 796 2012";
const PHONE_HREF = "tel:+358417962012";
const STREET = "Norkkokuja 3";
const POSTAL = "00790 Helsinki";
const ADDRESS = `${STREET}, ${POSTAL}`;
const MAPS_LINK = `https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
const INSTAGRAM_HANDLE = "@orobarbershop2";
const INSTAGRAM_URL = "https://instagram.com/orobarbershop2";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Oro Barbershop - Terävä leikkaus" },
      {
        name: "description",
        content:
          "Oro Barbershop, Norkkokuja 3, 00790 Helsinki. Klassiset leikkaukset, terävät fadet ja perinteiset parranajot.",
      },
      { property: "og:title", content: "Oro Barbershop - Terävä leikkaus" },
      {
        property: "og:description",
        content:
          "Klassiset leikkaukset, terävät fadet ja perinteiset parranajot. Norkkokuja 3, 00790 Helsinki.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <HoursSection />
        <BookingSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}

function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <img
      src={logoUrl}
      alt="Oro Barbershop -logo"
      className={`${className} rounded-full object-cover`}
      loading="eager"
    />
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <Logo className="h-9 w-9" />
          <span className="text-sm font-semibold tracking-[0.18em] uppercase">Oro</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {[
            ["Palvelut", "#palvelut"],
            ["Aukioloajat", "#aukioloajat"],
            ["Ajanvaraus", "#ajanvaraus"],
            ["Sijainti", "#sijainti"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-[11px] tracking-[0.16em] uppercase text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>

        <Button asChild size="sm" className="hidden rounded-none px-4 text-[11px] tracking-[0.14em] uppercase md:inline-flex">
          <a href={PHONE_HREF}>
            <Phone className="h-3.5 w-3.5" />
            {PHONE_NUMBER}
          </a>
        </Button>

        <Button asChild size="icon" variant="outline" className="rounded-none md:hidden" aria-label="Soita">
          <a href={PHONE_HREF}>
            <Phone className="h-5 w-5" />
          </a>
        </Button>
      </div>

      <nav className="flex items-center gap-6 overflow-x-auto border-t border-border px-5 py-3 md:hidden">
        {[
          ["Palvelut", "#palvelut"],
          ["Aukioloajat", "#aukioloajat"],
          ["Ajanvaraus", "#ajanvaraus"],
          ["Sijainti", "#sijainti"],
        ].map(([label, href]) => (
          <a
            key={href}
            href={href}
            className="shrink-0 text-[11px] tracking-[0.16em] uppercase text-muted-foreground"
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="border-b border-border px-5 py-20 sm:px-8 sm:py-28 lg:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 border border-border px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
            <MapPin className="h-3 w-3" />
            {STREET} - {POSTAL}
          </div>

          <h1 className="font-display mt-8 text-6xl leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
            TERÄVÄ
            <br />
            LEIKKAUS.
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Klassiset leikkaukset, terävät fadet ja perinteiset parranajot huolellisella kädellä.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-none text-xs tracking-[0.14em] uppercase">
              <a href={PHONE_HREF}>
                <Phone className="h-4 w-4" />
                Varaa aika: {PHONE_NUMBER}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-none text-xs tracking-[0.14em] uppercase"
            >
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                <Instagram className="h-4 w-4" />
                {INSTAGRAM_HANDLE}
              </a>
            </Button>
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden border border-border">
          <img
            src={barberHeroUrl}
            alt="Parturi työssään"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

const services = [
  { name: "Hiustenleikkaus", price: "25 €" },
  { name: "Eläkeläisille", price: "20 €" },
  { name: "Lapsille (alle 12 v)", price: "20 €" },
  { name: "Parranajo", price: "15 €" },
  { name: "Parran muotoilu", price: "20 €" },
  { name: "Langalla siistiminen", price: "10 €" },
  { name: "Nenäkarvojen vahaus", price: "5 €" },
  { name: "Hius design", price: "5 €" },
];

function ServicesSection() {
  return (
    <section id="palvelut" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Palvelut</span>
          <h2 className="font-display mt-3 text-4xl tracking-tight sm:text-5xl">Hinnasto</h2>
        </div>

        <ul className="mt-12 border-t border-border">
          {services.map((s, i) => (
            <li
              key={s.name}
              className="flex items-center justify-between border-b border-border py-5 transition-colors hover:bg-muted/30"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-[10px] tracking-[0.16em] uppercase text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base font-medium">{s.name}</span>
              </div>
              <span className="text-[11px] tracking-[0.14em] uppercase text-muted-foreground">{s.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const hours = [
  ["Maanantai", "9-19"],
  ["Tiistai", "9-19"],
  ["Keskiviikko", "9-19"],
  ["Torstai", "9-19"],
  ["Perjantai", "9-19"],
  ["Lauantai", "9-19"],
  ["Sunnuntai", "12-18"],
];

function HoursSection() {
  return (
    <section id="aukioloajat" className="invert-surface border-y border-border bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-20">
        <div className="max-w-md">
          <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Aukioloajat</span>
          <h2 className="font-display mt-3 text-4xl tracking-tight sm:text-5xl">Milloin olemme auki</h2>
          <div className="mt-8 inline-flex items-center gap-2 border border-border px-4 py-2 text-[10px] tracking-[0.14em] uppercase">
            <Clock className="h-3.5 w-3.5" />
            Walk-in tervetullut
          </div>
        </div>

        <ul className="border-t border-border">
          {hours.map(([day, time]) => (
            <li key={day} className="flex items-center justify-between border-b border-border py-4">
              <span className="text-sm tracking-[0.06em] uppercase">{day}</span>
              <span className="text-sm text-muted-foreground">{time}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function BookingSection() {
  return (
    <section id="ajanvaraus" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="max-w-md">
            <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Ajanvaraus</span>
            <h2 className="font-display mt-3 text-4xl tracking-tight sm:text-5xl">Varaa puhelimitse</h2>
            <p className="mt-4 text-muted-foreground">
              Soita suoraan ja sovi sinulle sopiva aika.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-none text-xs tracking-[0.14em] uppercase">
                <a href={PHONE_HREF}>
                  <Phone className="h-4 w-4" />
                  Soita {PHONE_NUMBER}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none text-xs tracking-[0.14em] uppercase"
              >
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" />
                  {INSTAGRAM_HANDLE}
                </a>
              </Button>
            </div>
          </div>

          <div className="border border-border p-8 sm:p-10">
            <h3 className="text-lg font-semibold">Walk-in tervetullut</h3>
            <p className="mt-3 text-muted-foreground">
              Ei varausta? Ei hätää. Tule paikan päälle - otamme asiakkaita vastaan myös ilman ajanvarausta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section id="sijainti" className="border-t border-border px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Sijainti</span>
          <h2 className="font-display mt-3 text-4xl tracking-tight sm:text-5xl">Tule käymään</h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="space-y-8 border border-border p-8">
            <div>
              <h3 className="text-[10px] tracking-[0.16em] uppercase text-muted-foreground">Osoite</h3>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center gap-2 text-lg font-medium underline underline-offset-4"
              >
                <MapPin className="h-4 w-4" />
                {STREET}, {POSTAL}
              </a>
            </div>
            <div>
              <h3 className="text-[10px] tracking-[0.16em] uppercase text-muted-foreground">Puhelin</h3>
              <a
                href={PHONE_HREF}
                className="mt-2 flex items-center gap-2 text-lg font-medium underline underline-offset-4"
              >
                <Phone className="h-4 w-4" />
                {PHONE_NUMBER}
              </a>
            </div>
            <div>
              <h3 className="text-[10px] tracking-[0.16em] uppercase text-muted-foreground">Instagram</h3>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center gap-2 text-lg font-medium underline underline-offset-4"
              >
                <Instagram className="h-4 w-4" />
                {INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>

          <div className="overflow-hidden border border-border lg:col-span-2">
            <iframe
              title="Oro Barbershop sijainti"
              src={MAPS_LINK}
              width="100%"
              height="100%"
              className="min-h-[360px] w-full border-0 grayscale lg:min-h-[440px]"
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
    <footer className="invert-surface border-t border-border bg-background px-5 py-12 text-foreground sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <Logo className="h-10 w-10" />
            <span className="text-sm font-semibold tracking-[0.18em] uppercase">Oro Barbershop</span>
          </div>

          <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-8">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {STREET}, {POSTAL}
            </span>
            <a href={PHONE_HREF} className="flex items-center gap-2 hover:text-foreground">
              <Phone className="h-4 w-4" />
              {PHONE_NUMBER}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground"
            >
              <Instagram className="h-4 w-4" />
              {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>

        <p className="mt-10 text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
          © {new Date().getFullYear()} Oro Barbershop
        </p>
      </div>
    </footer>
  );
}
