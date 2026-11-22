import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-mono text-sm font-bold tracking-[0.2em] text-foreground">
            EYROL JUNIO<span className="text-primary">.</span>
          </p>
          <p className="mt-1.5 text-sm text-muted-foreground">Designed &amp; Built with passion.</p>
        </div>
        <SocialLinks size="sm" />
        <p className="text-xs text-muted-foreground">© 2026 Eyrol Junio. All rights reserved.</p>
      </div>
    </footer>
  );
}
