import { Code2, Database, LayoutTemplate, Server, Wrench } from "lucide-react";
import { SKILL_GROUPS, type SkillGroup } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const ICONS: Record<SkillGroup["icon"], typeof Code2> = {
  code: Code2,
  layout: LayoutTemplate,
  server: Server,
  database: Database,
  wrench: Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="orb pointer-events-none absolute right-0 top-1/3 h-96 w-96 opacity-30" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Skills"
          description="The languages, frameworks and tools I use to turn ideas into working software."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {SKILL_GROUPS.map((group, i) => {
            const Icon = ICONS[group.icon];
            return (
              <Reveal
                key={group.title}
                delay={i * 80}
                className={cn("glass card-hover rounded-3xl p-7", i < 2 ? "lg:col-span-3" : "lg:col-span-2")}
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-semibold text-foreground">{group.title}</h3>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(group.items.length).padStart(2, "0")}
                  </span>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 text-sm text-secondary-foreground transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
