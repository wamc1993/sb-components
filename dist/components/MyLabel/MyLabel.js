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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./style.css");
var MyLabel = function (_a) {
    var label = _a.label, _b = _a.size, size = _b === void 0 ? "normal" : _b, _c = _a.allCaps, allCaps = _c === void 0 ? false : _c, _d = _a.color, color = _d === void 0 ? "primary" : _d, _e = _a.background, background = _e === void 0 ? "#FFFFFF" : _e, _f = _a.italic, italic = _f === void 0 ? false : _f;
    var text = allCaps
        ? label.charAt(0).toUpperCase() + label.slice(1)
        : label;
    var style = {
        backgroundColor: background,
        fontStyle: italic ? "italic" : "normal",
    };
    return ((0, jsx_runtime_1.jsx)("span", __assign({ className: "label ".concat(size, " text-").concat(color), style: style }, { children: text })));
};
exports.default = MyLabel;
