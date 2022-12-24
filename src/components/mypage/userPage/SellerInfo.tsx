/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Button } from 'react-uikit-catcher';

const SellerInfo = () => {
  return (
    <>
      {/* 메인타이틀 */}
      <div css={Top}>
        <div css={Title}>
          판매자 계좌정보
          <div css={TitleUnit}>
            상품 판매시 해당 정보를 상대방에게 전송할 수 있습니다.
          </div>
        </div>
      </div>
      {/* 예금주 */}
      <div css={Row}>
        <div css={TitleCol}>
          <span css={RowTitle}>홍길동</span>
        </div>
        <div css={ButtonStyle}>
          <Button
            layout='block'
            text='예금주 변경'
            mode='gray'
            onClick={() => console.log('클릭')}
          />
        </div>
      </div>
      {/* 입금 계좌번호 */}
      <div css={DepositRowBox}>
        <div css={TitleCol}>
          <span css={RowTitle}>입금 계좌번호</span>
        </div>
        <div css={Deposit}>
          {/* 예금주 */}
          <div css={DepositRow}>
            <span css={DepositSubTitle}>예금주</span>
            <span css={Text}>쌍문 둘리동</span>
            <div css={ButtonStyle}>
              <Button
                layout='block'
                text='계좌번호 변경'
                mode='gray'
                onClick={() => console.log('클릭')}
              />
            </div>
          </div>
          {/* 입금은행 */}
          <div css={DepositRow}>
            <span css={DepositSubTitle}>예금주</span>
            <span css={Text}>쌍문 둘리동</span>
          </div>
          {/* 계좌번호 */}
          <div css={DepositRow}>
            <span css={DepositSubTitle}>예금주</span>
            <span css={Text}>쌍문 둘리동</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerInfo;

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

const DepositRowBox = css`
  display: flex;
  align-items: center;
  height: 154px;
  border-bottom: 1px solid #e6e6e6;
`;

const Deposit = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const DepositSubTitle = css`
  width: 140px;
`;

const DepositRow = css`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
