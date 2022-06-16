import _ from "lodash";
import {css} from "@linaria/core";

const getColor = _.memoize((color: string) => {
    return color;
})

const someClassName = css`color: ${getColor("blue")}`;

export {someClassName}
