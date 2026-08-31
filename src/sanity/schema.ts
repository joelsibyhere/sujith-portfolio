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
          "Audio Engineer"
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
