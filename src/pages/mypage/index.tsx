/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import MypageTabMenu from '../../components/mypage/MypageTabMenu';
import ProfileTopRow from '../../components/mypage/ProfileTopRow';

const Mypage = () => {
  return (
    <div css={Wrapper}>
      <ProfileTopRow />
      <MypageTabMenu />
    </div>
  );
};

export default Mypage;

export const Wrapper = css`
  width: 100%;
  max-width: 960px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
