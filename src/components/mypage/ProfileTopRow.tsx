/** @jsxImportSource @emotion/react */
import React from 'react';
import * as styles from '../../styles/mypage/profileTopRow.style'

const ProfileTopRow = () => {
  const Click = () => {
    console.log('click');
  };
  return (
    <div css={styles.Container}>
      <div css={styles.Wrapper}>
        <div css={styles.ProfileImg}></div>
        <div css={styles.TextCol}>
          <span css={styles.NickName}>1</span>
          <span css={styles.DayInfo}>catcher와 함께하신지 80일 입니다.</span>
        </div>
        <button css={styles.RightButton}>내 정보</button>
      </div>
    </div>
  );
};

export default ProfileTopRow;
