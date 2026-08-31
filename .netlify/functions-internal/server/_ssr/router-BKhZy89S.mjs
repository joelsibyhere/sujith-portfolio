import { i as __toESM } from "../_runtime.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { M as notFound, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useLocation, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portfolio-DFBt2uwo.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var nayattu_default = "/assets/nayattu-Yj1r6cRQ.jpg";
var thallumaala_default = "/assets/thallumaala-DdU7K8Lo.jpg";
var tagaru_default = "/assets/tagaru-DCclrK66.jpg";
var salaga_default = "/assets/salaga-CyLYqpGl.jpg";
var popcorn_monkey_tiger_default = "/assets/popcorn-monkey-tiger-B1-t6UYB.jpg";
var mysore_diaries_default = "/assets/mysore-diaries-DWT-_DJq.jpg";
var ae_dil_hai_mushkil_default = "/assets/ae-dil-hai-mushkil-CoqdCNsp.jpg";
var vikram_vedha_default = "/assets/vikram-vedha-BBn1OQGX.jpg";
/**
* PHASE 5 — DATA ARCHITECTURE
* -----------------------
* Reusable data structures designed to be easily replaced
* by the client's real CMS or database data.
* No fabricated data is used. Placeholders are clear.
*/
var social = {
	instagram: "https://www.instagram.com/sujithsreedhar?igsh=MXY4azE2NXZnbWNsYg%3D%3D&utm_source=qr",
	studio_instagram: "https://www.instagram.com/2bqstudios?igsh=YjVoaWpuNHk3MTNh",
	youtube: "https://www.youtube.com/shorts/qI5OJRYC-Qc",
	studio_youtube: "https://www.youtube.com/@2barqstudios930",
	spotify: "https://open.spotify.com/playlist/4G9wC9KC30GurP2Ndn9jyS?si=1sPz8-lNQT2Es58lPSBUAw&utm_source=copy-link",
	email: "hello@example.com"
};
var bio = {
	shortBio: "Sujith Sreedhar is a Music Engineer specializing in Mixing and Mastering.",
	fullBio: "[Placeholder: Full biography to be supplied by client. Do not invent history.]",
	portrait: "",
	philosophy: "[Placeholder: Sound philosophy to be supplied by client.]"
};
var selectedWork = [
	{
		slug: "ae-dil-hai-mushkil",
		title: "Ae Dil Hai Mushkil",
		year: 2016,
		role: "Mixing / Mastering",
		artwork: ae_dil_hai_mushkil_default,
		externalUrl: "https://www.imdb.com/title/tt4902146/"
	},
	{
		slug: "vikram-vedha",
		title: "Vikram Vedha",
		year: 2017,
		role: "Mixing / Mastering",
		artwork: vikram_vedha_default,
		externalUrl: "https://www.imdb.com/title/tt6148156/"
	},
	{
		slug: "nayattu",
		title: "Nayattu",
		year: 2021,
		role: "Mixing / Mastering",
		artwork: nayattu_default,
		externalUrl: "https://www.imdb.com/title/tt11604676/"
	},
	{
		slug: "thallumaala",
		title: "Thallumaala",
		year: 2022,
		role: "Mixing / Mastering",
		artwork: thallumaala_default,
		externalUrl: "https://www.imdb.com/title/tt11075264/"
	},
	{
		slug: "tagaru",
		title: "Tagaru",
		year: 2018,
		role: "Mixing / Mastering",
		artwork: tagaru_default,
		externalUrl: "https://www.imdb.com/title/tt7938336/"
	},
	{
		slug: "salaga",
		title: "Salaga",
		year: 2021,
		role: "Mixing / Mastering",
		artwork: salaga_default
	},
	{
		slug: "popcorn-monkey-tiger",
		title: "Popcorn Monkey Tiger",
		year: 2019,
		role: "Mixing / Mastering",
		artwork: popcorn_monkey_tiger_default
	},
	{
		slug: "mysore-diaries",
		title: "Mysore Diaries",
		year: 2022,
		role: "Mixing / Mastering",
		artwork: mysore_diaries_default
	}
];
function getProject(slug) {
	return selectedWork.find((p) => p.slug === slug);
}
/** Small representative sample. The full 600+ archive connects here later. */
var filmography = [
	{
		title: "Ae Dil Hai Mushkil",
		year: 2016,
		language: "Hindi",
		role: "Mixing / Mastering",
		type: "Feature Film"
	},
	{
		title: "Vikram Vedha",
		year: 2017,
		language: "Tamil",
		role: "Mixing / Mastering",
		type: "Feature Film"
	},
	{
		title: "Thallumaala",
		year: 2022,
		language: "Malayalam",
		role: "Mixing / Mastering",
		type: "Feature Film"
	},
	{
		title: "Mysore Diaries",
		year: 2022,
		language: "Kannada",
		role: "Mixing / Mastering",
		type: "Feature Film"
	},
	{
		title: "Nayattu",
		year: 2021,
		language: "Malayalam",
		role: "Mixing / Mastering",
		type: "Feature Film"
	},
	{
		title: "Salaga",
		year: 2021,
		language: "Kannada",
		role: "Mixing / Mastering",
		type: "Feature Film"
	},
	{
		title: "Kotigobba 3",
		year: 2021,
		language: "Kannada",
		role: "Mixing",
		type: "Feature Film"
	},
	{
		title: "Popcorn Monkey Tiger",
		year: 2019,
		language: "Kannada",
		role: "Mixing / Mastering",
		type: "Feature Film"
	},
	{
		title: "Kavaludaari",
		year: 2019,
		language: "Kannada",
		role: "Mastering",
		type: "Feature Film"
	},
	{
		title: "Tagaru",
		year: 2018,
		language: "Kannada",
		role: "Mixing / Mastering",
		type: "Feature Film"
	}
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-BKhZy89S.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var styles_default = "/assets/styles-CKOi8sP_.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var links = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "Filmography",
		to: "/filmography"
	},
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Contact",
		to: "/connect"
	}
];
function SiteNav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-700", scrolled ? "border-b border-hairline bg-background/85 backdrop-blur-md" : "border-b border-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "text-[0.7rem] font-medium uppercase tracking-[0.3em] text-foreground",
				children: "Sujith Sreedhar"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Primary",
				className: "hidden md:flex items-center gap-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex items-center gap-10",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						activeProps: { className: "text-ember border-b border-ember pb-1" },
						inactiveProps: { className: "text-muted-foreground hover:text-foreground" },
						className: "text-[0.65rem] uppercase tracking-[0.22em] transition-colors duration-500",
						children: l.label
					}) }, l.label))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/connect",
					className: "group inline-flex items-center gap-2 border border-ember px-6 py-2.5 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-ember transition-colors hover:bg-ember hover:text-background",
					children: ["Work with Sujith", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "transition-transform group-hover:translate-x-0.5",
						children: "→"
					})]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			"aria-label": "Mobile",
			className: "md:hidden flex overflow-x-auto gap-8 px-6 pb-4 hide-scrollbar border-t border-hairline/30 pt-4",
			children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: l.to,
				activeProps: { className: "text-ember" },
				inactiveProps: { className: "text-muted-foreground" },
				className: "whitespace-nowrap text-[0.65rem] font-medium uppercase tracking-[0.2em] transition-colors",
				children: l.label
			}, l.label))
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "hairline",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[1600px] flex-col gap-12 px-6 py-16 md:flex-row md:items-end md:justify-between md:px-12 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "display text-5xl md:text-7xl",
				children: "Sujith Sreedhar"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mt-5",
				children: "Mixing / Mastering"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4 md:items-end",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "flex items-center gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: social.instagram,
								target: "_blank",
								rel: "noreferrer",
								className: "text-muted-foreground transition-colors hover:text-foreground flex items-center justify-center p-2 rounded-full hover:bg-white/5",
								"aria-label": "Instagram",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									viewBox: "0 0 24 24",
									fill: "currentColor",
									className: "w-5 h-5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" })
								})
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: social.youtube,
								target: "_blank",
								rel: "noreferrer",
								className: "text-muted-foreground transition-colors hover:text-foreground flex items-center justify-center p-2 rounded-full hover:bg-white/5",
								"aria-label": "YouTube",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									viewBox: "0 0 24 24",
									fill: "currentColor",
									className: "w-6 h-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" })
								})
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: social.spotify,
								target: "_blank",
								rel: "noreferrer",
								className: "text-muted-foreground transition-colors hover:text-foreground flex items-center justify-center p-2 rounded-full hover:bg-white/5",
								"aria-label": "Spotify",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									viewBox: "0 0 24 24",
									fill: "currentColor",
									className: "w-5 h-5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.24 1.021zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.54-1.02.72-1.56.3z" })
								})
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: social.studio_instagram,
								target: "_blank",
								rel: "noreferrer",
								className: "link-underline text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground ml-4",
								children: "2BQ Studios"
							}) })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${social.email}`,
						className: "link-underline text-sm text-ash transition-colors hover:text-foreground",
						children: social.email
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-[0.65rem] uppercase tracking-[0.2em] text-ash",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Sujith Sreedhar"
						]
					})
				]
			})]
		})
	});
}
var AudioContext = (0, import_react.createContext)(void 0);
function AudioProvider({ children }) {
	const [currentTrack, setCurrentTrack] = (0, import_react.useState)(null);
	const [isPlaying, setIsPlaying] = (0, import_react.useState)(false);
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [duration, setDuration] = (0, import_react.useState)(0);
	const [currentTime, setCurrentTime] = (0, import_react.useState)(0);
	const audioRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const audio = new Audio();
		audioRef.current = audio;
		const updateTime = () => {
			setCurrentTime(audio.currentTime);
			setProgress(audio.currentTime / (audio.duration || 1));
		};
		const updateDuration = () => setDuration(audio.duration);
		const handleEnded = () => setIsPlaying(false);
		audio.addEventListener("timeupdate", updateTime);
		audio.addEventListener("loadedmetadata", updateDuration);
		audio.addEventListener("ended", handleEnded);
		return () => {
			audio.removeEventListener("timeupdate", updateTime);
			audio.removeEventListener("loadedmetadata", updateDuration);
			audio.removeEventListener("ended", handleEnded);
			audio.pause();
			audio.src = "";
		};
	}, []);
	const play = (track) => {
		if (!audioRef.current) return;
		if (currentTrack?.id === track.id) {
			if (!isPlaying) {
				audioRef.current.play();
				setIsPlaying(true);
			}
			return;
		}
		setCurrentTrack(track);
		audioRef.current.src = track.url;
		audioRef.current.play();
		setIsPlaying(true);
	};
	const togglePlayPause = () => {
		if (!audioRef.current || !currentTrack) return;
		if (isPlaying) audioRef.current.pause();
		else audioRef.current.play();
		setIsPlaying(!isPlaying);
	};
	const seek = (newProgress) => {
		if (!audioRef.current) return;
		const time = newProgress * duration;
		audioRef.current.currentTime = time;
		setProgress(newProgress);
		setCurrentTime(time);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AudioContext.Provider, {
		value: {
			currentTrack,
			isPlaying,
			progress,
			duration,
			currentTime,
			play,
			togglePlayPause,
			seek
		},
		children
	});
}
function useAudio() {
	const context = (0, import_react.useContext)(AudioContext);
	if (context === void 0) throw new Error("useAudio must be used within an AudioProvider");
	return context;
}
function GlobalAudioPlayer() {
	const { currentTrack, isPlaying, progress, togglePlayPause, seek } = useAudio();
	if (!currentTrack) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed bottom-0 inset-x-0 z-[60] animate-in slide-in-from-bottom-full duration-700 pointer-events-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-auto bg-[#0a0a0a]/90 backdrop-blur-xl border-t border-hairline px-6 py-4 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 w-full md:w-1/3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: togglePlayPause,
						className: "flex-shrink-0 w-10 h-10 rounded-full border border-hairline flex items-center justify-center text-ember hover:bg-ember hover:text-background transition-colors",
						children: isPlaying ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-3 h-3 border-x-2 border-current" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-0 h-0 border-y-4 border-y-transparent border-l-6 border-l-current ml-1" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[0.7rem] font-medium uppercase tracking-[0.2em] text-foreground truncate",
							children: currentTrack.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[0.6rem] font-mono text-muted-foreground uppercase tracking-[0.1em] truncate",
							children: currentTrack.artist
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-4 w-full md:w-1/3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative flex-1 h-1 bg-white/10 rounded-full cursor-pointer group",
						onClick: (e) => {
							const rect = e.currentTarget.getBoundingClientRect();
							const newProgress = (e.clientX - rect.left) / rect.width;
							seek(Math.max(0, Math.min(1, newProgress)));
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute left-0 top-0 h-full bg-ember rounded-full group-hover:bg-ember/80 transition-colors",
							style: { width: `${progress * 100}%` }
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:flex items-center justify-end gap-1 w-1/3 opacity-50",
					children: [...Array(8)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-1 bg-ember/50 rounded-full",
						style: {
							height: isPlaying ? `${Math.max(4, Math.random() * 16)}px` : "4px",
							transition: "height 0.2s ease"
						}
					}, i))
				})
			]
		})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Sujith Sreedhar — Mixing & Mastering Engineer" },
			{
				name: "description",
				content: "Sujith Sreedhar, mixing and mastering engineer. Shaping the sound behind cinema and music across 600+ films."
			},
			{
				name: "author",
				content: "Sujith Sreedhar"
			},
			{
				property: "og:title",
				content: "Sujith Sreedhar — Mixing & Mastering Engineer"
			},
			{
				property: "og:description",
				content: "Shaping the sound behind cinema and music across 600+ films."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	const location = useLocation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AudioProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				className: "animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out-expo fill-mode-both",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}, location.pathname),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobalAudioPlayer, {})
		] })
	});
}
var $$splitComponentImporter$4 = () => import("./routes-CkD425gf.mjs");
var Route$4 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Sujith Sreedhar — Mixing & Mastering Engineer | 600+ Films" },
		{
			name: "description",
			content: "Mixing and mastering engineer Sujith Sreedhar. Shaping the sound behind cinema and music across more than 600 films."
		},
		{
			property: "og:title",
			content: "Sujith Sreedhar — Mixing & Mastering Engineer"
		},
		{
			property: "og:description",
			content: "Shaping the sound behind cinema and music across 600+ films."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./about-ody7687D.mjs");
var Route$3 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About Sujith — Sujith Sreedhar" }, {
		name: "description",
		content: "The professional journey and philosophy of mixing and mastering engineer Sujith Sreedhar."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./connect-B1xMdaDX.mjs");
var Route$2 = createFileRoute("/connect")({
	head: () => ({ meta: [{ title: "Connect — Sujith Sreedhar" }, {
		name: "description",
		content: "Mixing & mastering enquiries for Sujith Sreedhar."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./filmography-DkSetdCW.mjs");
var Route$1 = createFileRoute("/filmography")({
	head: () => ({ meta: [{ title: "Filmography — Sujith Sreedhar | 600+ Films" }, {
		name: "description",
		content: "Browse the film archive of Sujith Sreedhar, mixing and mastering engineer across 600+ films in cinema and music."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./work._slug-CV1sPpGA.mjs");
var Route = createFileRoute("/work/$slug")({
	loader: ({ params }) => {
		const project = getProject(params.slug);
		if (!project) throw notFound();
		return { project };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Unavailable — Sujith Sreedhar" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { title, year, role } = loaderData.project;
		const desc = `${title} (${year}) — ${role} by Sujith Sreedhar.`;
		return { meta: [
			{ title: `${title} — Sujith Sreedhar` },
			{
				name: "description",
				content: desc
			},
			{
				property: "og:title",
				content: `${title} — Sujith Sreedhar`
			},
			{
				property: "og:description",
				content: desc
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$4.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	AboutRoute: Route$3.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$5
	}),
	ConnectRoute: Route$2.update({
		id: "/connect",
		path: "/connect",
		getParentRoute: () => Route$5
	}),
	FilmographyRoute: Route$1.update({
		id: "/filmography",
		path: "/filmography",
		getParentRoute: () => Route$5
	}),
	WorkSlugRoute: Route.update({
		id: "/work/$slug",
		path: "/work/$slug",
		getParentRoute: () => Route$5
	})
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { filmography as a, cn as i, Route as n, selectedWork as o, bio as r, social as s, router_exports as t };
