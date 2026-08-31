import { useQuery } from "@tanstack/react-query";
import { client, urlFor } from "./client";
import { selectedWork } from "@/data/portfolio";

export interface Movie {
  _id: string;
  title: string;
  slug: { current: string };
  year: number;
  language: string;
  role: string;
  type: string;
  artwork: any;
  imageUrl?: string;
}

export function useMovies() {
  return useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const query = `*[_type == "project"] | order(year desc) {
        _id,
        title,
        slug,
        year,
        language,
        role,
        type,
        artwork
      }`;
      const movies = await client.fetch<Movie[]>(query);
      
      // Map over the results to add the actual image URL
      const mappedRealMovies = movies.map(movie => ({
        ...movie,
        // We use Sanity's CDN to automatically crop the image to a portrait format (3:4 aspect ratio) 
        // This ensures landscape images don't look broken, and it respects the "Hotspot" feature in the dashboard!
        imageUrl: movie.artwork 
          ? urlFor(movie.artwork).width(600).height(800).fit("crop").url() 
          : "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop",
      }));

      // For showcasing: Merge the real database movies with the dummy ones
      // This way the carousel always looks full even if they only added 1 real movie!
      const dummyMovies = selectedWork.map(dummy => ({
        _id: dummy.slug,
        title: dummy.title,
        slug: { current: dummy.slug },
        year: dummy.year,
        language: "Various",
        role: dummy.role,
        type: "Feature Film",
        artwork: dummy.artwork,
        imageUrl: dummy.artwork
      }));

      // Real ones come first, dummy ones fill the rest
      return [...mappedRealMovies, ...dummyMovies];
    },
  });
}
