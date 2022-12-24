import { css } from '@emotion/react';

export const GridContainer = (span: number, gap: string) => {
  return css`
    display: flex;
    flex-wrap: wrap;
    gap: ${gap ? gap : 0};
    > div {
      width: calc((100% / ${span}) - (${gap} * (${span} - 1)) / ${span});
    }
  `;
};
