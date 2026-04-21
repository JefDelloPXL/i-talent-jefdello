import { site } from "@/data/content";

export const Footer = () => (
  <footer className="border-t border-border/60 mt-24">
    <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between text-xs text-muted-foreground">
      <div>© {new Date().getFullYear()} {site.name}</div>
      <div>A college journey · documented quietly.</div>
    </div>
  </footer>
);
