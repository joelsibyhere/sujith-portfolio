import { type Archive } from "@/lib/filmography";

export function ArchiveNotice({
  source,
  isFetching,
  onRetry,
}: {
  source: Archive["source"];
  isFetching: boolean;
  onRetry: () => void;
}) {
  if (source === "live") return null;
  const message =
    source === "cached"
      ? isFetching
        ? "Showing saved credits while the latest list loads."
        : "Showing saved credits. The latest list is temporarily unavailable."
      : isFetching
        ? "Showing selected credits while the archive loads."
        : "The full archive is temporarily unavailable. A selection of credits is shown below.";
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-l-2 border-primary/30 pl-4 text-sm text-muted-foreground">
      <p role="status">{message}</p>
      {!isFetching && (
        <button
          type="button"
          onClick={onRetry}
          className="min-h-11 text-foreground underline underline-offset-4"
        >
          Try again
        </button>
      )}
    </div>
  );
}
