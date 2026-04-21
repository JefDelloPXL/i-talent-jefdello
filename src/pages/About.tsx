import { about, site } from "@/data/content";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 sm:py-28 fade-in">
      <p className="text-xs tracking-[0.25em] uppercase text-primary/80 mb-6">About</p>
      <div className="grid md:grid-cols-[1fr_1.3fr] gap-10 md:gap-16 items-start">
        <div className="order-2 md:order-1">
          <div className="aspect-[4/5] overflow-hidden rounded-md border border-border/60 bg-muted">
            <img
              src={about.portrait}
              alt={`${site.name}'s desk`}
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h1 className="font-serif-display text-4xl sm:text-5xl leading-tight mb-8">
            Hoi, ik ben Jef.
          </h1>
          {about.bio.map((p, i) => (
            <p key={i} className="text-foreground/80 leading-[1.85] mb-5 text-[1.0625rem]">
              {p}
            </p>
          ))}
          <div className="mt-10 pt-8 border-t border-border/60">
            <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Momenteel bezig met
            </div>
            <ul className="flex flex-wrap gap-2">
              {about.interests.map((it) => (
                <li
                  key={it}
                  className="text-sm px-3 py-1.5 rounded-full border border-border bg-secondary/40"
                >
                  {it}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
