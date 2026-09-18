import { isContactEmail } from "./enquiry";

const configuredEmail: unknown = import.meta.env["VITE_CONTACT_EMAIL"];
export const contactEmail = isContactEmail(configuredEmail) ? configuredEmail.trim() : undefined;
export const contactFormEnabled =
  Boolean(contactEmail) && import.meta.env["VITE_CONTACT_FORM_ENABLED"] === "true";
