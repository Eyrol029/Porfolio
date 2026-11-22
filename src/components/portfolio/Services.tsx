import { Cpu, Globe, Smartphone } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const SERVICES = [
  {
    icon: Globe,
    title: "Web Application Development",
    text: "Responsive, full-stack web apps with modern frontends and reliable Spring Boot backends.",
  },
  {
    icon: Smartphone,
    title: "Mobile Application Development",
    text: "Cross-platform apps with Flutter that feel fast, clean and intuitive on any device.",
  },
  {
    icon: Cpu,
    title: "PC Building & Basic Troubleshooting",
    text: "Custom PC assembly, hardware installation, system configuration, and diagnosing hardware or software issues.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Services" title="What I Do" align="center" />
        <div className="grid gap-5 md:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 100} className="glass card-hover group rounded-3xl p-8 text-center">
              <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
