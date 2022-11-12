/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import * as style from '../../../styles/mypage/saleRowItem.style';
import { ItemDummyArr } from '../randers/ItemDummyArr';

const SaleRowItem = () => {
  return (
    <>
      {ItemDummyArr.map((item) => {
        return (
          <>
            <div css={style.Container} key={item.id}>
              <div css={style.Item}>
                <div css={style.ImgBox} />
                <div css={style.TextBox}>
                  <div css={style.Brand}>{item.brand}</div>
                  <div css={style.ProductName}>{item.Product_name}</div>
                  <div css={style.Price}>
                    {item.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    <div css={style.Unit}>원</div>
                  </div>
                </div>
                <div css={style.ButtonGroup}>
                  <button css={style.Button}>상품페이지</button>
                  <button css={style.Button}>끌어올리기</button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default SaleRowItem;
