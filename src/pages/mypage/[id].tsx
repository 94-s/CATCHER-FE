/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Button } from 'react-uikit-catcher';
import BuyerInfo from '../../components/mypage/userPage/BuyerInfo';
import RequiredInfo from '../../components/mypage/userPage/RequiredInfo';
import SellerInfo from '../../components/mypage/userPage/SellerInfo';

const UserPage = () => {
  return (
    <div css={Container}>
      <RequiredInfo />
      <BuyerInfo />
      <SellerInfo />
    </div>
  );
};

export default UserPage;

const Container = css`
  max-width: 960px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;
