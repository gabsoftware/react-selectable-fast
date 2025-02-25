"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectAll = void 0;
const react_1 = __importStar(require("react"));
const SelectableGroup_context_1 = require("./SelectableGroup.context");
class SelectAll extends react_1.Component {
    constructor() {
        super(...arguments);
        this.root = null;
        this.getRootRef = (ref) => {
            this.root = ref;
        };
    }
    componentDidMount() {
        this.root.addEventListener('mousedown', (evt) => evt.stopPropagation());
    }
    render() {
        const { component = 'div', children, className = '', ...rest } = this.props;
        const ButtonComponent = component;
        return (react_1.default.createElement(ButtonComponent, { ref: this.getRootRef, className: `selectable-select-all ${className}`, onClick: this.context.selectable.selectAll, ...rest }, children));
    }
}
exports.SelectAll = SelectAll;
SelectAll.contextType = SelectableGroup_context_1.SelectableGroupContext;
//# sourceMappingURL=SelectAll.js.map