import { useState } from "react";
import { ArrowUpRight, Check, Github } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PROJECTS, isPlaceholderLink, type Project } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function ProjectLink({ href, label, icon: Icon }: { href: string; label: string; icon: typeof Github }) {
  const placeholder = isPlaceholderLink(href);
  return (
    <Button asChild variant="glass" size="sm" className="h-9 px-4">
      <a
        href={href}
        target={placeholder ? undefined : "_blank"}
        rel="noreferrer"
        onClick={(e) => {
          if (placeholder) {
            e.preventDefault();
            toast(`${label} link coming soon`);
          }
        }}
      >
        <Icon /> {label}
      </a>
    </Button>
  );
}

function TechTags({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <li key={t} className="rounded-full bg-accent px-3 py-1 font-mono text-xs text-accent-foreground">
          {t}
        </li>
      ))}
    </ul>
  );
}

function ProjectCard({ project, reverse, onOpen }: { project: Project; reverse: boolean; onOpen: () => void }) {
  return (
    <Reveal className="glass group grid overflow-hidden rounded-[2rem] transition-colors hover:border-primary/30 lg:grid-cols-2">
      <button
        type="button"
        onClick={onOpen}
        aria-label={`View details for ${project.title}`}
        className={cn("relative overflow-hidden bg-secondary/40 p-5 md:p-8", reverse && "lg:order-2")}
      >
        <div className="orb absolute inset-0 opacity-40" />
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          width={1200}
          height={750}
          className="relative aspect-[16/10] w-full rounded-2xl object-cover ring-1 ring-border-strong transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </button>

      <div className="flex flex-col p-7 md:p-10">
        <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em]">
          <span className="text-primary">{project.index}</span>
          <span className="h-px w-8 bg-border-strong" />
          <span className="text-muted-foreground">{project.category}</span>
        </div>
        <h3 className="text-2xl font-semibold leading-snug tracking-tight text-foreground md:text-[1.7rem]">
          {project.title}
        </h3>
        <p className="mt-4 leading-relaxed text-muted-foreground">{project.description}</p>

        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {project.features.slice(0, 4).map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-secondary-foreground">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {f}
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <TechTags tech={project.tech} />
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-8">
          <Button variant="hero" size="sm" className="h-9 px-5" onClick={onOpen}>
            View More <ArrowUpRight />
          </Button>
          <ProjectLink href={project.githubUrl} label="GitHub" icon={Github} />
        </div>
      </div>
    </Reveal>
  );
}

export function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const current = PROJECTS.find((p) => p.id === openId);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Featured Projects"
          description="A selection of systems, apps and games I've designed and built."
        />
        <div className="flex flex-col gap-8">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} reverse={i % 2 === 1} onOpen={() => setOpenId(p.id)} />
          ))}
        </div>
      </div>

      <Dialog open={!!current} onOpenChange={(o) => !o && setOpenId(null)}>
        {current && (
          <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto rounded-3xl border-border-strong bg-card p-0 sm:rounded-3xl">
            <img src={current.image} alt={current.imageAlt} className="aspect-[16/9] w-full object-cover" />
            <div className="p-7">
              <DialogHeader>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{current.category}</p>
                <DialogTitle className="text-2xl leading-snug">{current.title}</DialogTitle>
                <DialogDescription className="text-base leading-relaxed">{current.description}</DialogDescription>
              </DialogHeader>
              <h4 className="mt-6 text-sm font-semibold text-foreground">Key Features</h4>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {current.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-secondary-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {f}
                  </li>
                ))}
              </ul>
              <h4 className="mt-6 mb-3 text-sm font-semibold text-foreground">Built With</h4>
              <TechTags tech={current.tech} />
              <div className="mt-7 flex flex-wrap gap-2">
                <ProjectLink href={current.githubUrl} label="GitHub" icon={Github} />
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
