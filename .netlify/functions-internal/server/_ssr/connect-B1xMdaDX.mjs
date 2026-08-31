import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-Dh4eF1vc.mjs";
import { i as cn, s as social } from "./router-BKhZy89S.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/connect-B1xMdaDX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ConnectPage() {
	const [status, setStatus] = (0, import_react.useState)("idle");
	const handleSubmit = (e) => {
		e.preventDefault();
		setStatus("submitting");
		setTimeout(() => {
			setStatus("success");
		}, 1200);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-32 md:pt-40 min-h-dvh flex flex-col bg-black overflow-hidden relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ember/5 rounded-full blur-[120px] pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto w-full max-w-[1200px] px-6 md:px-12 flex-1 flex flex-col lg:flex-row gap-16 lg:gap-32 relative z-10 pb-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:w-1/2 flex flex-col justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[0.65rem] uppercase tracking-[0.4em] text-ember/80 border border-ember/20 px-4 py-1 inline-flex mb-12",
						children: "CH-05 // Start a Project"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "display text-[5rem] md:text-[8rem] leading-[0.8] tracking-tight text-white mb-12",
						children: [
							"WORK",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"WITH",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-zinc-500",
								children: "SUJITH"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-6 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-zinc-500",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-8 h-px bg-hairline" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Direct Email // ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${social.email}`,
								className: "text-zinc-300 hover:text-white transition-colors",
								children: social.email
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-8 h-px bg-hairline" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Studio // ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: social.studio_instagram,
								target: "_blank",
								rel: "noreferrer",
								className: "text-zinc-300 hover:text-white transition-colors",
								children: "2 Bar Q Studios"
							})] })]
						})]
					})
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:w-1/2 flex flex-col justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 150,
					children: status === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white/5 border border-white/10 p-12 text-center flex flex-col items-center justify-center min-h-[400px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-16 h-16 rounded-full bg-ember/20 flex items-center justify-center mb-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-8 h-8 rounded-full bg-ember animate-pulse" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "display text-3xl text-white mb-4",
								children: "Signal Received"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[0.65rem] uppercase tracking-[0.2em] text-zinc-400 leading-relaxed max-w-xs mx-auto",
								children: "Your inquiry has been routed. We will be in touch shortly."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setStatus("idle"),
								className: "mt-12 text-[0.65rem] font-mono uppercase tracking-[0.3em] text-ember hover:text-white transition-colors",
								children: "Send another message →"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "flex flex-col gap-6 bg-zinc-900/40 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col md:flex-row gap-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 flex flex-col gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "name",
										className: "font-mono text-[0.55rem] uppercase tracking-[0.2em] text-zinc-400 pl-1",
										children: "01 // Name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										type: "text",
										id: "name",
										placeholder: "Your name",
										className: "w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-white font-mono text-sm tracking-wide focus:outline-none focus:border-ember focus:ring-1 focus:ring-ember transition-all placeholder:text-zinc-500"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 flex flex-col gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "email",
										className: "font-mono text-[0.55rem] uppercase tracking-[0.2em] text-zinc-400 pl-1",
										children: "02 // Email Address"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										type: "email",
										id: "email",
										placeholder: "hello@example.com",
										className: "w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-white font-mono text-sm tracking-wide focus:outline-none focus:border-ember focus:ring-1 focus:ring-ember transition-all placeholder:text-zinc-500"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "type",
									className: "font-mono text-[0.55rem] uppercase tracking-[0.2em] text-zinc-400 pl-1",
									children: "03 // Project Type"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										id: "type",
										className: "w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-white font-mono text-sm tracking-wide focus:outline-none focus:border-ember focus:ring-1 focus:ring-ember transition-all appearance-none cursor-pointer",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "mixing",
												children: "Audio Mixing"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "mastering",
												children: "Audio Mastering"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "both",
												children: "Mixing & Mastering"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "other",
												children: "Other Inquiry"
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none text-xs",
										children: "▼"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "message",
									className: "font-mono text-[0.55rem] uppercase tracking-[0.2em] text-zinc-400 pl-1",
									children: "04 // Details"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									required: true,
									id: "message",
									rows: 4,
									placeholder: "Tell us about your project, timeline, and vision...",
									className: "w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-white font-mono text-sm tracking-wide focus:outline-none focus:border-ember focus:ring-1 focus:ring-ember transition-all placeholder:text-zinc-500 resize-none"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: status === "submitting",
								className: cn("mt-4 group relative w-full rounded-lg bg-ember py-4 text-[0.7rem] font-bold uppercase tracking-[0.3em] transition-all overflow-hidden text-black shadow-[0_0_20px_rgba(255,100,50,0.3)] hover:shadow-[0_0_30px_rgba(255,100,50,0.5)]", status === "submitting" ? "opacity-70 cursor-wait" : "hover:bg-ember/90"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative z-10 flex items-center justify-center gap-4",
									children: [status === "submitting" ? "Transmitting..." : "Send Inquiry", status !== "submitting" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "transition-transform group-hover:translate-x-1",
										children: "→"
									})]
								})
							})
						]
					})
				})
			})]
		})]
	});
}
//#endregion
export { ConnectPage as component };
