/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from 'react';
import PurchaseHistoryComponent from './PurchaseHistoryComponent';
import LikeItemComponent from './LikeItemComponent';
import ProductSaleComponent from './ProductSaleComponent';
import SaleHistoryComponent from './SaleHistoryComponent';
import { liArr } from './randers/tabmenuArray';
import * as styles from '../../styles/mypage/mypageTabMenu.style';

// 마이페이지 텝 메뉴
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
    <div css={styles.tabContainer}>
      <ul css={styles.ul}>
        {liArr.map((item, index) => {
          return (
            <li
              key={index}
              css={styles.Li(index, active)}
              onClick={(e) => onTabHandle(e, index)}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
      <div css={styles.contents}>{contentObject[active]}</div>
    </div>
  );
};

export default MypageTabMenu;
