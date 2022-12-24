/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Button } from 'react-uikit-catcher';

const RequiredInfo = () => {
  return (
    <div css={Container}>
      {/* 메인타이틀 */}
      <div css={Top}>
        <span css={Title}>
          회원정보 <span css={TitleUnit}>필수</span>
        </span>
      </div>
      {/* 사진등록 및 변경 */}
      <div css={PictureRow}>
        <div css={TitleCol}>
          <span css={RowTitle}>사진</span>
        </div>
        {/* TODO: 아바타 자리 */}
        <div css={ButtonStyle}>
          <Button
            layout='inline-block'
            text='사진 변경'
            mode='gray'
            onClick={() => console.log('클릭')}
          />
        </div>
      </div>
      {/* 아이디(이메일) */}
      <div css={Row}>
        <div css={TitleCol}>
          <span css={RowTitle}>아이디(이메일)</span>
        </div>
        <span css={Text}>홍길동@gmail.com</span>
      </div>
      {/* 비밀번호 */}
      <div css={Row}>
        <div css={TitleCol}>
          <span css={RowTitle}>비밀번호</span>
        </div>
        <span css={Text}>**********</span>
        <div css={ButtonStyle}>
          <Button
            layout='block'
            text='비밀번호 변경'
            mode='gray'
            onClick={() => console.log('클릭')}
          />
        </div>
      </div>
      {/* 이름 */}
      <div css={Row}>
        <div css={TitleCol}>
          <span css={RowTitle}>이름</span>
        </div>
        <span css={Text}>홍길동</span>
        <div css={ButtonStyle}>
          <Button
            layout='block'
            text='닉네임 변경'
            mode='gray'
            onClick={() => console.log('클릭')}
          />
        </div>
      </div>
    </div>
  );
};

export default RequiredInfo;

const Container = css`
  max-width: 960px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const Top = css`
  height: 106px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
`;

const Title = css`
  font-weight: 800;
  font-size: 26px;
  line-height: 42px;
`;

const TitleUnit = css`
  font-weight: 800;
  font-size: 26px;
  line-height: 42px;
  color: #ababab;
`;

const PictureRow = css`
  display: flex;
  align-items: center;
  height: 152px;
  border-bottom: 1px solid #e6e6e6;
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
  display: flex;
  width: 160px;
  height: 40px;
  margin-left: auto;
`;
