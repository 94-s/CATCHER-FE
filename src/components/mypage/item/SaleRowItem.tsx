/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import * as style from '../../../styles/mypage/saleRowItem.style';
import { ItemDummyArr } from '../randers/ItemDummyArr';
import { Button } from 'react-uikit-catcher';
import Image from 'next/image';
import AsicsImg from '../../../assets/img/asics.png';
import StringUtil from '../../../common/utils/stringUtil';

// 판매 상품 아이템
const SaleRowItem = () => {
  const onRoute = () => {
    console.log('상품페이지 이동');
  };
  return (
    <>
      {ItemDummyArr.map((item) => {
        return (
          <>
            <div css={style.Container} key={item.id}>
              <div css={style.Item}>
                <Image
                  src={AsicsImg}
                  width={100}
                  height={100}
                  alt='상품이미지'
                />
                <div css={style.TextBox}>
                  <div css={style.Brand}>{item.brand}</div>
                  <div css={style.ProductName}>{item.Product_name}</div>
                  <div css={style.Price}>
                    {StringUtil.addComma(item.price)}
                    <div css={style.Unit}>원</div>
                  </div>
                </div>
                <div css={style.ButtonGroup}>
                  <Button
                    type='button'
                    text='상품페이지'
                    mode='gray'
                    isDisabled={false}
                    onClick={onRoute}
                  />
                  <Button
                    type='button'
                    text='끌어올리기'
                    mode='gray'
                    isDisabled={false}
                    onClick={onRoute}
                  />
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
