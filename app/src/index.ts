import { css } from "@linaria/core";
import { someClassName } from "@myspace/package-with-linaria-styles/styles";
import {App} from "./components/App";

const defaultStyle = css`
  color: red;
`;

const greenContentStyles1 = `e`;
const greenContentStyles = css`
  ${{
    [`&.${defaultStyle} .green`]: {
      display: "inline-block",
      border: "1px solid green",
    },
  }}
`;

const greyContentStyles = css`
  &.${someClassName} .grey {
    display: inline-block;
    border: 1px solid grey;
  }
`;

document.querySelector("h2")?.classList.add(defaultStyle, greenContentStyles);
document.querySelector("h1")?.classList.add(someClassName, greyContentStyles);

function renderApp(App : any, defaultParams = {}) {
  return App;
}

/*if (module.hot) {
  module.hot.accept("./components/App", () => {
    renderApp(require("./components/App").App);
  });
}*/
