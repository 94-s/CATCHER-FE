/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Button } from 'react-uikit-catcher';

const BuyerInfo = () => {
  return (
    <>
      {/* 메인타이틀 */}
      <div css={Top}>
        <div css={Title}>
          구매자 계좌정보
          <div css={TitleUnit}>
            상품 택배 거래시 해당 정보를 상대방에게 전송할 수 있습니다.
          </div>
        </div>
      </div>
      {/* 받는분 */}
      <div css={Row}>
        <div css={TitleCol}>
          <span css={RowTitle}>받는분</span>
        </div>
        <span css={Text}>홍길동</span>
      </div>
      {/* 배송지 */}
      <div css={Row}>
        <div css={TitleCol}>
          <span css={RowTitle}>배송지</span>
        </div>
        <span css={Text}>쌍문 둘리동</span>
      </div>
      {/* 연락처 */}
      <div css={Row}>
        <div css={TitleCol}>
          <span css={RowTitle}>연락처</span>
        </div>
        <span css={Text}>01012345678</span>
      </div>
    </>
  );
};

export default BuyerInfo;

const Top = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 106px;
  display: flex;
  border-bottom: 1px solid #e6e6e6;
`;

const Title = css`
  font-weight: 800;
  font-size: 26px;
  line-height: 42px;
`;

const TitleUnit = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #727272;
`;

const PictureRow = css`
  display: flex;
  align-items: center;
  height: 152px;
  border-bottom: 1px solid #e6e6e6;
  margin-top: 8px;
`;

const RowTitle = css`
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  color: #4a4a4a;
`;

const Row = css`
  display: flex;
  align-items: center;
  height: 72px;
  border-bottom: 1px solid #e6e6e6;
`;

const TitleCol = css`
  width: 150px;
`;

const Text = css`
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
`;

const ButtonStyle = css`
  width: 160px;
  height: 40px;
  margin-left: auto;
`;
