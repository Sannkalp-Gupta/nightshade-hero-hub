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
  },
  {
    name: "Night Warden",
    alias: "Shadow of the City",
    power: "Melts into darkness and strikes without a sound.",
  },
  {
    name: "Volt Queen",
    alias: "The Storm Caller",
    power: "Channels lightning from a single thunderclap.",
  },
  {
    name: "Titan Core",
    alias: "The Unbreakable",
    power: "Skin of steel, strength to lift a collapsing bridge.",
  },
  {
    name: "Echo Pulse",
    alias: "The Sonic Wave",
    power: "Shatters concrete with a focused sound burst.",
  },
  {
    name: "Phantom Drift",
    alias: "Between Moments",
    power: "Slips through time a heartbeat ahead of everyone.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rotate-45 bg-primary" />
            <span className="font-display text-2xl tracking-widest text-foreground">
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
            className="rounded-md bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground md:hidden"
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
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-40">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-primary">
            The city needs legends
          </p>
          <h1 className="hero-title max-w-3xl text-6xl text-foreground sm:text-7xl md:text-8xl">
            Rise above
            <br />
            the <span className="text-primary">darkness</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Six extraordinary heroes. One impossible mission. The battle for
            the city begins when the lights go out.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#heroes"
              className="rounded-md bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground btn-cinematic"
            >
              Meet the Heroes
            </a>
            <a
              href="#heroes"
              className="rounded-md border border-input px-8 py-4 text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Watch Trailer
            </a>
          </div>
        </div>
      </section>

      {/* Heroes */}
      <section id="heroes" className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-primary">
          The Roster
        </p>
        <h2 className="text-4xl uppercase sm:text-5xl">
          Choose your <span className="text-primary">legend</span>
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {heroes.map((hero) => (
            <article
              key={hero.name}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 card-glow"
            >
              <span className="absolute -right-4 -top-6 font-display text-8xl text-primary/10 transition-colors duration-300 group-hover:text-primary/25">
                {hero.name.charAt(0)}
              </span>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                {hero.alias}
              </p>
              <h3 className="mt-3 text-3xl">{hero.name}</h3>
              <p className="mt-4 text-muted-foreground">{hero.power}</p>
              <div className="mt-6 h-px w-12 bg-primary transition-all duration-300 group-hover:w-24" />
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
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
