"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const GlobalStyle = (0, styled_components_1.createGlobalStyle) `
body {
    background-color: white;
    position: absolute; 
    left: 50%; 
    top: 20%;
    transform: translateX(-50%);
  }
`;
exports.default = GlobalStyle;
