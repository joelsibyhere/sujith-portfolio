import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-Dh4eF1vc.mjs";
import { t as portrait_about_default } from "./portrait-about-B5uS5b9i.mjs";
import { r as bio } from "./router-BKhZy89S.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-ody7687D.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pt-32 md:pt-40 pb-24 md:pb-48 min-h-dvh bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-[1600px] px-6 md:px-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-hairline/50 pb-16 md:pb-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "display text-[5rem] md:text-[9rem] leading-[0.8] tracking-tight text-zinc-800",
					children: [
						"Personal",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: "History"
						})
					]
				})
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 md:mt-32 flex flex-col md:flex-row gap-16 md:gap-32 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 100,
					className: "w-full md:w-5/12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grain relative aspect-[4/5] w-full overflow-hidden p-2 bg-[#0a0a0a]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: portrait_about_default,
							alt: "Portrait of Sujith Sreedhar",
							loading: "eager",
							className: "h-full w-full object-cover grayscale opacity-80"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[0.65rem] uppercase tracking-[0.3em] text-zinc-500 mt-6 border-b border-hairline/50 pb-4",
						children: "CH-03 // Profile & Philosophy"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 200,
					className: "w-full md:w-7/12 flex flex-col justify-center pt-0 md:pt-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "display text-[2.5rem] md:text-[4.5rem] leading-[0.9] text-zinc-200",
						children: [
							"\"",
							bio.philosophy,
							"\""
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 md:mt-24 md:pl-24 max-w-lg space-y-12 text-sm leading-[2.2] text-zinc-400 font-light relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden md:block absolute left-8 top-0 w-px h-full bg-gradient-to-b from-ember/50 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-ember font-mono uppercase tracking-widest text-[0.65rem] mr-4",
								children: "01"
							}), bio.shortBio] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-ember font-mono uppercase tracking-widest text-[0.65rem] mr-4",
								children: "02"
							}), bio.fullBio] })
						]
					})]
				})]
			})]
		})
	});
}
//#endregion
export { AboutPage as component };
