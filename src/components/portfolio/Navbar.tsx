import { useEffect, useState } from "react";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS, PROFILE } from "@/lib/portfolio-data";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { handleDownloadCv } from "./cv";

export function Navbar() {
  const [active, setActive] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 md:px-6",
          scrolled ? "glass border-border-strong" : "border-transparent",
        )}
      >
        <a href="#home" className="font-mono text-lg font-bold tracking-[0.18em] text-foreground">
          EYROL<span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-sm transition-colors",
                  active === id ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            onClick={toggleTheme}
            className="glass inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:text-primary"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <Button asChild variant="hero" size="sm" className="hidden h-9 px-4 sm:inline-flex">
            <a href={PROFILE.cvUrl || "#"} download onClick={handleDownloadCv}>
              <Download /> Download CV
            </a>
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="glass inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="animate-in fade-in slide-in-from-top-2 mx-auto mt-2 max-w-6xl rounded-3xl border border-border-strong bg-card/95 p-3 shadow-[var(--shadow-card)] backdrop-blur-xl md:hidden">
          <ul className="flex flex-col">
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-2xl px-4 py-3 text-base transition-colors",
                    active === id ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild variant="hero" className="mt-2 w-full">
            <a href={PROFILE.cvUrl || "#"} download onClick={handleDownloadCv}>
              <Download /> Download CV
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
