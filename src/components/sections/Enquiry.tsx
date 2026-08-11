import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/Reveal";
import { social } from "@/data/portfolio";

const fields = [
  { id: "name", label: "Name", type: "text", autoComplete: "name" },
  { id: "email", label: "Email", type: "email", autoComplete: "email" },
  { id: "project", label: "Project / Film", type: "text", autoComplete: "off" },
] as const;

export function Enquiry() {
  const [sent, setSent] = useState(false);

  /** Prototype only — wire to the client's real inbox before launch. */
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="hairline scroll-mt-24 py-24 md:py-36">
      <div className="mx-auto grid max-w-[1600px] gap-16 px-6 md:grid-cols-12 md:px-12">
        <Reveal className="md:col-span-5">
          <h2 className="display text-giant">
            Have a project
            <br />
            in mind?
          </h2>
          <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
            For mixing enquiries and professional collaborations.
          </p>
          <p className="eyebrow mt-12">Mixing &amp; Mastering</p>
          <a
            href={`mailto:${social.email}`}
            className="link-underline mt-4 inline-block text-lg text-foreground"
          >
            {social.email}
          </a>
        </Reveal>

        <Reveal delay={120} className="md:col-span-6 md:col-start-7">
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            {fields.map((f) => (
              <div key={f.id}>
                <label htmlFor={f.id} className="eyebrow block">
                  {f.label}
                </label>
                <input
                  id={f.id}
                  name={f.id}
                  type={f.type}
                  autoComplete={f.autoComplete}
                  required={f.id !== "project"}
                  className="mt-3 w-full border-b border-hairline bg-transparent py-4 text-lg text-foreground transition-colors placeholder:text-ash focus:border-ember focus:outline-none"
                />
              </div>
            ))}

            <div>
              <label htmlFor="message" className="eyebrow block">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-3 w-full resize-none border-b border-hairline bg-transparent py-4 text-lg text-foreground transition-colors focus:border-ember focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <button
                type="submit"
                className="link-underline min-h-11 text-[0.7rem] uppercase tracking-[0.24em] text-foreground"
              >
                Send Enquiry →
              </button>
              <p aria-live="polite" className="text-sm text-ember">
                {sent ? "Prototype form — no message was sent." : ""}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}