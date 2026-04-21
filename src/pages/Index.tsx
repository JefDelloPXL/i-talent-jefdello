import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { site, highlights } from "@/data/content";

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div
          className="absolute inset-0 -z-10 opacity-40"
          style={{
            backgroundImage: `radial-gradient(ellipse at 70% 30%, hsl(var(--primary) / 0.25), transparent 60%)`,
          }}
        />
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 sm:pt-32 sm:pb-32 fade-in">
          <p className="text-xs tracking-[0.25em] uppercase text-primary/80 mb-6">Portfolio · 2022—present</p>
          <h1 className="font-serif-display text-5xl sm:text-7xl leading-[1.05] max-w-4xl">
            {site.name}.
            <br />
            <span className="text-foreground/60">{site.tagline}</span>
          </h1>
          <p className="mt-8 max-w-xl text-base sm:text-lg text-foreground/70 leading-relaxed">
            {site.intro}
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="font-serif-display text-2xl sm:text-3xl">Three highlights.</h2>
          <Link
            to="/activities"
            className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
          >
            See all activities <ArrowRight className="!size-3.5" />
          </Link>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {highlights.map((h, i) => (
            <Link
              key={h.slug}
              to={`/highlights/${h.slug}`}
              className="group block"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="aspect-[4/5] overflow-hidden rounded-md bg-muted mb-5 border border-border/60">
                <img
                  src={h.hero}
                  alt={h.title}
                  loading="lazy"
                  width={1600}
                  height={1024}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>
              <div className="text-[11px] tracking-[0.18em] uppercase text-primary/80 mb-2">
                0{i + 1} · {h.context.split("·")[0].trim()}
              </div>
              <h3 className="font-serif-display text-2xl leading-tight mb-2 group-hover:text-primary transition-colors">
                {h.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{h.teaser}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Index;
