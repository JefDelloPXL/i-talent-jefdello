import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { highlights, site } from "@/data/content";
import { cn } from "@/lib/utils";

const linkBase =
  "relative text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors py-1";
const linkActive = "text-foreground";
const underline =
  "after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:after:scale-x-100";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [hlOpen, setHlOpen] = useState(false);
  const loc = useLocation();

  const close = () => {
    setOpen(false);
    setHlOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/75 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" onClick={close} className="font-serif-display text-lg tracking-tight">
          {site.name}
          <span className="text-primary">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" end className={({ isActive }) => cn(linkBase, underline, isActive && linkActive)}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => cn(linkBase, underline, isActive && linkActive)}>
            About
          </NavLink>
          <div
            className="relative"
            onMouseEnter={() => setHlOpen(true)}
            onMouseLeave={() => setHlOpen(false)}
          >
            <button
              className={cn(
                linkBase,
                underline,
                "flex items-center gap-1",
                loc.pathname.startsWith("/highlights") && linkActive,
              )}
            >
              Highlights <ChevronDown className="!size-3.5 opacity-60" />
            </button>
            {hlOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-72">
                <div className="bg-card border border-border rounded-md shadow-xl p-2 fade-in">
                  {highlights.map((h) => (
                    <Link
                      key={h.slug}
                      to={`/highlights/${h.slug}`}
                      className="block px-3 py-2 rounded hover:bg-secondary text-sm"
                    >
                      <div className="font-medium text-foreground">{h.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{h.context}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <NavLink
            to="/activities"
            className={({ isActive }) => cn(linkBase, underline, isActive && linkActive)}
          >
            Activities
          </NavLink>
        </nav>

        <button
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <Menu className="size-5 hidden" /> : null}
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="px-6 py-4 flex flex-col gap-3">
            <NavLink to="/" end onClick={close} className="py-2 text-sm">Home</NavLink>
            <NavLink to="/about" onClick={close} className="py-2 text-sm">About</NavLink>
            <div className="text-xs uppercase tracking-wider text-muted-foreground pt-2">Highlights</div>
            {highlights.map((h) => (
              <Link
                key={h.slug}
                to={`/highlights/${h.slug}`}
                onClick={close}
                className="pl-3 py-1.5 text-sm border-l border-border hover:border-primary"
              >
                {h.title}
              </Link>
            ))}
            <NavLink to="/activities" onClick={close} className="py-2 text-sm pt-2">Activities</NavLink>
          </div>
        </div>
      )}
    </header>
  );
};
