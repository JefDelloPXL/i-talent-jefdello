import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { highlights } from "@/data/content";
import { cn } from "@/lib/utils";

const HighlightPage = () => {
  const { slug } = useParams();
  const idx = highlights.findIndex((h) => h.slug === slug);
  if (idx === -1) return <Navigate to="/" replace />;
  const h = highlights[idx];
  const prev = highlights[(idx - 1 + highlights.length) % highlights.length];
  const next = highlights[(idx + 1) % highlights.length];

  return (
    <article className="fade-in">
      {/* Header */}
      <header className="max-w-3xl mx-auto px-6 pt-16 sm:pt-24 pb-10 text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-primary/80 mb-6">
          {h.context}
        </p>
        <h1 className="font-serif-display text-4xl sm:text-6xl leading-[1.05] mb-6">
          {h.title}
        </h1>
        <p className="text-foreground/70 text-lg max-w-xl mx-auto">{h.teaser}</p>
      </header>

      {/* Hero image */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <div className="aspect-[16/9] overflow-hidden rounded-md border border-border/60 bg-muted">
          <img
            src={h.hero}
            alt={h.title}
            width={1600}
            height={1024}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Body */}
      <div className="max-w-2xl mx-auto px-6 prose-essay">
        {h.body.map((b, i) => {
          if (b.type === "p") return <p key={i}>{b.text}</p>;
          const widthClass =
            b.width === "full"
              ? "-mx-6 sm:-mx-16 md:-mx-32"
              : b.width === "wide"
                ? "-mx-6 sm:-mx-12"
                : "";
          return (
            <figure key={i} className={cn("my-12", widthClass)}>
              <div className="overflow-hidden rounded-md border border-border/60 bg-muted">
                <img
                  src={b.src}
                  alt={b.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
              {b.caption && (
                <figcaption className="text-xs text-muted-foreground italic mt-3 text-center">
                  {b.caption}
                </figcaption>
              )}
            </figure>
          );
        })}
      </div>

      {/* Prev / Next */}
      <nav className="max-w-3xl mx-auto px-6 mt-24 pt-10 border-t border-border/60 grid grid-cols-2 gap-6">
        <Link
          to={`/highlights/${prev.slug}`}
          className="group text-left"
        >
          <div className="text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 mb-2">
            <ArrowLeft className="!size-3.5" /> Vorige
          </div>
          <div className="font-serif-display text-lg group-hover:text-primary transition-colors">
            {prev.title}
          </div>
        </Link>
        <Link
          to={`/highlights/${next.slug}`}
          className="group text-right"
        >
          <div className="text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 mb-2 justify-end">
            Volgende <ArrowRight className="!size-3.5" />
          </div>
          <div className="font-serif-display text-lg group-hover:text-primary transition-colors">
            {next.title}
          </div>
        </Link>
      </nav>
    </article>
  );
};

export default HighlightPage;
