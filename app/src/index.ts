import { css } from "@linaria/core";
import { someClassName } from "@myspace/package-with-linaria-styles/styles";

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
