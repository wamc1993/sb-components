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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBackground = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = __importDefault(require("../../components/MyLabel/MyLabel"));
exports.default = {
    title: "UI/MyLabel",
    component: MyLabel_1.default,
    argTypes: {
        color: { control: "select" },
        background: { control: "color" },
    },
};
//La plantilla de nuestro componente
// internamente esta función sabe que args de del mismo tipo de la interface usada para
// tipar las properties del componente, basta con export esa interface
var Template = function (args) { return ((0, jsx_runtime_1.jsx)(MyLabel_1.default, __assign({}, args))); };
//Las variaciones de nuestro componente, que son visibles desde storybook
exports.Basic = Template.bind({});
exports.Basic.args = {
    label: "hola mundo",
    size: "normal",
    color: "primary",
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    label: "hola mundo",
    size: "normal",
    allCaps: true,
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    label: "hola mundo",
    size: "normal",
    color: "secondary",
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    label: "hola mundo",
    size: "normal",
    color: "tertiary",
};
exports.CustomBackground = Template.bind({});
exports.CustomBackground.args = {
    label: "hola mundo",
    size: "h1",
    italic: true,
    background: "#6EC64F",
};
