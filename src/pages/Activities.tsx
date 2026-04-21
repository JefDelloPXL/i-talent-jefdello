import { useMemo, useState } from "react";
import { activities, type Activity } from "@/data/content";
import { cn } from "@/lib/utils";

const TYPES: Array<Activity["type"] | "Alle"> = [
  "Alle",
  "Seminar",
  "Hackathon",
  "Innovatieroute",
  "Workshop",
  "Project",
];

const fmt = (d: string) => {
  const [y, m] = d.split("-");
  const date = new Date(Number(y), Number(m) - 1, 1);
  return date.toLocaleString(undefined, { month: "short", year: "numeric" });
};

const Activities = () => {
  const [filter, setFilter] = useState<(typeof TYPES)[number]>("Alle");

  const grouped = useMemo(() => {
    const filtered = activities.filter((a) => filter === "Alle" || a.type === filter);
    const sorted = [...filtered].sort((a, b) => b.date.localeCompare(a.date));
    const map = new Map<number, Activity[]>();
    for (const a of sorted) {
      if (!map.has(a.year)) map.set(a.year, []);
      map.get(a.year)!.push(a);
    }
    return Array.from(map.entries()).sort((a, b) => b[0] - a[0]);
  }, [filter]);

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 sm:py-28 fade-in">
      <p className="text-xs tracking-[0.25em] uppercase text-primary/80 mb-6">Activiteiten</p>
      <h1 className="font-serif-display text-4xl sm:text-5xl mb-4">Alles, op volgorde.</h1>
      <p className="text-muted-foreground max-w-xl mb-10">
        Een doorlopend overzicht van seminars, hackathons, workshops en zijprojecten tijdens mijn tijd op de hogeschool.
      </p>

      {/* Filter chips */}
      <div className="flex flex-wrap gap-2 mb-12">
        {TYPES.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={cn(
              "text-xs px-3 py-1.5 rounded-full border transition-colors",
              filter === t
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-secondary/40 text-muted-foreground hover:text-foreground hover:border-foreground/30",
            )}
          >
            {t}
          </button>
        ))}
      </div>

      {grouped.length === 0 && (
        <p className="text-muted-foreground text-sm">Nog niets komt overeen met dit filter.</p>
      )}

      <div className="space-y-16">
        {grouped.map(([year, items]) => (
          <div key={year}>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="font-serif-display text-2xl text-primary">Jaar {year}</h2>
              <div className="flex-1 h-px bg-border" />
              <div className="text-xs text-muted-foreground">{items.length} items</div>
            </div>
            <ul className="divide-y divide-border/60">
              {items.map((a) => (
                <li
                  key={a.date + a.title}
                  className="py-5 grid grid-cols-[5.5rem_1fr] sm:grid-cols-[7rem_6rem_1fr] gap-x-4 gap-y-1 items-baseline"
                >
                  <time className="text-xs text-muted-foreground tabular-nums">{fmt(a.date)}</time>
                  <span className="text-[10px] tracking-wider uppercase text-primary/80 row-start-2 sm:row-start-auto col-span-2 sm:col-span-1">
                    {a.type}
                  </span>
                  <div className="col-span-2 sm:col-span-1">
                    <div className="font-medium text-foreground">{a.title}</div>
                    <div className="text-sm text-muted-foreground mt-0.5">{a.description}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activities;
