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
exports.CardContent = exports.CardDescription = exports.CardAction = exports.CardTitle = exports.CardFooter = exports.CardHeader = exports.Card = void 0;
var React = require("react");
var utils_1 = require("@/lib/utils");
function Card(_a) {
    var className = _a.className, _b = _a.size, size = _b === void 0 ? "default" : _b, props = __rest(_a, ["className", "size"]);
    return (React.createElement("div", __assign({ "data-slot": "card", "data-size": size, className: utils_1.cn("group/card flex flex-col gap-4 overflow-hidden rounded-xl bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl", className) }, props)));
}
exports.Card = Card;
function CardHeader(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement("div", __assign({ "data-slot": "card-header", className: utils_1.cn("group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-4 group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3", className) }, props)));
}
exports.CardHeader = CardHeader;
function CardTitle(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement("div", __assign({ "data-slot": "card-title", className: utils_1.cn("font-heading text-base leading-snug font-medium group-data-[size=sm]/card:text-sm", className) }, props)));
}
exports.CardTitle = CardTitle;
function CardDescription(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement("div", __assign({ "data-slot": "card-description", className: utils_1.cn("text-sm text-muted-foreground", className) }, props)));
}
exports.CardDescription = CardDescription;
function CardAction(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement("div", __assign({ "data-slot": "card-action", className: utils_1.cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className) }, props)));
}
exports.CardAction = CardAction;
function CardContent(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement("div", __assign({ "data-slot": "card-content", className: utils_1.cn("px-4 group-data-[size=sm]/card:px-3", className) }, props)));
}
exports.CardContent = CardContent;
function CardFooter(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement("div", __assign({ "data-slot": "card-footer", className: utils_1.cn("flex items-center rounded-b-xl border-t bg-muted/50 p-4 group-data-[size=sm]/card:p-3", className) }, props)));
}
exports.CardFooter = CardFooter;
