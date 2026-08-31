import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "cclmy1eg",
  dataset: "production",
  useCdn: false, // Set to false so new movies appear instantly!
  apiVersion: "2024-01-01", 
});

// Helper function to get image URLs
import imageUrlBuilder from "@sanity/image-url";
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
