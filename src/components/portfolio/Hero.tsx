import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import profile from "@/assets/eyrol-profile.webp.asset.json";
import { SocialLinks } from "./SocialLinks";

const BADGES = [
  { label: "React", className: "left-[-8%] top-[14%]", delay: "0s" },
  { label: "Java", className: "right-[-10%] top-[30%]", delay: "1.2s" },
  { label: "Flutter", className: "left-[-12%] bottom-[22%]", delay: "2.1s" },
  { label: "Unity", className: "right-[-6%] bottom-[8%]", delay: "0.6s" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="orb pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 opacity-60" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-xs font-medium text-secondary-foreground">
            <span className="animate-pulse-dot h-2 w-2 rounded-full bg-success" />
            Available for Opportunities
          </span>

          <h1 className="mt-7 text-5xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-gradient">Eyrol Junio.</span>
          </h1>
          <p className="mt-5 font-mono text-sm uppercase tracking-[0.22em] text-primary sm:text-base">
            Aspiring Full-Stack Developer
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I build modern web applications, mobile solutions, and interactive experiences through clean code and
            creative problem-solving.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild variant="hero" size="xl">
              <a href="#projects">
                Explore My Work <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href="#contact">
                <MessageCircle /> Get In Touch
              </a>
            </Button>
          </div>

          <SocialLinks className="mt-10" />
        </div>

        <div className="relative mx-auto w-full max-w-[380px] animate-in fade-in zoom-in-95 duration-1000 lg:max-w-[420px]">
          <div className="orb absolute inset-[-12%] opacity-90" />
          <div className="animate-float relative">
            <div className="relative rounded-[2rem] bg-gradient-primary p-[1.5px] glow">
              <div className="overflow-hidden rounded-[calc(2rem-1.5px)] bg-portrait">
                <img
                  src={profile.url}
                  alt="Eyrol Junio in a black formal suit and tie"
                  width={1002}
                  height={1024}
                  fetchPriority="high"
                  className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
            </div>

            {BADGES.map((b) => (
              <span
                key={b.label}
                className={`animate-float-slow absolute z-10 hidden rounded-full border border-border-strong bg-card/90 shadow-[var(--shadow-card)] backdrop-blur-md px-4 py-2 font-mono text-xs font-medium text-foreground sm:inline-flex sm:items-center sm:gap-2 ${b.className}`}
                style={{ animationDelay: b.delay }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {b.label}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2 sm:hidden">
            {BADGES.map((b) => (
              <span key={b.label} className="glass rounded-full px-3 py-1 font-mono text-xs text-secondary-foreground">
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
