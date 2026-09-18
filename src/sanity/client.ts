import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "cclmy1eg",
  dataset: "production",
  useCdn: false, // Set to false so new movies appear instantly!
  apiVersion: "2024-01-01",
});

// Helper function to get image URLs
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
const builder = createImageUrlBuilder(client);

export function urlFor(source: unknown) {
  return builder.image(source as SanityImageSource);
}
