import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NOVA FORCE — Legends Assemble" },
      {
        name: "description",
        content:
          "Meet the Nova Force: six legendary heroes defending the city against the dark.",
      },
      { property: "og:title", content: "NOVA FORCE — Legends Assemble" },
      {
        property: "og:description",
        content:
          "Meet the Nova Force: six legendary heroes defending the city against the dark.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const heroes = [
  {
    name: "Crimson Blaze",
    alias: "The First Spark",
    power: "Commands living fire that burns only for justice.",
    description:
      "A firefighter who walked out of a collapsing inferno reborn, Crimson Blaze now carries the city's oldest flame in his veins. Where the darkness spreads, his fire follows — burning away fear and never harming the innocent.",
  },
  {
    name: "Night Warden",
    alias: "Shadow of the City",
    power: "Melts into darkness and strikes without a sound.",
    description:
      "Nobody has seen Night Warden's true face, and that is exactly how he keeps the city safe. By day he is a rumor, by night he is a shadow moving along rooftops, listening for the crime before it happens.",
  },
  {
    name: "Volt Queen",
    alias: "The Storm Caller",
    power: "Channels lightning from a single thunderclap.",
    description:
      "Born during the worst storm in a century, Volt Queen learned that thunder answers when she calls. She rides the storm fronts above the skyline, hurling lightning at anything that threatens her city.",
  },
  {
    name: "Titan Core",
    alias: "The Unbreakable",
    power: "Skin of steel, strength to lift a collapsing bridge.",
    description:
      "Titan Core was forged in the depths of a fallen reactor, and nothing has cracked him since. He is always the first through the wall and the last to leave — the solid ground every other hero stands on.",
  },
  {
    name: "Echo Pulse",
    alias: "The Sonic Wave",
    power: "Shatters concrete with a focused sound burst.",
    description:
      "A former musician who discovered her voice could do more than fill a stadium, Echo Pulse now fights with sound itself. One focused note can stop a riot; a single held chord can bring a building down.",
  },
  {
    name: "Phantom Drift",
    alias: "Between Moments",
    power: "Slips through time a heartbeat ahead of everyone.",
    description:
      "Phantom Drift exists one heartbeat in the future, which makes her impossible to ambush and even harder to catch. She sees every outcome before the fight begins — and simply chooses the one where everyone makes it home.",
  },
];

function Index() {
  const [selectedHero, setSelectedHero] = useState<(typeof heroes)[number] | null>(
    null,
  );

  // Close with Escape and lock page scroll while a profile is open
  useEffect(() => {
    if (!selectedHero) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedHero(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selectedHero]);

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-4 sm:flex sm:justify-between sm:px-6">
          <a href="#" className="flex min-w-0 items-center gap-2">
            <span className="inline-block h-3 w-3 shrink-0 rotate-45 bg-primary" />
            <span className="truncate font-display text-xl tracking-widest text-foreground sm:text-2xl">
              NOVA<span className="text-primary">FORCE</span>
            </span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {["Heroes", "Story", "Universe"].map((item) => (
              <a
                key={item}
                href="#heroes"
                className="text-sm font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
              >
                {item}
              </a>
            ))}
            <a
              href="#heroes"
              className="rounded-md bg-primary px-4 py-2 text-sm font-bold uppercase tracking-wider text-primary-foreground btn-cinematic"
            >
              Join the Force
            </a>
          </div>
          <a
            href="#heroes"
            className="shrink-0 rounded-md bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground md:hidden"
          >
            Join
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Caped hero overlooking a red-lit city at night"
          width={1792}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10" />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-40">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-primary sm:text-sm">
            The city needs legends
          </p>
          <h1 className="hero-title max-w-3xl text-5xl text-foreground sm:text-7xl md:text-8xl">
            Rise above
            <br />
            the <span className="text-primary">darkness</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Six extraordinary heroes. One impossible mission. The battle for
            the city begins when the lights go out.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="#heroes"
              className="rounded-md bg-primary px-8 py-4 text-center text-sm font-bold uppercase tracking-widest text-primary-foreground btn-cinematic"
            >
              Meet the Heroes
            </a>
            <a
              href="#heroes"
              className="rounded-md border border-input px-8 py-4 text-center text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Watch Trailer
            </a>
          </div>
        </div>
      </section>

      {/* Heroes */}
      <section id="heroes" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-primary sm:text-sm">
          The Roster
        </p>
        <h2 className="text-3xl uppercase sm:text-5xl">
          Choose your <span className="text-primary">legend</span>
        </h2>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {heroes.map((hero) => (
            <article
              key={hero.name}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 card-glow sm:p-8"
            >
              <span className="absolute -right-4 -top-6 font-display text-7xl text-primary/10 transition-colors duration-300 group-hover:text-primary/25 sm:text-8xl">
                {hero.name.charAt(0)}
              </span>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                {hero.alias}
              </p>
              <h3 className="mt-3 text-2xl sm:text-3xl">{hero.name}</h3>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                {hero.power}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {hero.description}
              </p>
              <div className="mt-6 h-px w-12 bg-primary transition-all duration-300 group-hover:w-24" />
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-6 sm:text-left">
          <span className="font-display text-xl tracking-widest">
            NOVA<span className="text-primary">FORCE</span>
          </span>
          <p className="text-sm text-muted-foreground">
            A fictional universe of heroes. All powers reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
