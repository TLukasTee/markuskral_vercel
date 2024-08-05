"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var outline_1 = require("@heroicons/react/24/outline");
var navigation = [
    { name: 'Dashboard', href: '#', icon: outline_1.HomeIcon, current: true },
    { name: 'Team', href: '#', icon: outline_1.UsersIcon, current: false },
    { name: 'Projects', href: '#', icon: outline_1.FolderIcon, current: false },
    { name: 'Calendar', href: '#', icon: outline_1.CalendarIcon, current: false },
    { name: 'Documents', href: '#', icon: outline_1.DocumentDuplicateIcon, current: false },
    { name: 'Reports', href: '#', icon: outline_1.ChartPieIcon, current: false },
];
var teams = [
    { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
    { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
    { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
];
function classNames() {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    return classes.filter(Boolean).join(' ');
}
var react_1 = __importDefault(require("react"));
var CustomLogo = function () {
    return react_1.default.createElement("div", { className: 'bg-white overflow-y-auto flex-column flex  ' },
        react_1.default.createElement("div", { className: 'mt-40' },
            react_1.default.createElement("nav", { className: "flex flex-1 flex-col" },
                react_1.default.createElement("ul", { role: "list", className: "flex flex-1 flex-col gap-y-7" },
                    react_1.default.createElement("li", null,
                        react_1.default.createElement("a", { href: "{item.href}", className: "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold" },
                            react_1.default.createElement(outline_1.HomeIcon, { className: "text-black group-hover:text-indigo-200 h-8 w-8 shrink-0" }),
                            react_1.default.createElement("span", { className: "text-black mt-2" }, " \u00DCbersicht")))))));
};
exports.default = CustomLogo;
