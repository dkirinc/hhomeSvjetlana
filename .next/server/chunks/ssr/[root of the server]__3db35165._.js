module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/app/images/hhs_Logo.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/hhs_Logo.2b3b3854.svg");}}),
"[project]/app/images/hhs_Logo.svg.mjs { IMAGE => \"[project]/app/images/hhs_Logo.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$images$2f$hhs_Logo$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/images/hhs_Logo.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$images$2f$hhs_Logo$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 314,
    height: 88,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/app/elements/Button.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
const Button = ({ text, padding, txSize, type, reservation = false, onClick })=>{
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkMobile = ()=>setIsMobile(window.innerWidth <= 768); // Mobile breakpoint
        checkMobile(); // Initial check
        window.addEventListener('resize', checkMobile); // Listen for resize
        return ()=>window.removeEventListener('resize', checkMobile); // Cleanup
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex content-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "w-full h-full bg-[#E1BE6A] text-white",
            onMouseEnter: ()=>setIsHovered(true),
            onMouseLeave: ()=>setIsHovered(false),
            onClick: onClick,
            style: {
                fontSize: `${txSize}px`,
                padding: `${padding}px`,
                color: `${type === 1 ? "white" : "black"}`,
                background: isHovered ? type === 1 ? "#d1a85e" : "#f0f0f0" : type === 1 ? "#E1BE6A" : "white"
            },
            children: reservation && isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoMailOutline"], {
                size: txSize * 2
            }, void 0, false, {
                fileName: "[project]/app/elements/Button.tsx",
                lineNumber: 48,
                columnNumber: 44
            }, this) : text
        }, void 0, false, {
            fileName: "[project]/app/elements/Button.tsx",
            lineNumber: 30,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/elements/Button.tsx",
        lineNumber: 29,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = Button;
}}),
"[project]/app/assets/Context/MainContext.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MainContext": (()=>MainContext),
    "MainProvider": (()=>MainProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const MainContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    characteristicsIn: false,
    setCharacteristicsIn: ()=>{},
    refBtnIn: {
        current: null
    },
    refBtnOut: {
        current: null
    },
    openLightBox: false,
    setOpenLightBox: ()=>{},
    currentSlideIndex: 0,
    setCurrentSlideIndex: ()=>{},
    modalStatus: false,
    setModalStatus: ()=>{},
    lang: 'en',
    setLang: ()=>{}
});
const MainProvider = ({ children })=>{
    const [characteristicsIn, setCharacteristicsIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [openLightBox, setOpenLightBox] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentSlideIndex, setCurrentSlideIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const refBtnIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const refBtnOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [modalStatus, setModalStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lang, setLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('deu');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MainContext.Provider, {
        value: {
            characteristicsIn,
            setCharacteristicsIn,
            refBtnIn,
            refBtnOut,
            openLightBox,
            setOpenLightBox,
            currentSlideIndex,
            setCurrentSlideIndex,
            modalStatus,
            setModalStatus,
            lang,
            setLang
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/app/assets/Context/MainContext.tsx",
        lineNumber: 55,
        columnNumber: 9
    }, this);
};
}}),
"[project]/app/elements/OptionChooser.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$Context$2f$MainContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/assets/Context/MainContext.tsx [app-ssr] (ecmascript)");
;
;
;
const OptionChooser = ({ option, options })=>{
    const { lang, setLang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$Context$2f$MainContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MainContext"]);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [itemSelected, setItemSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const optionSelected = options.find((options)=>options.id === option);
    const itemAccSelected = optionSelected.items.find((item)=>item.value === lang).label;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " relative border border-b-2 flex justify-between content-center items-center px-2 py-2  ",
        onClick: ()=>setIsOpen(!isOpen),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full relative flex justify-between content-center items-center ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 content-center items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: " text-wrap text-lightGrey uppercase",
                        children: itemAccSelected
                    }, void 0, false, {
                        fileName: "[project]/app/elements/OptionChooser.tsx",
                        lineNumber: 22,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/elements/OptionChooser.tsx",
                    lineNumber: 21,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/elements/OptionChooser.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute  top-full left-0 mt-4 transform origin-top transition-all duration-300 ease-in-out ${isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"} flex flex-col bg-sand  z-10 shadow-md border text-left p-2 bg-[#E1BE6A]`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "w-full flex flex-col content-center justify-center gap-4 p-2",
                    onClick: (e)=>e.stopPropagation(),
                    children: optionSelected.items.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "w-full flex gap-2 content-center items-center justify-start",
                            onClick: ()=>{
                                setItemSelected(idx);
                                setLang(item.value);
                                setIsOpen(false);
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: " hover:text-black transition-colors uppercase hover:cursor-pointer hover:underline",
                                href: item.href,
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/app/elements/OptionChooser.tsx",
                                lineNumber: 43,
                                columnNumber: 29
                            }, this)
                        }, idx, false, {
                            fileName: "[project]/app/elements/OptionChooser.tsx",
                            lineNumber: 34,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/elements/OptionChooser.tsx",
                    lineNumber: 29,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/elements/OptionChooser.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/elements/OptionChooser.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = OptionChooser;
}}),
"[project]/app/elements/Header.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$images$2f$hhs_Logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$images$2f$hhs_Logo$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/images/hhs_Logo.svg.mjs { IMAGE => "[project]/app/images/hhs_Logo.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$elements$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/elements/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$Context$2f$MainContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/assets/Context/MainContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$elements$2f$OptionChooser$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/elements/OptionChooser.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const Header = ()=>{
    const { setModalStatus, lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$Context$2f$MainContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MainContext"]);
    const [screenIsSmall, setScreenIsSmall] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const options = [
        {
            id: "language",
            items: [
                {
                    label: "Hr",
                    value: "hr"
                },
                {
                    label: "Deu",
                    value: "deu"
                },
                {
                    label: "En",
                    value: "en"
                }
            ]
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function handleResize() {
            if (window.innerWidth < 768) {
                setScreenIsSmall(true);
            } else {
                setScreenIsSmall(false);
            }
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return ()=>window.removeEventListener('resize', handleResize);
    }, []);
    const btnText = {
        hr: "REZERVACIJA",
        en: "RESERVATION",
        deu: "RESERVIERUNG"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full absolute left-0 top-0 z-10 bg-white flex  content-center justify-center items-center ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1400px] w-full  flex content-center justify-between items-center p-4 lg:p-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    width: !screenIsSmall ? 314 : 157,
                    height: !screenIsSmall ? 110 : 55,
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$images$2f$hhs_Logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$images$2f$hhs_Logo$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                    alt: "logo",
                    className: ""
                }, void 0, false, {
                    fileName: "[project]/app/elements/Header.tsx",
                    lineNumber: 53,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$elements$2f$OptionChooser$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            option: "language",
                            options: options
                        }, void 0, false, {
                            fileName: "[project]/app/elements/Header.tsx",
                            lineNumber: 55,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$elements$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            text: btnText[lang],
                            padding: 10,
                            txSize: !screenIsSmall ? 20 : 10,
                            type: 1,
                            reservation: true,
                            onClick: ()=>setModalStatus(true)
                        }, void 0, false, {
                            fileName: "[project]/app/elements/Header.tsx",
                            lineNumber: 56,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/elements/Header.tsx",
                    lineNumber: 54,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/elements/Header.tsx",
            lineNumber: 52,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/elements/Header.tsx",
        lineNumber: 51,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = Header;
}}),
"[project]/app/images/signature.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/signature.c656c83c.svg");}}),
"[project]/app/images/signature.svg.mjs { IMAGE => \"[project]/app/images/signature.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$images$2f$signature$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/images/signature.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$images$2f$signature$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 136,
    height: 51,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/app/images/profile.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/profile.9ee33050.svg");}}),
