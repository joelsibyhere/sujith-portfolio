import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { projectSchema } from "./schema";

export const projectId = "cclmy1eg";
export const dataset = "production";

export default defineConfig({
  basePath: "/admin",
  projectId,
  dataset,
  title: "Sujith Portfolio Admin",
  
  plugins: [
    structureTool(),
  ],

  schema: {
    types: [projectSchema],
  },
});
