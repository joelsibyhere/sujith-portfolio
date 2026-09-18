import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { readCachedArchive } from "@/lib/filmography";
import { moviesQueryOptions, sampleArchive } from "./projects";

export type { Movie } from "@/lib/filmography";

export function useMovies() {
  const queryClient = useQueryClient();
  const query = useQuery({ ...moviesQueryOptions, placeholderData: sampleArchive });

  useEffect(() => {
    const cached = readCachedArchive();
    if (cached && !queryClient.getQueryData(moviesQueryOptions.queryKey)) {
      queryClient.setQueryData(moviesQueryOptions.queryKey, cached, {
        updatedAt: cached.updatedAt ?? 0,
      });
    }
  }, [queryClient]);

  const archive = query.data ?? sampleArchive;
  return {
    ...query,
    data: archive.movies,
    source: query.isError && archive.source === "live" ? ("cached" as const) : archive.source,
    updatedAt: archive.updatedAt,
  };
}
