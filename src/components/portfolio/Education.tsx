import { BookOpen, GraduationCap, School } from "lucide-react";
import { EDUCATION_ITEMS } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const ICONS = {
  graduation: GraduationCap,
  school: School,
  book: BookOpen,
};

export function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Education" title="Academic Journey" />
        <div className="relative ml-3 space-y-8 border-l border-border-strong pl-8 md:ml-6 md:space-y-10 md:pl-12">
          {EDUCATION_ITEMS.map((item, idx) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal key={item.institution} delay={idx * 100} className="relative">
                <span
                  className={cn(
                    "absolute -left-[calc(2rem+9px)] top-8 h-[18px] w-[18px] rounded-full border-4 border-background transition-colors md:-left-[calc(3rem+9px)]",
                    item.current ? "bg-primary glow" : "bg-muted-foreground/60"
                  )}
                />
                <div className="glass card-hover rounded-3xl p-7 md:p-9">
                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div className="flex gap-5">
                      <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent text-accent-foreground sm:inline-flex">
                        <Icon className="h-7 w-7" />
                      </span>
                      <div>
                        <span className="font-mono text-xs uppercase tracking-wider text-primary">{item.level}</span>
                        <h3 className="text-xl font-semibold text-foreground md:text-2xl">
                          {item.degree}
                        </h3>
                        <p className="mt-1 text-muted-foreground">{item.institution}</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-2 self-start rounded-full bg-accent px-4 py-1.5 font-mono text-xs text-accent-foreground">
                      {item.current && <span className="animate-pulse-dot h-2 w-2 rounded-full bg-success" />}
                      {item.status}
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
