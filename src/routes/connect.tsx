import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { social } from "@/data/portfolio";
import { contactEmail, contactFormEnabled } from "@/lib/contact";
import { ENQUIRY_FORM_NAME, enquirySchema, submitEnquiry } from "@/lib/enquiry";

export const Route = createFileRoute("/connect")({
  validateSearch: (raw: Record<string, unknown>): { reference?: string | undefined } =>
    typeof raw["reference"] === "string" && raw["reference"]
      ? { reference: raw["reference"].slice(0, 180) }
      : {},
  head: () => ({
    meta: [
      { title: "Connect — Sujith Sreedhar" },
      { name: "description", content: "Mixing & mastering enquiries for Sujith Sreedhar." },
    ],
  }),
  component: ConnectPage,
});

const fieldClass =
  "w-full rounded-[2px] bg-transparent border border-border px-4 py-3 text-foreground text-base focus:border-primary transition-colors placeholder:text-muted-foreground disabled:opacity-60";
type Status = "idle" | "sending" | "sent" | "error";

function ConnectPage() {
  const { reference } = Route.useSearch();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const inFlight = useRef(false);
  const feedback = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "sent" || status === "error") feedback.current?.focus();
  }, [status]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inFlight.current) return;
    if (!contactFormEnabled) {
      setError("Online enquiries are not available yet. Please contact the studio directly.");
      setStatus("error");
      return;
    }
    const form = event.currentTarget;
    const parsed = enquirySchema.safeParse(Object.fromEntries(new FormData(form)));
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message || "Please check the enquiry details.");
      setStatus("error");
      return;
    }
    inFlight.current = true;
    setStatus("sending");
    setError("");
    try {
      await submitEnquiry(parsed.data);
      form.reset();
      setStatus("sent");
    } catch (problem) {
      setError(
        problem instanceof Error && problem.name !== "TimeoutError" && problem.name !== "TypeError"
          ? problem.message
          : "Your enquiry could not be confirmed. Your details are still here; please try again or email directly.",
      );
      setStatus("error");
    } finally {
      inFlight.current = false;
    }
  };

  return (
    <div className="pt-44 min-h-dvh flex flex-col bg-background">
      <section className="site-container flex-1 flex flex-col gap-12 pb-24 lg:flex-row lg:gap-24">
        <div className="lg:w-1/2 lg:pt-8">
          <Reveal>
            <p className="eyebrow mb-5">Project enquiries</p>
            <h1 className="mb-8 text-5xl font-normal leading-[1.1] tracking-[-0.055em] md:text-6xl">
              Work with <span className="text-primary">Sujith.</span>
            </h1>
            <div className="space-y-4 text-sm text-muted-foreground">
              {contactEmail && (
                <p>
                  <span className="mr-4">Email</span>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-foreground underline underline-offset-4"
                  >
                    {contactEmail}
                  </a>
                </p>
              )}
              <p>
                <span className="mr-4">Studio</span>
                <a
                  href={social.studio_instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-foreground"
                >
                  2 Bar Q Studios <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </p>
            </div>
          </Reveal>
        </div>
        <div className="lg:w-1/2">
          {status === "sent" ? (
            <div
              ref={feedback}
              tabIndex={-1}
              role="status"
              className="rounded-sm border border-border bg-card p-8 md:p-10"
            >
              <Check size={28} aria-hidden="true" className="mb-5 text-primary" />
              <h2 className="text-3xl tracking-[-0.04em]">Enquiry received</h2>
              <p className="mt-4 text-muted-foreground">
                Thank you. Your project enquiry has been submitted successfully.
              </p>
              <button type="button" onClick={() => setStatus("idle")} className="text-link mt-7">
                Send another enquiry <ArrowUpRight size={15} aria-hidden="true" />
              </button>
            </div>
          ) : (
            <form
              name={ENQUIRY_FORM_NAME}
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="website"
              onSubmit={(event) => void handleSubmit(event)}
              aria-busy={status === "sending"}
              className="flex flex-col gap-6 rounded-[3px] border border-border bg-card p-6 md:p-10"
            >
              <input type="hidden" name="form-name" value={ENQUIRY_FORM_NAME} />
              <input type="hidden" name="reference" value={reference || ""} />
              <div hidden aria-hidden="true">
                <label>
                  Leave this field empty
                  <input name="website" tabIndex={-1} autoComplete="off" />
                </label>
              </div>
              {!contactFormEnabled && (
                <p
                  role="status"
                  className="border-b border-border pb-5 text-sm text-muted-foreground"
                >
                  Online enquiries are not available yet.{" "}
                  {contactEmail ? (
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-foreground underline underline-offset-4"
                    >
                      Email Sujith directly
                    </a>
                  ) : (
                    <a
                      href={social.studio_instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground underline underline-offset-4"
                    >
                      Contact 2 Bar Q Studios
                    </a>
                  )}
                  .
                </p>
              )}
              {reference && (
                <p className="text-sm text-muted-foreground">
                  Reference: <span className="text-foreground">{reference}</span>
                </p>
              )}
              {status === "error" && (
                <div
                  ref={feedback}
                  tabIndex={-1}
                  role="alert"
                  className="border-l-2 border-destructive pl-4 text-sm text-destructive"
                >
                  {error}
                </div>
              )}
              <fieldset
                disabled={!contactFormEnabled || status === "sending"}
                className="flex min-w-0 flex-col gap-6"
              >
                <div className="flex flex-col gap-6 sm:flex-row">
                  <label
                    className="flex min-w-0 flex-1 flex-col gap-2 text-sm text-muted-foreground"
                    htmlFor="name"
                  >
                    Name
                    <input
                      required
                      id="name"
                      name="name"
                      autoComplete="name"
                      minLength={2}
                      maxLength={100}
                      placeholder="Your name"
                      className={fieldClass}
                    />
                  </label>
                  <label
                    className="flex min-w-0 flex-1 flex-col gap-2 text-sm text-muted-foreground"
                    htmlFor="email"
                  >
                    Email address
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      maxLength={254}
                      placeholder="Your email"
                      className={fieldClass}
                    />
                  </label>
                </div>
                <label
                  className="flex flex-col gap-2 text-sm text-muted-foreground"
                  htmlFor="project"
                >
                  Project / film <span className="sr-only">(optional)</span>
                  <input
                    id="project"
                    name="project"
                    maxLength={180}
                    placeholder="Project name (optional)"
                    className={fieldClass}
                  />
                </label>
                <label
                  className="flex flex-col gap-2 text-sm text-muted-foreground"
                  htmlFor="service"
                >
                  Service
                  <select
                    id="service"
                    name="service"
                    defaultValue="both"
                    className={fieldClass + " bg-card"}
                  >
                    <option value="mixing">Mixing</option>
                    <option value="mastering">Mastering</option>
                    <option value="both">Mixing & mastering</option>
                    <option value="other">Other enquiry</option>
                  </select>
                </label>
                <label
                  className="flex flex-col gap-2 text-sm text-muted-foreground"
                  htmlFor="timeline"
                >
                  Timeline <span className="sr-only">(optional)</span>
                  <input
                    id="timeline"
                    name="timeline"
                    maxLength={120}
                    placeholder="Your expected schedule (optional)"
                    className={fieldClass}
                  />
                </label>
                <label
                  className="flex flex-col gap-2 text-sm text-muted-foreground"
                  htmlFor="message"
                >
                  Project details
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={5}
                    minLength={20}
                    maxLength={5000}
                    placeholder="Tell us about your project and what you need."
                    className={fieldClass + " resize-y"}
                  />
                </label>
                <button
                  type="submit"
                  className="button-primary mt-2 w-full disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send enquiry"}
                  {status !== "sending" && <ArrowUpRight size={16} aria-hidden="true" />}
                </button>
              </fieldset>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
