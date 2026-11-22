import { describe, expect, it } from "vitest";
import { buildMailto, contactSchema } from "./contact";
import { PROFILE } from "./portfolio-data";

const valid = { name: "Ana Cruz", email: "ana@example.com", subject: "Hello there", message: "I'd like to collaborate on a project." };

describe("contact form", () => {
  it("sends messages to Eyrol's email address", () => {
    expect(PROFILE.email).toBe("engkoyjunio@gmail.com");
    expect(buildMailto(PROFILE.email, valid).startsWith("mailto:engkoyjunio@gmail.com?")).toBe(true);
  });

  it("puts subject and sender into the email", () => {
    const url = new URL(buildMailto(PROFILE.email, valid));
    expect(url.searchParams.get("subject")).toBe("Hello there");
    expect(url.searchParams.get("body")).toContain("Ana Cruz (ana@example.com)");
  });

  it("rejects an invalid email", () => {
    expect(contactSchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
  });

  it("rejects a too-short message", () => {
    expect(contactSchema.safeParse({ ...valid, message: "hi" }).success).toBe(false);
  });
});
