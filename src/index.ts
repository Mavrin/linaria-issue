import {css} from "@linaria/core";
import {someClassName} from "package-with-linaria-styles/styles";

document.querySelector('h2')?.classList.add(css`color: red`);
document.querySelector('h1')?.classList.add(someClassName);
