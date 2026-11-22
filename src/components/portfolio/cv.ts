import { toast } from "sonner";
import { PROFILE } from "@/lib/portfolio-data";

export function handleDownloadCv(e: React.MouseEvent) {
  if (!PROFILE.cvUrl) {
    e.preventDefault();
    toast("CV coming soon", { description: `Email ${PROFILE.email} for a copy in the meantime.` });
  }
}
