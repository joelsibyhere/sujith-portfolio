import { createFileRoute } from "@tanstack/react-router";
import { Studio } from "sanity";
import config from "@/sanity/config";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard | Sujith Sreedhar" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  return (
    <div className="h-screen w-screen overflow-hidden fixed top-0 left-0 z-50">
      <Studio config={config} />
    </div>
  );
}
