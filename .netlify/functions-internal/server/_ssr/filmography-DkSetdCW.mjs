import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-Dh4eF1vc.mjs";
import { n as Search } from "../_libs/lucide-react.mjs";
import { a as filmography } from "./router-BKhZy89S.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/filmography-DkSetdCW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FilmographyPage() {
	const [search, setSearch] = (0, import_react.useState)("");
	const [yearFilter, setYearFilter] = (0, import_react.useState)("");
	const [langFilter, setLangFilter] = (0, import_react.useState)("");
	const [roleFilter, setRoleFilter] = (0, import_react.useState)("");
	const [typeFilter, setTypeFilter] = (0, import_react.useState)("");
	const uniqueYears = (0, import_react.useMemo)(() => Array.from(new Set(filmography.map((f) => f.year))).sort((a, b) => b - a), []);
	const uniqueLangs = (0, import_react.useMemo)(() => Array.from(new Set(filmography.map((f) => f.language))).sort(), []);
	const uniqueRoles = (0, import_react.useMemo)(() => Array.from(new Set(filmography.map((f) => f.role))).sort(), []);
	const uniqueTypes = (0, import_react.useMemo)(() => Array.from(new Set(filmography.map((f) => f.type))).sort(), []);
	const filteredFilms = (0, import_react.useMemo)(() => {
		return filmography.filter((f) => {
			const matchSearch = search ? f.title.toLowerCase().includes(search.toLowerCase()) : true;
			const matchYear = yearFilter ? f.year.toString() === yearFilter : true;
			const matchLang = langFilter ? f.language === langFilter : true;
			const matchRole = roleFilter ? f.role === roleFilter : true;
			const matchType = typeFilter ? f.type === typeFilter : true;
			return matchSearch && matchYear && matchLang && matchRole && matchType;
		});
	}, [
		search,
		yearFilter,
		langFilter,
		roleFilter,
		typeFilter
	]);
	const grouped = (0, import_react.useMemo)(() => {
		return filteredFilms.reduce((acc, film) => {
			if (!acc[film.year]) acc[film.year] = [];
			acc[film.year].push(film);
			return acc;
		}, {});
	}, [filteredFilms]);
	const years = Object.keys(grouped).map(Number).sort((a, b) => b - a);
	const resetFilters = () => {
		setSearch("");
		setYearFilter("");
		setLangFilter("");
		setRoleFilter("");
		setTypeFilter("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-32 md:pt-40 min-h-dvh flex flex-col bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto w-full max-w-[1600px] px-6 md:px-24 mb-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row md:items-end justify-between pb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display text-[4rem] leading-[0.8] md:text-[8rem]",
					children: "Filmography"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[0.65rem] uppercase tracking-[0.4em] text-ember mt-8 md:mt-0 md:pb-4 md:border-l md:border-ember/30 md:pl-6",
					children: "Complete Archive // 600+ Credits"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4 mt-8 border-t border-hairline pt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						placeholder: "Search for a film, song or project...",
						value: search,
						onChange: (e) => setSearch(e.target.value),
						className: "w-full bg-transparent border border-hairline/50 text-foreground px-12 py-4 text-sm font-mono tracking-wide focus:outline-none focus:border-ember transition-colors placeholder:text-zinc-600"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row items-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: yearFilter,
							onChange: (e) => setYearFilter(e.target.value),
							className: "w-full md:w-auto flex-1 bg-transparent border border-hairline/50 text-zinc-400 px-4 py-3 text-xs font-mono tracking-widest uppercase focus:outline-none focus:border-ember appearance-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "YEAR"
							}), uniqueYears.map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: y.toString(),
								children: y
							}, y))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: langFilter,
							onChange: (e) => setLangFilter(e.target.value),
							className: "w-full md:w-auto flex-1 bg-transparent border border-hairline/50 text-zinc-400 px-4 py-3 text-xs font-mono tracking-widest uppercase focus:outline-none focus:border-ember appearance-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "LANGUAGE"
							}), uniqueLangs.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: l,
								children: l
							}, l))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: roleFilter,
							onChange: (e) => setRoleFilter(e.target.value),
							className: "w-full md:w-auto flex-1 bg-transparent border border-hairline/50 text-zinc-400 px-4 py-3 text-xs font-mono tracking-widest uppercase focus:outline-none focus:border-ember appearance-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "ROLE"
							}), uniqueRoles.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: r,
								children: r
							}, r))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: typeFilter,
							onChange: (e) => setTypeFilter(e.target.value),
							className: "w-full md:w-auto flex-1 bg-transparent border border-hairline/50 text-zinc-400 px-4 py-3 text-xs font-mono tracking-widest uppercase focus:outline-none focus:border-ember appearance-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "TYPE"
							}), uniqueTypes.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: t,
								children: t
							}, t))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: resetFilters,
							className: "w-full md:w-auto text-xs font-mono font-bold tracking-widest text-ember uppercase py-3 px-6 hover:text-ember/80 transition-colors",
							children: "RESET"
						})
					]
				})]
			})] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto w-full max-w-[1600px] px-6 md:px-24 flex-1 pb-32",
			children: years.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "py-20 text-center font-mono text-zinc-500 uppercase tracking-widest text-sm",
				children: "No projects found matching your criteria."
			}) : years.map((year, yearIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-24 md:mb-40 flex flex-col md:flex-row gap-8 md:gap-32",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:w-1/4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 100,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display text-[5rem] md:text-[8rem] leading-[0.8] text-zinc-800 sticky top-32",
							children: year
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:w-3/4 flex flex-col",
					children: grouped[year].map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: Math.min(i * 10, 150),
						className: "group flex flex-col md:flex-row md:items-center justify-between border-b border-hairline/50 py-8 md:py-10 transition-colors hover:border-ember",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "display text-[2rem] md:text-[3.5rem] leading-[0.9] text-zinc-200 transition-colors duration-500 group-hover:text-ember",
								children: f.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-[0.65rem] uppercase tracking-[0.2em] text-zinc-500 mt-4 md:mt-2",
								children: [
									f.language,
									" // ",
									f.type
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[0.65rem] uppercase tracking-[0.3em] text-ember/80 mt-6 md:mt-0 md:text-right",
							children: f.role
						})]
					}, `${f.title}-${i}`))
				})]
			}, year))
		})]
	});
}
//#endregion
export { FilmographyPage as component };
