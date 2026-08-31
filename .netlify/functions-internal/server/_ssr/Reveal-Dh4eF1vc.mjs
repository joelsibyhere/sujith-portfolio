import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as cn } from "./router-BKhZy89S.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Reveal-Dh4eF1vc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Scroll-triggered cinematic reveal. Respects prefers-reduced-motion via CSS. */
function Reveal({ children, delay = 0, as: Tag = "div", className }) {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			if (entries.some((e) => e.isIntersecting)) {
				setShown(true);
				io.disconnect();
			}
		}, {
			threshold: .12,
			rootMargin: "0px 0px -8% 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		style: { "--reveal-delay": `${delay}ms` },
		className: cn("reveal", shown && "reveal-in", className),
		children
	});
}
//#endregion
export { Reveal as t };
