"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("../../../tailwind.css");
var BeforeLogin = function () {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: "text-center" },
            react_1.default.createElement("h1", { className: "mx-auto max-w-4xl   mb-8 font-display font-medium tracking-tight text-slate-900 text-5xl lg:text-5xl   md:text-5xl sm:text-4xl ", id: "login-tilte-hyd" },
                "ANTIQUIT\u00C4TEN ",
                react_1.default.createElement("br", null),
                react_1.default.createElement("span", { className: "relative text-red-500     lg:text-7xl sm:text-6xl xs:text-5xl text-7xl font-extralight tracking-tight", id: "login-subtilte-hyd" }, "MARKUS KRAL "),
                " "),
            react_1.default.createElement("p", { className: 'text-2xl text-black' }, "   Falls Sie Hilfe brauchen - einfach per Whatsapp an den HYD - Support eine Nachricht senden: "),
            react_1.default.createElement("div", { className: "flex justify-center mb-12" },
                react_1.default.createElement("div", { className: "text-black text-green-500 hover:text-green-500 m-2 mx-12 text-2xl font-display font-light" }, " +43 670 2024825 ")))));
};
exports.default = BeforeLogin;
