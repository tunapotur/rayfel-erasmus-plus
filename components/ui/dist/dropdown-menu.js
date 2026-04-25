"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.DropdownMenuSubContent = exports.DropdownMenuSubTrigger = exports.DropdownMenuSub = exports.DropdownMenuShortcut = exports.DropdownMenuSeparator = exports.DropdownMenuRadioItem = exports.DropdownMenuRadioGroup = exports.DropdownMenuCheckboxItem = exports.DropdownMenuItem = exports.DropdownMenuLabel = exports.DropdownMenuGroup = exports.DropdownMenuContent = exports.DropdownMenuTrigger = exports.DropdownMenuPortal = exports.DropdownMenu = void 0;
var React = require("react");
var radix_ui_1 = require("radix-ui");
var utils_1 = require("@/lib/utils");
var lucide_react_1 = require("lucide-react");
function DropdownMenu(_a) {
    var props = __rest(_a, []);
    return React.createElement(radix_ui_1.DropdownMenu.Root, __assign({ "data-slot": "dropdown-menu" }, props));
}
exports.DropdownMenu = DropdownMenu;
function DropdownMenuPortal(_a) {
    var props = __rest(_a, []);
    return (React.createElement(radix_ui_1.DropdownMenu.Portal, __assign({ "data-slot": "dropdown-menu-portal" }, props)));
}
exports.DropdownMenuPortal = DropdownMenuPortal;
function DropdownMenuTrigger(_a) {
    var props = __rest(_a, []);
    return (React.createElement(radix_ui_1.DropdownMenu.Trigger, __assign({ "data-slot": "dropdown-menu-trigger" }, props)));
}
exports.DropdownMenuTrigger = DropdownMenuTrigger;
function DropdownMenuContent(_a) {
    var className = _a.className, _b = _a.align, align = _b === void 0 ? "start" : _b, _c = _a.sideOffset, sideOffset = _c === void 0 ? 4 : _c, props = __rest(_a, ["className", "align", "sideOffset"]);
    return (React.createElement(radix_ui_1.DropdownMenu.Portal, null,
        React.createElement(radix_ui_1.DropdownMenu.Content, __assign({ "data-slot": "dropdown-menu-content", sideOffset: sideOffset, align: align, className: utils_1.cn("z-50 max-h-(--radix-dropdown-menu-content-available-height) w-(--radix-dropdown-menu-trigger-width) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:overflow-hidden data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className) }, props))));
}
exports.DropdownMenuContent = DropdownMenuContent;
function DropdownMenuGroup(_a) {
    var props = __rest(_a, []);
    return (React.createElement(radix_ui_1.DropdownMenu.Group, __assign({ "data-slot": "dropdown-menu-group" }, props)));
}
exports.DropdownMenuGroup = DropdownMenuGroup;
function DropdownMenuItem(_a) {
    var className = _a.className, inset = _a.inset, _b = _a.variant, variant = _b === void 0 ? "default" : _b, props = __rest(_a, ["className", "inset", "variant"]);
    return (React.createElement(radix_ui_1.DropdownMenu.Item, __assign({ "data-slot": "dropdown-menu-item", "data-inset": inset, "data-variant": variant, className: utils_1.cn("group/dropdown-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive", className) }, props)));
}
exports.DropdownMenuItem = DropdownMenuItem;
function DropdownMenuCheckboxItem(_a) {
    var className = _a.className, children = _a.children, checked = _a.checked, inset = _a.inset, props = __rest(_a, ["className", "children", "checked", "inset"]);
    return (React.createElement(radix_ui_1.DropdownMenu.CheckboxItem, __assign({ "data-slot": "dropdown-menu-checkbox-item", "data-inset": inset, className: utils_1.cn("relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className), checked: checked }, props),
        React.createElement("span", { className: "pointer-events-none absolute right-2 flex items-center justify-center", "data-slot": "dropdown-menu-checkbox-item-indicator" },
            React.createElement(radix_ui_1.DropdownMenu.ItemIndicator, null,
                React.createElement(lucide_react_1.CheckIcon, null))),
        children));
}
exports.DropdownMenuCheckboxItem = DropdownMenuCheckboxItem;
function DropdownMenuRadioGroup(_a) {
    var props = __rest(_a, []);
    return (React.createElement(radix_ui_1.DropdownMenu.RadioGroup, __assign({ "data-slot": "dropdown-menu-radio-group" }, props)));
}
exports.DropdownMenuRadioGroup = DropdownMenuRadioGroup;
function DropdownMenuRadioItem(_a) {
    var className = _a.className, children = _a.children, inset = _a.inset, props = __rest(_a, ["className", "children", "inset"]);
    return (React.createElement(radix_ui_1.DropdownMenu.RadioItem, __assign({ "data-slot": "dropdown-menu-radio-item", "data-inset": inset, className: utils_1.cn("relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className) }, props),
        React.createElement("span", { className: "pointer-events-none absolute right-2 flex items-center justify-center", "data-slot": "dropdown-menu-radio-item-indicator" },
            React.createElement(radix_ui_1.DropdownMenu.ItemIndicator, null,
                React.createElement(lucide_react_1.CheckIcon, null))),
        children));
}
exports.DropdownMenuRadioItem = DropdownMenuRadioItem;
function DropdownMenuLabel(_a) {
    var className = _a.className, inset = _a.inset, props = __rest(_a, ["className", "inset"]);
    return (React.createElement(radix_ui_1.DropdownMenu.Label, __assign({ "data-slot": "dropdown-menu-label", "data-inset": inset, className: utils_1.cn("px-1.5 py-1 text-xs font-medium text-muted-foreground data-inset:pl-7", className) }, props)));
}
exports.DropdownMenuLabel = DropdownMenuLabel;
function DropdownMenuSeparator(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(radix_ui_1.DropdownMenu.Separator, __assign({ "data-slot": "dropdown-menu-separator", className: utils_1.cn("-mx-1 my-1 h-px bg-border", className) }, props)));
}
exports.DropdownMenuSeparator = DropdownMenuSeparator;
function DropdownMenuShortcut(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement("span", __assign({ "data-slot": "dropdown-menu-shortcut", className: utils_1.cn("ml-auto text-xs tracking-widest text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground", className) }, props)));
}
exports.DropdownMenuShortcut = DropdownMenuShortcut;
function DropdownMenuSub(_a) {
    var props = __rest(_a, []);
    return React.createElement(radix_ui_1.DropdownMenu.Sub, __assign({ "data-slot": "dropdown-menu-sub" }, props));
}
exports.DropdownMenuSub = DropdownMenuSub;
function DropdownMenuSubTrigger(_a) {
    var className = _a.className, inset = _a.inset, children = _a.children, props = __rest(_a, ["className", "inset", "children"]);
    return (React.createElement(radix_ui_1.DropdownMenu.SubTrigger, __assign({ "data-slot": "dropdown-menu-sub-trigger", "data-inset": inset, className: utils_1.cn("flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-open:bg-accent data-open:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className) }, props),
        children,
        React.createElement(lucide_react_1.ChevronRightIcon, { className: "ml-auto" })));
}
exports.DropdownMenuSubTrigger = DropdownMenuSubTrigger;
function DropdownMenuSubContent(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(radix_ui_1.DropdownMenu.SubContent, __assign({ "data-slot": "dropdown-menu-sub-content", className: utils_1.cn("z-50 min-w-[96px] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className) }, props)));
}
exports.DropdownMenuSubContent = DropdownMenuSubContent;
