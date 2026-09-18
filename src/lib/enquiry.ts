import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(254),
  project: z.string().trim().max(180).default(""),
  service: z.enum(["mixing", "mastering", "both", "other"]),
  timeline: z.string().trim().max(120).default(""),
  message: z
    .string()
    .trim()
    .min(20, "Please add a little more detail about your project (at least 20 characters).")
    .max(5000),
  reference: z.string().trim().max(180).default(""),
  website: z.string().max(100).default(""),
});

export type Enquiry = z.infer<typeof enquirySchema>;
export const ENQUIRY_FORM_NAME = "project-enquiry";

export function isContactEmail(value: unknown): value is string {
  return (
    typeof value === "string" &&
    z.string().email().safeParse(value.trim()).success &&
    !/@(?:example\.(?:com|org|net)|localhost)$/i.test(value.trim())
  );
}

export async function submitEnquiry(input: unknown, request: typeof fetch = fetch): Promise<void> {
  const data = enquirySchema.parse(input);
  if (data.website)
    throw new Error("The enquiry could not be sent. Please use the direct email link.");
  const response = await request("/__forms.html", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ "form-name": ENQUIRY_FORM_NAME, ...data }).toString(),
    signal: AbortSignal.timeout(15_000),
  });
  if (!response.ok)
    throw new Error("Your enquiry wasn’t sent. Please try again or use the direct email link.");
  // An unprocessed static registration page is not a delivery acknowledgement.
  const body = await response.text();
  if (body.includes('name="form-registration"'))
    throw new Error(
      "Online enquiries are temporarily unavailable. Please use the direct email link.",
    );
}
