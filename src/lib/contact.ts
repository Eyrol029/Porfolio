import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name (at least 2 characters).").max(80, "Name is too long."),
  email: z.string().trim().email("Please enter a valid email address.").max(255, "Email is too long."),
  subject: z.string().trim().min(3, "Subject should be at least 3 characters.").max(120, "Subject is too long."),
  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters.")
    .max(2000, "Message must be under 2000 characters."),
});

export type ContactInput = z.infer<typeof contactSchema>;

/** Builds a mailto: link addressed to `to`, with the visitor's details in the body. */
export function buildMailto(to: string, input: ContactInput): string {
  const body = `${input.message}\n\n— ${input.name} (${input.email})`;
  const params = new URLSearchParams({ subject: input.subject, body });
  // URLSearchParams encodes spaces as "+", which some mail apps show literally.
  return `mailto:${to}?${params.toString().replace(/\+/g, "%20")}`;
}
