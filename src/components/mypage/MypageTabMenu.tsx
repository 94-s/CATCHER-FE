/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useRef, useState } from 'react';
import PurchaseHistoryComponent from './ PurchaseHistoryComponent';
import LikeItemComponent from './LikeItemComponent';
import ProductSaleComponent from './ProductSaleComponent';
import SaleHistoryComponent from './SaleHistoryComponent';
import { liArr } from './randers/tabmenuArray';

const MypageTabMenu = () => {
  const [active, setActive] = useState<number>(0);

  const onTabHandle = (e: React.MouseEvent, index: number) => {
    setActive(index);
  };

  const contentObject: any = {
    0: <ProductSaleComponent />,
    1: <LikeItemComponent />,
    2: <PurchaseHistoryComponent />,
    3: <SaleHistoryComponent />,
  };

  return (
    <div css={tabContainer}>
      <ul css={ul}>
        {liArr.map((item, index) => {
          return (
            <li
              key={index}
              css={Li(index, active)}
              onClick={(e) => onTabHandle(e, index)}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
      <div css={contents}>{contentObject[active]}</div>
    </div>
  );
};

export default MypageTabMenu;

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
  /* border: 1px solid pink; */
  height: 100vh;
`;
