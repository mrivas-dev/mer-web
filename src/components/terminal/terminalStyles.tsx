import { ReactTerminal } from "react-terminal";
import styled from "styled-components";

export const MacOsTerminal = styled(ReactTerminal)`
 display: block;
  unicode-bidi: isolate;
  
  & > div {
  color: #20c20e !important;
  }
  & > .index_lineText {
    display: block;
    width: 0;
    margin: 5 0;
    font-size: 1.2rem;
    overflow: visible;
    font-family: monospace;
    white-space: nowrap;
    -webkit-animation-name: writeText;
    animation-name: writeText;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
`;

// .mos-toolbar {
//     height: 30px !important;
//     max-width: 600px;
//     transition: 0.4sease-out;
//     background: rgb(196, 196, 196);
//     display: block;
//     margin: 0px auto;
// }

// #terminal-editor {
//     display: block;
//     margin: 0px auto;
//     max-width: 600px;
//     transition: 0.4sease-out;
//     background: black;
//     max-height: 600px;
//     height: 100%;
//     overflow: scroll;
//     position: relative;
//     padding: 20px;
// }