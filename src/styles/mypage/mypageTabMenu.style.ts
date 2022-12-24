/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const tabContainer = css`
  width: 100%;
  max-height: 56px;
  height: 100%;
`;

export const ul = css`
  margin: 0;
  padding: 0;
  height: 56px;
  display: flex;
  list-style: none;
  border-bottom: 1px solid #f7f7f7;
`;

export const Li = (index: number, active: number) => css`
  margin: 0;
  font-size: 17px;
  display: flex;
  color: ${active === index ? '#FC762A' : '#727272'};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 25%;
  border-bottom: ${active === index && 2 + 'px solid #FC8643'};
  transition: all 200ms all;
`;

export const contents = css`
  width: 100%;
  height: 100vh;
`;
