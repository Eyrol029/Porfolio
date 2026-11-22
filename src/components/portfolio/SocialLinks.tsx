import { Facebook, Github, Mail } from "lucide-react";
import { toast } from "sonner";
import { PROFILE, isPlaceholderLink } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "GitHub", href: PROFILE.github, icon: Github },
  { label: "Facebook", href: PROFILE.facebook, icon: Facebook },
  { label: "Email", href: `mailto:${PROFILE.email}`, icon: Mail },
];

export function SocialLinks({ className, size = "md" }: { className?: string; size?: "sm" | "md" }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {LINKS.map(({ label, href, icon: Icon }) => {
        const placeholder = isPlaceholderLink(href);
        return (
          <a
            key={label}
            href={href}
            aria-label={label}
            target={placeholder || href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer"
            onClick={(e) => {
              if (placeholder) {
                e.preventDefault();
                toast(`${label} profile link coming soon`);
              }
            }}
            className={cn(
              "glass inline-flex items-center justify-center rounded-full text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary",
              size === "md" ? "h-11 w-11" : "h-9 w-9",
            )}
          >
            <Icon className={size === "md" ? "h-[18px] w-[18px]" : "h-4 w-4"} />
          </a>
        );
      })}
    </div>
  );
}
