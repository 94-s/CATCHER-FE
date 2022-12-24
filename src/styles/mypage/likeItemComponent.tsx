/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const Container = css`
  margin-top: 40px;
  // TODO: grid storybook 수정후 css 삭제
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
`;

export const Card = css`
  width: 230px;
  height: 304px;
`;

export const TextGroup = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
`;

export const Brand = css`
  margin: 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
`;

export const Product = css`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
`;

export const Price = css`
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
`;

export const Unit = css`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
`;