"[project]/app/images/profile.svg.mjs { IMAGE => \"[project]/app/images/profile.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$images$2f$profile$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/images/profile.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$images$2f$profile$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 171,
    height: 171,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/app/elements/SectionAbout.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$images$2f$signature$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$images$2f$signature$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/images/signature.svg.mjs { IMAGE => "[project]/app/images/signature.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$images$2f$profile$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$images$2f$profile$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/images/profile.svg.mjs { IMAGE => "[project]/app/images/profile.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$Context$2f$MainContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/assets/Context/MainContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const SectionAbout = ()=>{
    const { lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$Context$2f$MainContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MainContext"]);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkMobile = ()=>setIsMobile(window.innerWidth <= 768); // Mobile breakpoint
        checkMobile(); // Initial check
        window.addEventListener('resize', checkMobile); // Listen for resize
        return ()=>window.removeEventListener('resize', checkMobile); // Cleanup
    }, []);
    const aboutText = {
        hr: [
            "Kuća za odmor Svjetlana kompletno je renovirana kuća smještena na mirnoj poziciji u mjestu Risika, poznatom po predivnoj pješčanoj plaži Sv. Marek. Kuća se proteže na dvije etaže, prizemlje i prvi kat. U prizemlju je kuhinja s blagovaonicom, zasebni dnevni boravak, spavaća soba i kupaonica dok su na katu dvije spavaće sobe, kupaonica i balkon. Oko kuće se protežu čak tri terase ukupne površine od 54 m2; na jednoj se nalazi i vanjska hidromasažna kada. Kuća je u potpunosti opremljena - internet, satelitska televizija, klima, perilica za",
            "suđe, perilica za rublje te, naravno, kompletno namještena kuhinja.",
            "Ova šarmantna rustikalna kuća osvojiti će Vas odmah!"
        ],
        en: [
            "Holiday home Svjetlana is a completely renovated house located in a quiet location in the village of Risika, known for its beautiful sandy beach of St. Marek. The house extends over two floors, ground floor and first floor. On the ground floor there is a kitchen with a dining room, a separate living room, a bedroom and a bathroom, while on the first floor there are two bedrooms, a bathroom and a balcony. Around the house there are three terraces with a total area of ​​54 m2; one of them has an outdoor hot tub. The house is fully equipped - internet, satellite TV, air conditioning, washing machine",
            "dishwasher, washing machine and, of course, a fully furnished kitchen.",
            "This charming rustic house will win you over immediately!"
        ],
        deu: [
            "Das Ferienhaus Svjetlana ist ein komplett renoviertes Haus in ruhiger Lage im Dorf Risika, das für seinen wunderschönen Sandstrand St. Marek bekannt ist. Das Haus erstreckt sich über zwei Etagen: Erdgeschoss und erster Stock. Im Erdgeschoss befinden sich eine Küche mit Esszimmer, ein separates Wohnzimmer, ein Schlafzimmer und ein Badezimmer, während sich im ersten Stock zwei Schlafzimmer, ein Badezimmer und ein Balkon befinden. Rund um das Haus gibt es drei Terrassen mit einer Gesamtfläche von 54 m2; eine davon verfügt über einen Whirlpool im Freien. Das Haus ist komplett ausgestattet – Internet, Sat-TV, Klimaanlage, Waschmaschine",
            "geschirrspüler, Waschmaschine und natürlich eine komplett eingerichtete Küche.",
            "Dieses charmante Landhaus wird Sie sofort überzeugen!"
        ]
    };
    const ownerText = {
        hr: [
            "Želja nam je da se svi gosti u našem domu osjećaju bolje nego doma - bez briga, bez rasporeda i planova. Vjerujemo da će toplina našeg doma svih oduševiti i da će nam se",
            "često vraćati."
        ],
        en: [
            "Our wish is that all guests in our home feel better than at home - without worries, without schedules and plans. We believe that the warmth of our home will delight everyone and that we will like it",
            "return often."
        ],
        deu: [
            "Unser Wunsch ist es, dass sich alle Gäste in unserem Haus wohler fühlen als zu Hause – ohne Sorgen, ohne Termine und Pläne. Wir glauben, dass die Wärme unseres Hauses jeden begeistern wird und dass es uns gefallen wird",
            "kommen oft zurück."
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex flex-col p-8 gap-12 content-center items-center mb-20 md:mb-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-190 jost  text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        aboutText[lang][0],
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/app/elements/SectionAbout.tsx",
                            lineNumber: 59,
                            columnNumber: 41
                        }, this),
                        " ",
                        aboutText[lang][1],
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/app/elements/SectionAbout.tsx",
                            lineNumber: 59,
                            columnNumber: 69
                        }, this),
                        " ",
                        aboutText[lang][2]
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/elements/SectionAbout.tsx",
                    lineNumber: 59,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/elements/SectionAbout.tsx",
                lineNumber: 58,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-70 lg:w-105 flex flex-col xl:gap-20 gap-6 content-center items-center lg:items-end relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-right font-light",
                        children: [
                            ownerText[lang][0],
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/app/elements/SectionAbout.tsx",
                                lineNumber: 62,
                                columnNumber: 74
                            }, this),
                            ownerText[lang][1],
                            " "
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/elements/SectionAbout.tsx",
                        lineNumber: 62,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-5 content-center items-center self-end  relative md:static ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                width: isMobile ? 90 : 125,
                                height: isMobile ? 70 : 110,
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$images$2f$signature$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$images$2f$signature$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                alt: "signature"
                            }, void 0, false, {
                                fileName: "[project]/app/elements/SectionAbout.tsx",
                                lineNumber: 64,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                width: isMobile ? 60 : 160,
                                height: isMobile ? 60 : 160,
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$images$2f$profile$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$images$2f$profile$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                alt: "signature",
                                className: " absolute  md:top-[-6] md:right-[-190px] top-[58] right-0"
                            }, void 0, false, {
                                fileName: "[project]/app/elements/SectionAbout.tsx",
                                lineNumber: 65,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/elements/SectionAbout.tsx",
                        lineNumber: 63,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/elements/SectionAbout.tsx",
                lineNumber: 61,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/elements/SectionAbout.tsx",
        lineNumber: 57,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = SectionAbout;
}}),
"[project]/app/images/house/characteristiscsIn.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/characteristiscsIn.71f7ce3d.svg");}}),
"[project]/app/images/house/characteristiscsIn.svg.mjs { IMAGE => \"[project]/app/images/house/characteristiscsIn.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$images$2f$house$2f$characteristiscsIn$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/app/images/house/characteristiscsIn.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$images$2f$house$2f$characteristiscsIn$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 1440,
    height: 858,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/app/assets/HouseCharacteristicsData.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const HouseCharacteristicsData = [
    [
        {
            id: 1,
            value: [
                {
                    id: 1,
                    hr: '150m2',
                    en: '150m2',
                    deu: '150m2'
                },
                {
                    id: 2,
                    hr: '3 spavaće sobe',
                    en: '3 bedrooms',
                    deu: '3 Schlafzimmer'
                },
                {
                    id: 3,
                    hr: 'Dnevni boravak',
                    en: 'Living room',
                    deu: 'Wohnzimmer'
                },
                {
                    id: 4,
                    hr: 'Kamin',
                    en: 'Fireplace',
                    deu: 'Kamin'
                },
                {
                    id: 5,
                    hr: 'Klima uređaj',
                    en: 'Air conditioner',
                    deu: 'Klimaanlage'
                },
                {
                    id: 6,
                    hr: 'Besplatni WiFi',
                    en: 'Free WiFi',
                    deu: 'Kostenloses WIFI'
                },
                {
                    id: 7,
                    hr: 'TV',
                    en: 'TV',
                    deu: 'TV'
                }
            ]
        },
        {
            id: 2,
            value: [
                {
                    id: 1,
                    hr: 'Opremljena kuhinja',
                    en: 'Equipped kitchen',
                    deu: 'Ausgestattete Küche'
                },
                {
                    id: 2,
                    hr: 'Perilica rublja',
                    en: 'Washing machine',
                    deu: 'Waschmaschine'
                },
                {
                    id: 3,
                    hr: '2 kupaonice ',
                    en: '2 bathrooms',
                    deu: '2 Badezimmer'
                },
                {
                    id: 4,
                    hr: 'Glačalo',
                    en: 'An iron',
                    deu: 'Ein Bügeleisen'
                },
                {
                    id: 5,
                    hr: 'Sušilo za rublje',
                    en: 'Clothes dryer',
                    deu: 'Wäschetrockner'
                },
                {
                    id: 6,
                    hr: 'Ručnici i posteljina',
                    en: 'Towels and linens',
                    deu: 'Handtücher und Bettwäsche'
                },
                {
                    id: 7,
                    hr: 'Društvene igre',
                    en: 'Board games',
                    deu: 'Brettspiele'
                }
            ]
        }
    ],
    [
        {
            id: 1,
            value: [
                {
                    id: 1,
                    hr: 'Parking',
                    en: 'Parking',
                    deu: 'Parking'
                },
                {
                    id: 2,
                    hr: 'Privatni ulaz',
                    en: 'Private entrance',
                    deu: 'Privater Eingang'
                },
                {
                    id: 3,
                    hr: 'Prednja terasa',
                    en: 'Front terrace',
                    deu: 'Vordere Terrasse'
                },
                {
                    id: 4,
                    hr: 'Stražnja terasa',
                    en: 'Back terrace',
                    deu: 'Hintere Terrasse'
                },
                {
                    id: 5,
                    hr: 'Balkon',
                    en: 'Balcony',
                    deu: 'Balkon'
                },
                {
                    id: 6,
                    hr: 'Grijani jacuzzi',
                    en: 'Heated jacuzzi',
                    deu: 'Beheizter Whirlpool'
                },
                {
                    id: 7,
                    hr: 'Vanjski tuš',
                    en: 'Outdoor shower',
                    deu: 'Außendusche'
                }
            ]
        },
        {
            id: 2,
            value: [
                {
                    id: 1,
                    hr: 'Roštilj',
                    en: 'Barbecue',
                    deu: 'Grill'
                },
                {
                    id: 2,
                    hr: 'Oprema za roštilj',
                    en: 'Barbecue equipment',
                    deu: 'Grillausrüstung'
                },
                {
                    id: 3,
                    hr: 'Uređena okućnica i vrt',
                    en: 'Landscaped yard and garden',
                    deu: 'Landschaftsgarten und Hof'
                },
                {
                    id: 4,
                    hr: 'Ležaljke',
                    en: 'Sunbeds',
                    deu: 'Sonnenliegen'
                },
                {
                    id: 5,
                    hr: 'Vrtni namještaj',
                    en: 'Garden furniture',
                    deu: 'Gartenmöbel'
                },
                {
                    id: 6,
                    hr: 'Ograđeno dvorište',
                    en: 'Fenced yard',
                    deu: 'Eingezäunter Hof'
                },
                {
                    id: 7,
                    hr: 'Spremište',
                    en: 'Storage',
                    deu: 'Lagerung'
                }
            ]
        }
    ]
];
const __TURBOPACK__default__export__ = HouseCharacteristicsData;
}}),
"[project]/app/elements/SectionCharacteristics/Characteristics.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const Characteristics = ({ text })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex items-center gap-2 font-light",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-3 h-3 bg-[#C0BFBF] rounded-full"
            }, void 0, false, {
                fileName: "[project]/app/elements/SectionCharacteristics/Characteristics.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: text
            }, void 0, false, {
                fileName: "[project]/app/elements/SectionCharacteristics/Characteristics.tsx",
                lineNumber: 11,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/elements/SectionCharacteristics/Characteristics.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = Characteristics;
}}),
"[project]/app/elements/SectionCharacteristics/SectionCharacteristics.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$images$2f$house$2f$characteristiscsIn$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$images$2f$house$2f$characteristiscsIn$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/images/house/characteristiscsIn.svg.mjs { IMAGE => "[project]/app/images/house/characteristiscsIn.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$HouseCharacteristicsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/assets/HouseCharacteristicsData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$elements$2f$SectionCharacteristics$2f$Characteristics$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/elements/SectionCharacteristics/Characteristics.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$Context$2f$MainContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/assets/Context/MainContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
const SectionCharacteristics = ()=>{
    const { characteristicsIn, setCharacteristicsIn, lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$Context$2f$MainContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MainContext"]);
    const [isLargeScreen, setIsLargeScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Detekcija veličine ekrana
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleResize = ()=>{
            setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint
        };
        handleResize(); // Provjera prilikom prvog učitavanja
        window.addEventListener('resize', handleResize);
        return ()=>window.removeEventListener('resize', handleResize);
    }, []);
    const { firstObjectHrValues, secondObjectHrValues } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (characteristicsIn) {
            return {
                firstObjectHrValues: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$HouseCharacteristicsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][0][0].value.map((item)=>item[lang]),
                secondObjectHrValues: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$HouseCharacteristicsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][0][1].value.map((item)=>item[lang])
            };
        } else {
            return {
                firstObjectHrValues: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$HouseCharacteristicsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][1][0].value.map((item)=>item[lang]),
                secondObjectHrValues: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$HouseCharacteristicsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][1][1].value.map((item)=>item[lang])
            };
        }
    }, [
        lang,
        characteristicsIn
    ]);
    const colorVariants = {
        active: {
            backgroundColor: "#E1BE6A",
            color: "#FFFF"
        },
        inactive: {
            backgroundColor: "#FFFF",
            color: "#000000"
        }
    };
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: (index)=>({
                opacity: 1,
                y: 0,
                transition: {
                    delay: index * 0.1,
                    duration: 0.3
                }
            }),
        exit: {
            opacity: 0,
            y: -20
        }
    };
    const characteristicsText = {
        hr: [
            'Karakteristike kuće',
            'Unutarnji prostor',
            'Vanjski prostor'
        ],
        en: [
            'House characteristics',
            'Interior space',
            'Outdoor space'
        ],
        deu: [
            'Hauseigenschaften',
            'Innenraum',
            'Außenbereich'
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-screen lg:h-full lg:w-[1440px] relative",
        children: [
            isLargeScreen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$images$2f$house$2f$characteristiscsIn$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$images$2f$house$2f$characteristiscsIn$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                alt: "signature",
                width: 1440,
                height: 900,
                className: "object-cover"
            }, void 0, false, {
                fileName: "[project]/app/elements/SectionCharacteristics/SectionCharacteristics.tsx",
                lineNumber: 88,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$images$2f$house$2f$characteristiscsIn$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$images$2f$house$2f$characteristiscsIn$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                alt: "signature",
                fill: true,
                className: "object-cover"
            }, void 0, false, {
                fileName: "[project]/app/elements/SectionCharacteristics/SectionCharacteristics.tsx",
                lineNumber: 96,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 w-full h-full flex ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-full  flex flex-col items-end justify-center lg:pl-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full bg-[rgba(245,241,241,0.9)] flex flex-col content-center items-start p-10 gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-light",
                                    children: characteristicsText[lang][0]
                                }, void 0, false, {
                                    fileName: "[project]/app/elements/SectionCharacteristics/SectionCharacteristics.tsx",
                                    lineNumber: 106,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-full flex flex-col gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full flex",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                                    className: `w-full h-full p-2 font-light cursor-pointer`,
                                                    variants: colorVariants,
                                                    initial: "inactive" // 2. Postavite početno stanje
                                                    ,
                                                    animate: characteristicsIn ? "active" : "inactive",
                                                    transition: {
                                                        duration: 0.5
                                                    },
                                                    onClick: ()=>setCharacteristicsIn(true),
                                                    children: characteristicsText[lang][1]
                                                }, void 0, false, {
                                                    fileName: "[project]/app/elements/SectionCharacteristics/SectionCharacteristics.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                                    className: `w-full h-full p-2 font-light cursor-pointer`,
                                                    variants: colorVariants,
                                                    initial: "inactive" // 2. Postavite početno stanje
                                                    ,
                                                    animate: characteristicsIn ? "inactive" : "active",
                                                    transition: {
                                                        duration: 0.5
                                                    },
                                                    onClick: ()=>setCharacteristicsIn(false),
                                                    children: characteristicsText[lang][2]
                                                }, void 0, false, {
                                                    fileName: "[project]/app/elements/SectionCharacteristics/SectionCharacteristics.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/elements/SectionCharacteristics/SectionCharacteristics.tsx",
                                            lineNumber: 108,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full flex",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full pl-2 flex flex-col gap-0",
                                                    children: firstObjectHrValues.map((hrValue, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            variants: itemVariants,
                                                            initial: "hidden",
                                                            animate: "visible",
                                                            exit: "exit",
                                                            custom: index,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$elements$2f$SectionCharacteristics$2f$Characteristics$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                text: hrValue
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/elements/SectionCharacteristics/SectionCharacteristics.tsx",
                                                                lineNumber: 142,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, hrValue, false, {
                                                            fileName: "[project]/app/elements/SectionCharacteristics/SectionCharacteristics.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 41
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/elements/SectionCharacteristics/SectionCharacteristics.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full pl-2",
                                                    children: secondObjectHrValues.map((hrValue, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            variants: itemVariants,
                                                            initial: "hidden",
                                                            animate: "visible",
                                                            exit: "exit",
                                                            custom: index,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$elements$2f$SectionCharacteristics$2f$Characteristics$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                text: hrValue
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/elements/SectionCharacteristics/SectionCharacteristics.tsx",
                                                                lineNumber: 159,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, hrValue, false, {
                                                            fileName: "[project]/app/elements/SectionCharacteristics/SectionCharacteristics.tsx",
                                                            lineNumber: 151,
                                                            columnNumber: 41
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/elements/SectionCharacteristics/SectionCharacteristics.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/elements/SectionCharacteristics/SectionCharacteristics.tsx",
                                            lineNumber: 130,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/elements/SectionCharacteristics/SectionCharacteristics.tsx",
                                    lineNumber: 107,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/elements/SectionCharacteristics/SectionCharacteristics.tsx",
                            lineNumber: 105,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/elements/SectionCharacteristics/SectionCharacteristics.tsx",
                        lineNumber: 104,
                        columnNumber: 17
                    }, this),
                    isLargeScreen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-full"
                    }, void 0, false, {
                        fileName: "[project]/app/elements/SectionCharacteristics/SectionCharacteristics.tsx",
                        lineNumber: 169,
                        columnNumber: 35
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/app/elements/SectionCharacteristics/SectionCharacteristics.tsx",
                lineNumber: 103,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/elements/SectionCharacteristics/SectionCharacteristics.tsx",
        lineNumber: 86,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = SectionCharacteristics;
}}),
"[project]/app/assets/Amenities.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const HouseCharacteristicsData = [
    {
        id: 1,
        about: [
            {
                hr: 'Kulturne znamenitosti',
                en: 'Cultural sights',
                deu: 'Kulturelle Sehenswürdigkeiten'
            }
        ],
        value: [
            {
                id: 1,
                hr: 'Crkvica Sv. Marko',
                en: 'Church Sv. Marko',
                deu: 'Kirche Sv. Marko',
                distance: '1,7 km'
            },
            {
                id: 2,
                hr: 'Ostaci Rimske Vile',
                en: 'Remains of a Roman Villa',
                deu: 'Überreste einer römischen Villa',
                distance: '5 km'
            },
            {
                id: 3,
                hr: 'Sv. Jakov',
                en: 'St. Jakov',
                deu: 'St. Jakov',
                distance: '12 km'
            },
            {
                id: 4,
                hr: 'Krčki kaštel',
                en: 'Krk Castle',
                deu: 'Burg Krk',
                distance: '15 km'
            },
            {
                id: 5,
                hr: 'Vela placa',
                en: 'Vela placa',
                deu: 'Vela placa',
                distance: '17 km'
            },
            {
                id: 6,
                hr: 'Katedrala Uznesenja Marijina',
                en: 'Cathedral of the Assumption of Mary',
                deu: 'Kathedrale Mariä Himmelfahrt',
                distance: '18 km'
            },
            {
                id: 7,
                hr: 'Fulfinum-Mirine',
                en: 'Fulfinum-Mirine',
                deu: 'Fulfinum-Mirine',
                distance: '18 km'
            }
        ]
    },
    {
        id: 2,
        about: [
            {
                hr: 'Plaže',
                en: 'Beaches',
                deu: 'Strände'
            }
        ],
        value: [
            {
                id: 1,
                hr: 'Plaža Supovica',
                en: 'Beach Supovica',
                deu: 'Strand Supovica',
                distance: '800 m'
            },
            {
                id: 2,
                hr: 'Plaža Sveti Marak',
                en: 'Beach Sveti Marak',
                deu: 'Strand Sveti Marak',
                distance: '1,6 km'
            },
            {
                id: 3,
                hr: 'Plaža Melska',
                en: 'Beach Melska',
                deu: 'Strand Melska',
                distance: '2,3 km'
            },
            {
                id: 4,
                hr: 'Plaža Petrina',
                en: 'Beach Petrina',
                deu: 'Strand Petrina',
                distance: '3,9 km'
            },
            {
                id: 5,
                hr: 'Plaža Murvenica',
                en: 'Beach Murvenica',
                deu: 'Strand Murvenica',
                distance: '5 km'
            }
        ]
    },
    {
        id: 3,
        about: [
            {
                hr: 'Ugostiteljski objekti',
                en: 'Restaurants',
                deu: 'Restaurants'
            }
        ],
        value: [
            {
                id: 1,
                hr: 'Restoran Cool Šilo',
                en: 'Restoran Cool Šilo',
                deu: 'Restoran Cool Šilo',
                distance: '5 km'
            },
            {
                id: 2,
                hr: 'Bistro Macao',
                en: 'Bistro Macao',
                deu: 'Bistro Macao',
                distance: '5 km'
            },
            {
                id: 3,
                hr: 'Vinotel Gospoja',
                en: 'Vinotel Gospoja',
                deu: 'Vinotel Gospoja',
                distance: '7,7 km'
            },
            {
                id: 4,
                hr: 'Konoba Galija',
                en: 'Konoba Galija',
                deu: 'Konoba Galija',
                distance: '15,9 km'
            },
            {
                id: 5,
                hr: 'Restoran Primorska koliba',
                en: 'Restoran Primorska koliba',
                deu: 'Restoran Primorska koliba',
                distance: '5 km'
            },
            {
                id: 6,
                hr: 'Kings Cafe & Pub Krk',
                en: 'Kings Cafe & Pub Krk',
                deu: 'Kings Cafe & Pub Krk',
                distance: '16,5 km'
            },
            {
                id: 7,
                hr: 'Restoran Rivica',
                en: 'Restoran Rivica',
                deu: 'Restoran Rivica',
                distance: '21,8 km'
            }
        ]
    }
];
const __TURBOPACK__default__export__ = HouseCharacteristicsData;
}}),
"[project]/app/elements/SectionAmenities/Amenitie.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$Context$2f$MainContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/assets/Context/MainContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function Amenitie({ data }) {
    const { lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$Context$2f$MainContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MainContext"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full flex flex-col gap-4 content-center justify-center items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: data.about[0][lang]
            }, void 0, false, {
                fileName: "[project]/app/elements/SectionAmenities/Amenitie.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, this),
            data.value.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full flex flex-col p-[0px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-full flex justify-between  font-light",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: item[lang]
                            }, void 0, false, {
                                fileName: "[project]/app/elements/SectionAmenities/Amenitie.tsx",
                                lineNumber: 22,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: item.distance
                            }, void 0, false, {
                                fileName: "[project]/app/elements/SectionAmenities/Amenitie.tsx",
                                lineNumber: 23,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/elements/SectionAmenities/Amenitie.tsx",
                        lineNumber: 21,
                        columnNumber: 21
                    }, this)
                }, item.id, false, {
                    fileName: "[project]/app/elements/SectionAmenities/Amenitie.tsx",
                    lineNumber: 20,
                    columnNumber: 17
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/app/elements/SectionAmenities/Amenitie.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = Amenitie;
}}),
"[project]/app/elements/SectionAmenities/SectionAmenities.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$Amenities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/assets/Amenities.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$elements$2f$SectionAmenities$2f$Amenitie$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/elements/SectionAmenities/Amenitie.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$Context$2f$MainContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/assets/Context/MainContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const SectionAmenities = ()=>{
    const { lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$Context$2f$MainContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MainContext"]);
    const amenityText = {
        hr: 'Sadržaj u blizini',
        en: 'Content nearby',
        deu: 'Inhalte in der Nähe'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full p-10 lg:w-250  h-full flex flex-col gap-10 content-center justify-center items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-light",
                children: amenityText[lang]
            }, void 0, false, {
                fileName: "[project]/app/elements/SectionAmenities/SectionAmenities.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full flex flex-col lg:flex-row  content-between gap-10 ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$elements$2f$SectionAmenities$2f$Amenitie$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        data: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$Amenities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][0]
                    }, void 0, false, {
                        fileName: "[project]/app/elements/SectionAmenities/SectionAmenities.tsx",
                        lineNumber: 22,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-0.5 lg:w-1 mt-11 lg:h-auto bg-amber-400"
                    }, void 0, false, {
                        fileName: "[project]/app/elements/SectionAmenities/SectionAmenities.tsx",
                        lineNumber: 23,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$elements$2f$SectionAmenities$2f$Amenitie$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        data: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$Amenities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][1]
                    }, void 0, false, {
                        fileName: "[project]/app/elements/SectionAmenities/SectionAmenities.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-0.5 lg:w-1 mt-11 lg:h-auto bg-amber-400"
                    }, void 0, false, {
                        fileName: "[project]/app/elements/SectionAmenities/SectionAmenities.tsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$elements$2f$SectionAmenities$2f$Amenitie$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        data: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$Amenities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][2]
                    }, void 0, false, {
                        fileName: "[project]/app/elements/SectionAmenities/SectionAmenities.tsx",
                        lineNumber: 26,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/elements/SectionAmenities/SectionAmenities.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/elements/SectionAmenities/SectionAmenities.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = SectionAmenities;
}}),
"[project]/app/assets/GalleryData.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const GalleryData = [
    {
        id: 1,
        about: [
            {
                hr: 'Kuhinja',
                en: 'Kitchen',
                deu: 'Küche'
            }
        ],
        value: [
            {
                id: 1,
                src: '/images/house/kitchen1.jpg'
            },
            {
                id: 2,
                src: '/images/house/kitchen2.jpg'
            },
            {
                id: 3,
                src: '/images/house/kitchen3.jpg'
            },
            {
                id: 4,
                src: '/images/house/kitchen4.jpg'
            },
            {
                id: 5,
                src: '/images/house/kitchen5.jpg'
            },
            {
                id: 6,
                src: '/images/house/kitchen6.jpg'
            },
            {
                id: 7,
                src: '/images/house/kitchen7.jpg'
            }
        ]
    },
    {
        id: 2,
        about: [
            {
                hr: 'Sobe',
                en: 'Rooms',
                deu: 'Zimmer'
            }
        ],
        value: [
            {
                id: 1,
                src: '/images/house/room1.jpg'
            },
            {
                id: 2,
                src: '/images/house/room2.jpg'
            },
            {
                id: 3,
                src: '/images/house/room3.jpg'
            },
            {
                id: 4,
                src: '/images/house/room4.jpg'
            },
            {
                id: 5,
                src: '/images/house/room5.jpg'
            },
            {
                id: 6,
                src: '/images/house/room6.jpg'
            },
            {
                id: 7,
                src: '/images/house/room7.jpg'
            },
            {
                id: 8,
                src: '/images/house/room8.jpg'
            },
            {
                id: 9,
                src: '/images/house/room9.jpg'
            },
            {
                id: 10,
                src: '/images/house/room10.jpg'
            },
            {
                id: 11,
                src: '/images/house/room11.jpg'
            },
            {
                id: 12,
                src: '/images/house/room12.jpg'
            },
            {
                id: 13,
                src: '/images/house/room13.jpg'
            },
            {
                id: 14,
                src: '/images/house/room14.jpg'
            }
        ]
    },
    {
        id: 3,
        about: [
            {
                hr: 'Kupaonica',
                en: 'Bathroom',
                deu: 'Badezimmer'
            }
        ],
        value: [
            {
                id: 1,
                src: "/images/house/bathroom1.jpg"
            },
            {
                id: 2,
                src: "/images/house/bathroom2.jpg"
            },
            {
                id: 3,
                src: "/images/house/bathroom3.jpg"
            },
            {
                id: 4,
                src: "/images/house/bathroom4.jpg"
            },
            {
                id: 5,
                src: "/images/house/bathroom5.jpg"
            },
            {
                id: 6,
                src: "/images/house/bathroom6.jpg"
            },
            {
                id: 7,
                src: "/images/house/bathroom7.jpg"
            },
            {
                id: 8,
                src: "/images/house/bathroom8.jpg"
            }
        ]
    },
    {
        id: 4,
        about: [
            {
                hr: 'Dvorište',
                en: 'Yard',
                deu: 'Hof'
            }
        ],
        value: [
            {
                id: 1,
                src: "/images/house/terace1.jpg"
            },
            {
                id: 2,
                src: "/images/house/terace2.jpg"
            },
            {
                id: 3,
                src: "/images/house/terace3.jpg"
            },
            {
                id: 4,
                src: "/images/house/terace4.jpg"
            },
            {
                id: 5,
                src: "/images/house/terace5.jpg"
            },
            {
                id: 6,
                src: "/images/house/terace6.jpg"
            },
            {
                id: 7,
                src: "/images/house/terace7.jpg"
            },
            {
                id: 8,
                src: "/images/house/terace8.jpg"
            },
            {
                id: 9,
                src: "/images/house/terace9.jpg"
            },
            {
                id: 10,
                src: "/images/house/terace10.jpg"
            },
            {
                id: 11,
                src: "/images/house/terace11.jpg"
            },
            {
                id: 12,
                src: "/images/house/terace12.jpg"
            },
            {
                id: 13,
                src: "/images/house/terace13.jpg"
            },
            {
                id: 14,
                src: "/images/house/terace14.jpg"
            },
            {
                id: 15,
                src: "/images/house/terace15.jpg"
            },
            {
                id: 16,
                src: "/images/house/terace16.jpg"
            },
            {
                id: 17,
                src: "/images/house/terace17.jpg"
            },
            {
                id: 18,
                src: "/images/house/terace18.jpg"
            },
            {
                id: 19,
                src: "/images/house/terace19.jpg"
            },
            {
                id: 20,
                src: "/images/house/terace20.jpg"
            },
            {
                id: 21,
                src: "/images/house/terace21.jpg"
            },
            {
                id: 22,
                src: "/images/house/terace22.jpg"
            },
            {
                id: 23,
                src: "/images/house/terace23.jpg"
            },
            {
                id: 24,
                src: "/images/house/terace24.jpg"
            },
            {
                id: 25,
                src: "/images/house/terace25.jpg"
            },
            {
                id: 26,
                src: "/images/house/terace26.jpg"
            },
            {
                id: 27,
                src: "/images/house/terace27.jpg"
            },
            {
                id: 28,
                src: "/images/house/terace28.jpg"
            },
            {
                id: 29,
                src: "/images/house/terace29.jpg"
            }
        ]
    },
    {
        id: 5,
        about: [
            {
                hr: 'Dnevni boravak',
                en: 'Living room',
                deu: 'Wohnzimmer'
            }
        ],
        value: [
            {
                id: 1,
                src: "/images/house/livingroom1.jpg"
            },
            {
                id: 2,
                src: "/images/house/livingroom2.jpg"
            },
            {
                id: 3,
                src: "/images/house/livingroom3.jpg"
            },
            {
                id: 4,
                src: "/images/house/livingroom4.jpg"
            },
            {
                id: 5,
                src: "/images/house/livingroom5.jpg"
            },
            {
                id: 6,
                src: "/images/house/livingroom6.jpg"
            },
            {
                id: 7,
                src: "/images/house/livingroom7.jpg"
            },
            {
                id: 8,
                src: "/images/house/livingroom8.jpg"
            },
            {
                id: 9,
                src: "/images/house/livingroom9.jpg"
            },
            {
                id: 10,
                src: "/images/house/livingroom10.jpg"
            },
            {
                id: 11,
                src: "/images/house/livingroom11.jpg"
            },
            {
                id: 12,
                src: "/images/house/livingroom12.jpg"
            },
            {
                id: 13,
                src: "/images/house/livingroom13.jpg"
            },
            {
                id: 14,
                src: "/images/house/livingroom14.jpg"
            },
            {
                id: 15,
                src: "/images/house/livingroom15.jpg"
            }
        ]
    }
];
const __TURBOPACK__default__export__ = GalleryData;
}}),
"[project]/app/elements/SectionGallery/GalleryItem.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$Context$2f$MainContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/assets/Context/MainContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$GalleryData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/assets/GalleryData.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function GalleryItem({ data }) {
    const { setOpenLightBox, setCurrentSlideIndex, lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$Context$2f$MainContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MainContext"]);
    if (!data.value || data.value.length === 0) {
        return null;
    }
    const handleClick = ()=>{
        let startIndex = 0;
        for (const gallery of __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$GalleryData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]){
            if (gallery.id === data.id) break;
            startIndex += gallery.value.length;
        }
        setCurrentSlideIndex(startIndex); // Postavi indeks na prvu sliku galerije
        setOpenLightBox(true);
    };
    const firstItem = data.value[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-full h-full relative ${data.id === 5 ? 'col-span-2' : ''} transition duration-300 hover:scale-105`,
        onClick: handleClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: firstItem.src,
                alt: data.about[0]?.[lang] || 'Image',
                className: "object-cover w-full h-full",
                width: 600,
                height: 600
            }, void 0, false, {
                fileName: "[project]/app/elements/SectionGallery/GalleryItem.tsx",
                lineNumber: 40,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 w-full h-full text-white flex justify-between items-end p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl md:text-3xl font-semibold",
                        children: data.about[0]?.[lang] || 'Unknown'
                    }, void 0, false, {
                        fileName: "[project]/app/elements/SectionGallery/GalleryItem.tsx",
                        lineNumber: 48,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl md:text-3xl font-semibold",
                        children: data.value.length
                    }, void 0, false, {
                        fileName: "[project]/app/elements/SectionGallery/GalleryItem.tsx",
                        lineNumber: 50,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/elements/SectionGallery/GalleryItem.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, this)
        ]
    }, firstItem.id, true, {
        fileName: "[project]/app/elements/SectionGallery/GalleryItem.tsx",
        lineNumber: 35,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = GalleryItem;
}}),
"[project]/app/elements/SectionGallery/SectionGallery.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$GalleryData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/assets/GalleryData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$elements$2f$SectionGallery$2f$GalleryItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/elements/SectionGallery/GalleryItem.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$Context$2f$MainContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/assets/Context/MainContext.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const SectionGallery = ()=>{
    const { lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$Context$2f$MainContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MainContext"]);
    const textGallery = {
        hr: 'Galerija',
        en: 'Gallery',
        deu: 'Gallery'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-[1400px] flex flex-col gap-14 content-center justify-center items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-3xl font-light",
                children: [
                    textGallery[lang],
                    " "
                ]
            }, void 0, true, {
                fileName: "[project]/app/elements/SectionGallery/SectionGallery.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-200  grid grid-cols-2 lg:grid-cols-3 grid-rows-3 lg:grid-rows-2 gap-4 lg:gap-10 p-4 lg:p-0",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$GalleryData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].map((gallery)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$elements$2f$SectionGallery$2f$GalleryItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        data: gallery
                    }, gallery.id, false, {
                        fileName: "[project]/app/elements/SectionGallery/SectionGallery.tsx",
                        lineNumber: 23,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/elements/SectionGallery/SectionGallery.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/elements/SectionGallery/SectionGallery.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = SectionGallery;
}}),
"[project]/app/elements/SectionReviews/Review.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
const Review = ({ name, country, text, date })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[300px]  flex gap-5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full flex flex-col gap-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full  flex gap-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/guestLogoUnknown.png",
                            width: 60,
                            height: 60,
                            alt: "reviews",
                            className: "h-16 w-16"
                        }, void 0, false, {
                            fileName: "[project]/app/elements/SectionReviews/Review.tsx",
                            lineNumber: 16,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "",
                                    children: name
                                }, void 0, false, {
                                    fileName: "[project]/app/elements/SectionReviews/Review.tsx",
                                    lineNumber: 18,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-5 justify-center items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: country,
                                            width: 10,
                                            height: 10,
                                            alt: "reviews",
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/elements/SectionReviews/Review.tsx",
                                            lineNumber: 20,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-light",
                                            children: [
                                                "Datum: ",
                                                date
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/elements/SectionReviews/Review.tsx",
                                            lineNumber: 21,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/elements/SectionReviews/Review.tsx",
                                    lineNumber: 19,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/elements/SectionReviews/Review.tsx",
                            lineNumber: 17,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/elements/SectionReviews/Review.tsx",
                    lineNumber: 15,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-light",
                        children: text
                    }, void 0, false, {
                        fileName: "[project]/app/elements/SectionReviews/Review.tsx",
                        lineNumber: 26,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/elements/SectionReviews/Review.tsx",
                    lineNumber: 25,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/elements/SectionReviews/Review.tsx",
            lineNumber: 14,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/elements/SectionReviews/Review.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = Review;
}}),
"[project]/app/assets/ReviewsData.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const ReviewsData = [
    {
        id: 1,
        name: 'Dagmar',
        country: '/images/germanySmall.png',
        date: '31.07.2024',
        text: {
            hr: 'Das Haus ist super gemütlich. Es hat insgesamt 3 Schlafzimmer,somit hat man als Familie mit 2 Kindern mehr als genug Platz! Man hat die Möglichkeit hinter dem Haus wo sich auch die Grillmöglichkeit befindet unter dem schönen Olivenbaum zu sitzen,vor dem Haus auf der Terrasse oder im oberen Bereich auf dem Balkon! Die Küche ist sehr gut ausgestattet. Die Lage ist perfekt wenn man es lieber...',
            en: '',
            deu: ''
        }
    },
    {
        id: 2,
        name: 'Tunde',
        country: '/images/hungarySmall.png',
        date: '31.07.2024',
        text: {
            hr: 'A ház nagyon szép, kényelmes és felszerelt. A wifi jól működött. Svjetlana nagyon kedves és rugalmas. A hűtőben gyümölcs és egy üveg helyi bor várt ránk :-)',
            en: '',
            deu: ''
        }
    },
    {
        id: 3,
        name: 'Dagmar',
        country: '/images/germanySmall.png',
        date: '31.07.2024',
        text: {
            hr: 'Das Haus ist super gemütlich. Es hat insgesamt 3 Schlafzimmer,somit hat man als Familie mit 2 Kindern mehr als genug Platz! Man hat die Möglichkeit hinter dem Haus wo sich auch die Grillmöglichkeit befindet unter dem schönen Olivenbaum zu sitzen,vor dem Haus auf der Terrasse oder im oberen Bereich auf dem Balkon! Die Küche ist sehr gut ausgestattet. Die Lage ist perfekt wenn man es lieber...',
            en: '',
            deu: ''
        }
    },
    {
        id: 4,
        name: 'Tunde',
        country: '/images/hungarySmall.png',
        date: '31.07.2024',
        text: {
            hr: 'A ház nagyon szép, kényelmes és felszerelt. A wifi jól működött. Svjetlana nagyon kedves és rugalmas. A hűtőben gyümölcs és egy üveg helyi bor várt ránk :-)',
            en: '',
            deu: ''
        }
    }
];
const __TURBOPACK__default__export__ = ReviewsData;
}}),
"[project]/app/elements/SectionReviews/SectionReviews.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$elements$2f$SectionReviews$2f$Review$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/elements/SectionReviews/Review.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$ReviewsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/assets/ReviewsData.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const SectionReviews = ()=>{
    const scrollContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scroll = (direction)=>{
        if (scrollContainerRef.current) {
            const scrollAmount = 310; // Prilagodite prema potrebi
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-[1400px] h-full flex flex-col gap-7 md:gap-14 content-center justify-center items-center mt-10 xl:mt-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-3xl font-light",
                children: "Što kažu naši gosti"
            }, void 0, false, {
                fileName: "[project]/app/elements/SectionReviews/SectionReviews.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full flex flex-col lg:flex-row gap-20 lg:gap-10 p-8 content-center justify-center items-center ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/bookingRating.png",
                        width: 250,
                        height: 250,
                        alt: "reviews",
                        className: "object-contain"
                    }, void 0, false, {
                        fileName: "[project]/app/elements/SectionReviews/SectionReviews.tsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-5 justify-between flex-stretch",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-md:hidden  flex content-center justify-center items-center ",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                        onClick: ()=>scroll('left')
                                    }, void 0, false, {
                                        fileName: "[project]/app/elements/SectionReviews/SectionReviews.tsx",
                                        lineNumber: 31,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/elements/SectionReviews/SectionReviews.tsx",
                                    lineNumber: 30,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/elements/SectionReviews/SectionReviews.tsx",
                                lineNumber: 29,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: scrollContainerRef,
                                className: "w-[300px] lg:w-[605px] flex overflow-x-auto scrollbar-hide",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-5",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$ReviewsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].map((review)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$elements$2f$SectionReviews$2f$Review$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            name: review.name,
                                            country: review.country,
                                            text: review.text.hr,
                                            date: review.date
                                        }, review.id, false, {
                                            fileName: "[project]/app/elements/SectionReviews/SectionReviews.tsx",
                                            lineNumber: 37,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/elements/SectionReviews/SectionReviews.tsx",
                                    lineNumber: 35,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/elements/SectionReviews/SectionReviews.tsx",
                                lineNumber: 34,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-md:hidden flex  content-center justify-center items-center ",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    onClick: ()=>scroll('right')
                                }, void 0, false, {
                                    fileName: "[project]/app/elements/SectionReviews/SectionReviews.tsx",
                                    lineNumber: 43,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/elements/SectionReviews/SectionReviews.tsx",
                                lineNumber: 42,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/elements/SectionReviews/SectionReviews.tsx",
                        lineNumber: 28,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/elements/SectionReviews/SectionReviews.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                fileName: "[project]/app/elements/SectionReviews/SectionReviews.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/elements/SectionReviews/SectionReviews.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = SectionReviews;
}}),
"[project]/app/elements/LightBox.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LightBox)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$Context$2f$MainContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/assets/Context/MainContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/yet-another-react-lightbox/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$plugins$2f$captions$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/yet-another-react-lightbox/dist/plugins/captions/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$GalleryData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/assets/GalleryData.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function LightBox() {
    const { openLightBox, setOpenLightBox, currentSlideIndex, setCurrentSlideIndex, lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$Context$2f$MainContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MainContext"]);
    const slides = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$GalleryData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].flatMap((gallery)=>gallery.value.map((item)=>({
                    src: item.src,
                    description: gallery.about[0][lang]
                })));
    }, [
        lang
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
            open: openLightBox,
            close: ()=>{
                setOpenLightBox(false);
                setCurrentSlideIndex(0);
            },
            slides: slides,
            plugins: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yet$2d$another$2d$react$2d$lightbox$2f$dist$2f$plugins$2f$captions$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
            ],
            captions: {
                descriptionTextAlign: "center"
            },
            index: currentSlideIndex
        }, void 0, false, {
            fileName: "[project]/app/elements/LightBox.tsx",
            lineNumber: 26,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
}}),
"[project]/app/elements/Footer.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$elements$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/elements/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$Context$2f$MainContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/assets/Context/MainContext.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const Footer = ()=>{
    const [screenIsSmall, setScreenIsSmall] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { setModalStatus, lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$Context$2f$MainContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MainContext"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function handleResize() {
            if (window.innerWidth < 768) {
                setScreenIsSmall(true);
            } else {
                setScreenIsSmall(false);
            }
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return ()=>window.removeEventListener('resize', handleResize);
    }, []);
    const footerText = {
        hr: 'Rezerviraj svoj termin',
        en: 'Book your stay',
        deu: 'Buchen Sie Ihren Aufenthalt'
    };
    const footerBtnTxt = {
        hr: 'Pošalji Upit',
        en: 'Send Inquiry',
        deu: 'Anfrage senden'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex  content-center justify-center items-center   bg-[#F5F1F1]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1400px] w-full flex content-center justify-between items-center p-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: `${screenIsSmall ? "text-xl" : "text-3xl"} text-3xl font-light`,
                    children: footerText[lang]
                }, void 0, false, {
                    fileName: "[project]/app/elements/Footer.tsx",
                    lineNumber: 44,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$elements$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    text: footerBtnTxt[lang],
                    txSize: !screenIsSmall ? 20 : 10,
                    padding: 10,
                    type: 1,
                    onClick: ()=>setModalStatus(true),
                    reservation: true
                }, void 0, false, {
                    fileName: "[project]/app/elements/Footer.tsx",
                    lineNumber: 45,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/elements/Footer.tsx",
            lineNumber: 43,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/elements/Footer.tsx",
        lineNumber: 42,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = Footer;
}}),
"[project]/app/elements/Modal.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$elements$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/elements/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$Context$2f$MainContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/assets/Context/MainContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tfi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/tfi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-datepicker/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
'use client';
;
;
;
;
;
;
;
;
;
const Modal = ()=>{
    const { modalStatus, setModalStatus, lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$Context$2f$MainContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MainContext"]);
    const [screenIsSmall, setScreenIsSmall] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function handleResize() {
            if (window.innerWidth < 768) {
                setScreenIsSmall(true);
            } else {
                setScreenIsSmall(false);
            }
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return ()=>window.removeEventListener('resize', handleResize);
    }, []);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        dateOfArrival: undefined,
        dateOfleave: undefined,
        adultNumber: "",
        chidrenNumber: "",
        msgTxt: ""
    });
    const handleFormInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleFormFieldUpdate = (name, value)=>{
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    /* setFormData((prev) => {
            let updatedData = { ...prev, [name]: value };

            if (name === "dateOfArrival") {
                const arrival = value;
                const leave = prev.dateOfleave;

                if (leave && arrival > leave) {
                    updatedData.dateOfleave = null;
                }
            }

            return updatedData;
        }); */ };
    const modalText = {
        name: {
            hr: 'Ime i prezime',
            en: 'Name and surname',
            deu: 'Name und Vorname'
        },
        email: {
            hr: 'Email',
            en: 'Email',
            deu: 'Email'
        },
        dateOfArrival: {
            hr: 'Datum dolaska',
            en: 'Date of arrival',
            deu: 'Anreisedatum'
        },
        dateOfleave: {
            hr: 'Datum odlaska',
            en: 'Date of leave',
            deu: 'Abreisedatum'
        },
        adultNumber: {
            hr: 'Broj odraslih',
            en: 'Number of adults',
            deu: 'Anzahl Erwachsene'
        },
        chidrenNumber: {
            hr: 'Broj djece',
            en: 'Number of children',
            deu: 'Anzahl der Kinder'
        },
        msgTxt: {
            hr: 'Tekst poruke',
            en: 'Message text',
            deu: 'Nachrichtentext'
        }
    };
    const btnText = {
        hr: 'Pošalji upit',
        en: 'Send inquiry',
        deu: 'Anfrage senden'
    };
    const handleSubmit = async (event)=>{
        event.preventDefault();
        setModalStatus(false);
        setResult("Sending....");
        const formDataToSend = new FormData(event.target);
        // Dodajemo datume ručno, pošto DatePicker nije nativni <input>
        if (formData.dateOfArrival) {
            formDataToSend.append("dateOfArrival", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(formData.dateOfArrival, "dd.MM.yyyy"));
        }
        if (formData.dateOfleave) {
            formDataToSend.append("dateOfleave", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(formData.dateOfleave, "dd.MM.yyyy"));
        }
        formDataToSend.append("access_key", "1b616014-0e08-42df-b0b8-a5d6b732e952");
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSend
            });
            const data = await response.json();
            if (data.success) {
                setResult("Message sent successfully!");
            } else {
                setResult("Failed to send message.");
            }
        } catch (error) {
            console.error(result, error);
            setResult("An error occurred while sending the message.");
        }
    };
    {
        if (!modalStatus) {
            return null;
        } else {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed w-full h-screen  flex items-center justify-center z-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute w-full h-full backdrop-blur-xs"
                    }, void 0, false, {
                        fileName: "[project]/app/elements/Modal.tsx",
                        lineNumber: 163,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-[550px]  flex flex-col items-end justify-center z-30 ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full  flex flex-col items-center justify-center bg-[#E1BE6A]/75 ",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full lg:w-[735px] h-[550px]  flex flex-col items-center justify-center gap-3 bg-[#F5F1F1] p-20 relative text-[10px] md:text-[14px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-13 bg-white ",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                id: "name",
                                                name: "name",
                                                className: "w-full h-full bg-white px-2",
                                                placeholder: modalText.name[lang],
                                                onChange: handleFormInputChange,
                                                value: formData.name,
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/app/elements/Modal.tsx",
                                                lineNumber: 169,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/elements/Modal.tsx",
                                            lineNumber: 168,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-13 flex content-center items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    selected: formData.dateOfArrival,
                                                    onChange: (date)=>handleFormFieldUpdate("dateOfArrival", date),
                                                    placeholderText: screenIsSmall ? `${modalText.dateOfArrival[lang]}` : `${modalText.dateOfArrival[lang]}`,
                                                    wrapperClassName: "w-full h-13",
                                                    className: "w-full h-13 bg-white px-2",
                                                    dateFormat: "dd.MM.yyyy",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/elements/Modal.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    selected: formData.dateOfleave,
                                                    onChange: (date)=>handleFormFieldUpdate("dateOfleave", date),
                                                    minDate: formData.dateOfArrival ?? undefined,
                                                    placeholderText: screenIsSmall ? `${modalText.dateOfleave[lang]}` : `${modalText.dateOfleave[lang]}`,
                                                    className: "w-full h-13 bg-white px-2",
                                                    wrapperClassName: "w-full h-13",
                                                    dateFormat: "dd.MM.yyyy",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/elements/Modal.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/elements/Modal.tsx",
                                            lineNumber: 173,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-13 flex content-center items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full h-full bg-white ",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        id: "adultNumber",
                                                        name: "adultNumber",
                                                        className: "w-full h-full bg-white px-2",
                                                        placeholder: modalText.adultNumber[lang],
                                                        onChange: handleFormInputChange,
                                                        value: formData.adultNumber,
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/elements/Modal.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/elements/Modal.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full h-full bg-white ",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        className: "w-full h-full bg-white px-2",
                                                        placeholder: modalText.chidrenNumber[lang],
                                                        onChange: handleFormInputChange,
                                                        value: formData.chidrenNumber
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/elements/Modal.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/elements/Modal.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/elements/Modal.tsx",
                                            lineNumber: 197,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-13 bg-white ",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                id: "email",
                                                name: "email",
                                                className: "w-full h-full bg-white px-2",
                                                placeholder: "Email",
                                                onChange: handleFormInputChange,
                                                value: formData.email,
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/app/elements/Modal.tsx",
                                                lineNumber: 209,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/elements/Modal.tsx",
                                            lineNumber: 208,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-32 bg-white ",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                className: "w-full h-full p-2",
                                                name: "msgTxt",
                                                id: "msgTxt",
                                                placeholder: modalText.msgTxt[lang],
                                                onChange: handleFormInputChange,
                                                value: formData.msgTxt
                                            }, void 0, false, {
                                                fileName: "[project]/app/elements/Modal.tsx",
                                                lineNumber: 214,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/elements/Modal.tsx",
                                            lineNumber: 213,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-13 flex justify-end",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$elements$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                text: btnText[lang],
                                                padding: 10,
                                                txSize: 20,
                                                type: 1
                                            }, void 0, false, {
                                                fileName: "[project]/app/elements/Modal.tsx",
                                                lineNumber: 218,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/elements/Modal.tsx",
                                            lineNumber: 217,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "absolute top-10 right-10",
                                            onClick: ()=>setModalStatus(false),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tfi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TfiClose"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/app/elements/Modal.tsx",
                                                lineNumber: 221,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/elements/Modal.tsx",
                                            lineNumber: 220,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/elements/Modal.tsx",
                                    lineNumber: 167,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/elements/Modal.tsx",
                                lineNumber: 166,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/elements/Modal.tsx",
                            lineNumber: 165,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/elements/Modal.tsx",
                        lineNumber: 164,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/elements/Modal.tsx",
                lineNumber: 162,
                columnNumber: 17
            }, this);
        }
    }
};
const __TURBOPACK__default__export__ = Modal;
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__3db35165._.js.map