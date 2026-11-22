import { Code2, GraduationCap, Lightbulb, MapPin } from "lucide-react";
import profile from "@/assets/eyrol-profile.webp.asset.json";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const HIGHLIGHTS = [
  { icon: Code2, title: "Full-Stack Development", text: "From database schema to polished UI — I enjoy owning the whole stack." },
  { icon: Lightbulb, title: "Problem Solving", text: "Breaking real-world problems into clear, practical software solutions." },
  { icon: GraduationCap, title: "Continuous Learning", text: "Always exploring new frameworks, tools and better ways to build." },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="About" title="A Little About Me" />

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal className="glass flex items-center gap-5 self-start rounded-3xl p-6">
            <img
              src={profile.url}
              alt="Eyrol Junio"
              loading="lazy"
              className="h-20 w-20 shrink-0 rounded-2xl bg-portrait object-cover object-top ring-1 ring-primary/40"
            />
            <div>
              <p className="text-lg font-semibold text-foreground">Eyrol Junio</p>
              <p className="text-sm text-muted-foreground">4th Year BSIT Student</p>
              <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-primary">
                <MapPin className="h-3.5 w-3.5" /> MSU at Naawan
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-xl leading-relaxed text-secondary-foreground md:text-2xl md:leading-relaxed">
              I'm a 4th Year BSIT student at Mindanao State University at Naawan with a passion for software
              development. I enjoy creating practical applications that solve real-world problems.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              My experience includes full-stack web development, mobile application development, database management,
              PC building, and basic troubleshooting.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {HIGHLIGHTS.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 100} className="glass card-hover rounded-3xl p-7">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
