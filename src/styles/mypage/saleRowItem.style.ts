/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

export const Container = css`
  border-bottom: 1px solid #efefef;
`;

export const Item = css`
  padding: 0px;
  width: 100%;
  max-height: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  margin: 26px 0;
`;

export const ImgBox = css`
  width: 100px;
  height: 100%;
  background-color: pink;
`;

export const TextBox = css`
  margin-left: 16px;
`;

export const Brand = css`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #4a4a4a;
`;

export const ProductName = css`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #1c1c1c;
`;

export const Price = css`
  font-weight: 800;
  font-size: 26px;
  line-height: 42px;
  color: #1c1c1c;
  display: flex;
  align-items: center;
`;

export const Unit = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #727272;
  margin-left: 10px;
`;

export const ButtonGroup = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  margin-left: auto;
`;

export const Button = css`
  width: 150px;
  height: 46px;
`;
