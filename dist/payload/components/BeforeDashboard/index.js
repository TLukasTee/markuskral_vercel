"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var solid_1 = require("@heroicons/react/20/solid");
require("./index.scss");
require("../../../tailwind.css");
var baseClass = 'before-dashboard';
var BeforeDashboard = function () {
    return (react_1.default.createElement("div", { className: "relative isolate overflow-hidden bg-white py-24 sm:py-32" },
        react_1.default.createElement("div", { className: "mx-auto max-w-7xl px-6 lg:px-8" },
            react_1.default.createElement("div", { className: "mx-auto max-w-2xl lg:mx-0" },
                react_1.default.createElement("p", { className: "text-lg font-semibold leading-8 tracking-tight text-red-600" }, "Hallo Herr Kral"),
                react_1.default.createElement("h1", { className: "mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" }, "Anleitung zum Produkthochladen"),
                react_1.default.createElement("p", { className: "mt-6 text-xl leading-8 text-gray-700" }, "Unser System erm\u00F6glicht es Ihnen, je nach Ihren Bed\u00FCrfnissen und dem aktuellen Stand Ihrer Kollektion, neue Antiquit\u00E4tenobjekte hinzuzuf\u00FCgen oder vorhandene zu entfernen. Dieser Prozess ist speziell darauf ausgerichtet, Ihnen maximale Flexibilit\u00E4t und Kontrolle \u00FCber Ihre Sammlung zu geben!      ")),
            react_1.default.createElement("div", { className: "mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12" },
                react_1.default.createElement("div", { className: "max-w-xl text-base leading-7 text-gray-700 lg:col-span-7" },
                    react_1.default.createElement("ul", { role: "list", className: "mt-8 max-w-xl space-y-3 text-gray-600" },
                        react_1.default.createElement("li", { className: "flex gap-x-3" },
                            react_1.default.createElement(solid_1.ArrowRightIcon, { className: "mt-1 h-5 w-5 flex-none text-red-600", "aria-hidden": "true" }),
                            react_1.default.createElement("span", null,
                                react_1.default.createElement("strong", { className: "font-semibold text-gray-900" }, " Links im Navigationsmen\u00FC \"Produkte\" anklicken"))),
                        react_1.default.createElement("li", { className: "flex gap-x-3" },
                            react_1.default.createElement(solid_1.ArrowRightIcon, { className: "mt-1 h-5 w-5 flex-none text-red-600", "aria-hidden": "true" }),
                            react_1.default.createElement("span", null,
                                react_1.default.createElement("strong", { className: "font-semibold text-gray-900" }, " Klicken Sie auf \"Neues Produkt\" erstellen"))),
                        react_1.default.createElement("li", { className: "flex gap-x-3" },
                            react_1.default.createElement(solid_1.ArrowRightIcon, { className: "mt-1 h-5 w-5 flex-none text-red-600", "aria-hidden": "true" }),
                            react_1.default.createElement("span", null,
                                react_1.default.createElement("strong", { className: "font-semibold text-gray-900" }, "Database backups."),
                                " Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."))),
                    react_1.default.createElement("h2", { className: "mt-16 text-2xl font-bold tracking-tight text-gray-900" }, "Sie brauchen Hilfe? Kein Problem."),
                    react_1.default.createElement("p", { className: "mt-6" },
                        "Senden Sie uns einfach per Whatsapp eine Nachricht an      ",
                        react_1.default.createElement("span", { className: "text-black text-red-600 hover:text-red-500  text-md font-semibold" }, " +43 670 2024825 "),
                        " und wir werden uns schnellstm\u00F6glichmit Ihnen in Verbindung setzen!"))))));
};
exports.default = BeforeDashboard;
