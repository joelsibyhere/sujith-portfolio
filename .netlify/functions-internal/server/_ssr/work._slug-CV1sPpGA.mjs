import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-Dh4eF1vc.mjs";
import { n as Search } from "../_libs/lucide-react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Route, o as selectedWork } from "./router-BKhZy89S.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._slug-CV1sPpGA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProjectDetail() {
	const { project } = Route.useLoaderData();
	const [search, setSearch] = (0, import_react.useState)("");
	const filteredWork = selectedWork.filter((p) => p.slug !== project.slug && p.title.toLowerCase().includes(search.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "pt-32 md:pt-40 min-h-dvh flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "mx-auto max-w-[1600px] w-full px-6 md:px-12 flex flex-col items-center text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/filmography",
					className: "link-underline text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors",
					children: "← Archive"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 flex flex-col items-center gap-6 pb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display text-[4rem] md:text-giant leading-[0.9]",
						children: project.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: project.year }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "—" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: project.role })
						]
					})]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 100,
				className: "mx-auto w-full max-w-[1600px] px-6 md:px-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grain relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: project.artwork,
						alt: `Cinematic still representing ${project.title}`,
						className: "h-full w-full object-cover",
						loading: "eager"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-[800px] w-full px-6 py-12 flex justify-center text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 160,
					className: "flex flex-wrap justify-center gap-12",
					children: [
						project.audioUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: project.audioUrl,
							target: "_blank",
							rel: "noreferrer",
							className: "link-underline text-[0.68rem] uppercase tracking-[0.24em] text-foreground",
							children: "Listen →"
						}),
						project.videoUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: project.videoUrl,
							target: "_blank",
							rel: "noreferrer",
							className: "link-underline text-[0.68rem] uppercase tracking-[0.24em] text-foreground",
							children: "Watch →"
						}),
						project.externalUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: project.externalUrl,
							target: "_blank",
							rel: "noreferrer",
							className: "link-underline text-[0.68rem] uppercase tracking-[0.24em] text-foreground",
							children: project.externalUrl.includes("imdb.com") ? "View on IMDb →" : "External Link →"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-hairline bg-black py-16 md:py-24 overflow-hidden mt-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1600px] px-6 md:px-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display text-3xl md:text-5xl",
							children: "Explore More Work"
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 100,
							className: "w-full md:w-auto md:min-w-[300px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									placeholder: "Search related films...",
									value: search,
									onChange: (e) => setSearch(e.target.value),
									className: "w-full bg-zinc-900/50 border border-white/10 text-foreground px-12 py-3 rounded-full text-sm font-mono tracking-wide focus:outline-none focus:border-ember focus:ring-1 focus:ring-ember transition-all placeholder:text-zinc-600"
								})]
							})
						})]
					}), filteredWork.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-20 text-center font-mono text-zinc-500 uppercase tracking-widest text-sm border-t border-white/5",
						children: [
							"No projects found matching \"",
							search,
							"\""
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex overflow-x-auto gap-6 md:gap-8 hide-scrollbar pb-8 pt-4",
						children: filteredWork.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-[65%] md:w-[20%] shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * 50,
								className: "group h-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/work/$slug",
									params: { slug: p.slug },
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grain relative aspect-[2/3] overflow-hidden border border-hairline bg-card/20 rounded-lg",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: p.artwork,
											alt: p.title,
											loading: "lazy",
											className: "h-full w-full object-cover opacity-80 transition-[transform,opacity] duration-700 group-hover:scale-105 group-hover:opacity-100"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex flex-col gap-1 px-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "display text-lg transition-colors duration-300 group-hover:text-ember whitespace-nowrap overflow-hidden text-ellipsis",
											children: p.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[0.6rem] uppercase tracking-[0.15em] text-muted-foreground",
											children: p.year
										})]
									})]
								})
							})
						}, p.slug))
					})]
				})
			})
		]
	});
}
//#endregion
export { ProjectDetail as component };
