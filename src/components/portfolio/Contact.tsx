import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Facebook, Github, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { buildMailto, contactSchema, type ContactInput } from "@/lib/contact";
import { PROFILE, isPlaceholderLink } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Errors = Partial<Record<keyof ContactInput, string | undefined>>;
const EMPTY: ContactInput = { name: "", email: "", subject: "", message: "" };

const CHANNELS = [
  { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { icon: Github, label: "GitHub", value: "github.com/Eyrol029", href: PROFILE.github },
  { icon: Facebook, label: "Facebook", value: "facebook.com/eyrolclayford.junio", href: PROFILE.facebook },
];

const fieldClass =
  "h-12 rounded-xl border-border bg-secondary/40 px-4 text-[0.95rem] focus-visible:border-primary/50 focus-visible:ring-2 focus-visible:ring-primary/30";

export function Contact() {
  const [values, setValues] = useState<ContactInput>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "opened" | "error">("idle");

  const update = (key: keyof ContactInput, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      parsed.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof ContactInput;
        next[key] ??= issue.message;
      });
      setErrors(next);
      setStatus("error");
      return;
    }
    setErrors({});
    window.location.href = buildMailto(PROFILE.email, parsed.data);
    setStatus("opened");
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="orb pointer-events-none absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 opacity-40" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-6 bg-primary/60" /> Contact
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Let's Build Something <span className="text-gradient">Together.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            I'm always interested in learning, collaborating, and exploring new opportunities. Feel free to reach out!
          </p>

          <ul className="mt-10 flex flex-col gap-3">
            {CHANNELS.map(({ icon: Icon, label, value, href }) => {
              const placeholder = isPlaceholderLink(href);
              return (
                <li key={label}>
                  <a
                    href={href}
                    target={placeholder || href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer"
                    onClick={(e) => {
                      if (placeholder) {
                        e.preventDefault();
                        toast(`${label} profile link coming soon`);
                      }
                    }}
                    className="glass card-hover flex items-center gap-4 rounded-2xl p-4"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs text-muted-foreground">{label}</span>
                      <span className="block text-sm font-medium text-foreground">{value}</span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={onSubmit} noValidate className="glass rounded-[2rem] p-6 md:p-9" aria-label="Contact form">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" error={errors.name} htmlFor="c-name">
                <Input id="c-name" autoComplete="name" placeholder="Your name" value={values.name}
                  onChange={(e) => update("name", e.target.value)} aria-invalid={!!errors.name}
                  className={cn(fieldClass, errors.name && "border-destructive/60")} />
              </Field>
              <Field label="Email" error={errors.email} htmlFor="c-email">
                <Input id="c-email" type="email" autoComplete="email" placeholder="you@example.com" value={values.email}
                  onChange={(e) => update("email", e.target.value)} aria-invalid={!!errors.email}
                  className={cn(fieldClass, errors.email && "border-destructive/60")} />
              </Field>
            </div>
            <Field label="Subject" error={errors.subject} htmlFor="c-subject" className="mt-5">
              <Input id="c-subject" placeholder="What's this about?" value={values.subject}
                onChange={(e) => update("subject", e.target.value)} aria-invalid={!!errors.subject}
                className={cn(fieldClass, errors.subject && "border-destructive/60")} />
            </Field>
            <Field label="Message" error={errors.message} htmlFor="c-message" className="mt-5">
              <Textarea id="c-message" rows={6} placeholder="Tell me about your idea or opportunity..." value={values.message}
                onChange={(e) => update("message", e.target.value)} aria-invalid={!!errors.message}
                className={cn(fieldClass, "h-auto min-h-36 py-3", errors.message && "border-destructive/60")} />
            </Field>

            {status === "opened" && (
              <div role="status" className="mt-5 flex items-start gap-3 rounded-xl border border-success/30 bg-success/10 p-4 text-sm text-foreground">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                <p>
                  Your email app should now be open with your message ready. Press send there to reach me. If nothing
                  opened, email me directly at <a href={`mailto:${PROFILE.email}`} className="text-primary underline-offset-4 hover:underline">{PROFILE.email}</a>.
                </p>
              </div>
            )}
            {status === "error" && (
              <div role="alert" className="mt-5 flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-sm text-foreground">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                <p>Please fix the highlighted fields and try again.</p>
              </div>
            )}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-muted-foreground">Opens your email app — nothing is sent until you press send.</p>
              <Button type="submit" variant="hero" size="xl">
                <Send /> Send Message
              </Button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, error, htmlFor, className, children }: {
  label: string; error?: string | undefined; htmlFor: string; className?: string; children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-secondary-foreground">{label}</label>
      {children}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
