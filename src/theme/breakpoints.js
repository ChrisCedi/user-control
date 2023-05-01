import { css } from "styled-components";

const breakpoints = {
  small: 600,
  medium: 800,
  large: 1280,
};

export const media = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}px) {
      ${css(...args)}
    }
  `;

  return accumulator;
}, {});
