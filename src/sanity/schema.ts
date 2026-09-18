import { defineType, defineField } from "sanity";

export const projectSchema = defineType({
  name: "project",
  title: "Filmography Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Movie Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "year",
      title: "Release Year",
      type: "number",
      validation: (Rule) => Rule.required().min(1950).max(2100),
    }),
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      options: {
        list: ["Malayalam", "Tamil", "Hindi", "Kannada", "Telugu", "English", "Other"],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      options: {
        list: [
          "Mixing / Mastering",
          "Mixing",
          "Mastering",
          "Sound Design",
          "Score Mixer",
          "Audio Engineer",
        ],
      },
      initialValue: "Mixing / Mastering",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "type",
      title: "Project Type",
      type: "string",
      options: {
        list: ["Feature Film", "Short Film", "Web Series", "Album", "Ad Film"],
      },
      initialValue: "Feature Film",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "contributions",
      title: "Specific contributions",
      description:
        "Select only the contributions credited on this project. These replace the general Role label when provided.",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          "Song mixing",
          "Score mixing",
          "Mastering",
          "Recording",
          "Sound design",
          "Re-recording mixing",
          "Immersive mixing",
        ],
        layout: "tags",
      },
      validation: (Rule) => Rule.unique(),
    }),
    defineField({ name: "composer", title: "Composer (optional)", type: "string" }),
    defineField({ name: "director", title: "Director (optional)", type: "string" }),
    defineField({
      name: "featured",
      title: "Feature on homepage",
      type: "boolean",
      initialValue: false,
      description: "Choose the projects that best represent Sujith's work. Up to six are shown.",
    }),
    defineField({
      name: "featuredOrder",
      title: "Homepage order",
      type: "number",
      hidden: ({ document }) => !document?.["featured"],
      validation: (Rule) => Rule.integer().min(1),
    }),
    defineField({
      name: "artwork",
      title: "Movie Poster",
      type: "image",
      options: {
        hotspot: true, // Enables UI for cropping in the dashboard
      },
    }),
    defineField({
      name: "description",
      title: "Description (Optional)",
      type: "text",
    }),
    defineField({
      name: "imdbUrl",
      title: "IMDb URL (Optional)",
      type: "url",
      validation: (Rule) => Rule.uri({ scheme: ["https"] }),
    }),
    defineField({
      name: "listenUrl",
      title: "Listen link (optional)",
      type: "url",
      description:
        "An official track, album or playlist for this project. Leave empty until an approved link is available.",
      validation: (Rule) => Rule.uri({ scheme: ["https"] }),
    }),
    defineField({
      name: "videoUrl",
      title: "Watch link (optional)",
      type: "url",
      validation: (Rule) => Rule.uri({ scheme: ["https"] }),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "year",
      media: "artwork",
    },
  },
});
