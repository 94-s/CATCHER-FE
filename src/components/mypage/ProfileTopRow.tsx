/** @jsxImportSource @emotion/react */
import React from 'react';
import * as styles from '../../styles/mypage/profileTopRow.style';
import ProfileImg from '../../assets/img/profileImg.png';
import Image from 'next/image';
import { Button, Icon } from 'react-uikit-catcher';
import { useRouter } from 'next/router';

// 마이페이지 상단 프로필 바
const ProfileTopRow = () => {
  const router = useRouter();
  const onRoute = () => {
    router.push('/mypage/1');
  };
  return (
    <div css={styles.Container}>
      <div css={styles.Wrapper}>
        <Image src={ProfileImg} width={64} height={64} alt='프로필이미지' />
        <div css={styles.TextCol}>
          <span css={styles.NickName}>고길동</span>
          <span css={styles.DayInfo}>catcher와 함께하신지 80일 입니다.</span>
        </div>
        <div css={styles.RightGroup}>
          <span css={styles.RightSpan}>내정보</span>
          <button css={styles.RightButton} onClick={onRoute}>
            <Icon icon='icArrowBottom' color='#4a4a4a' rotate={270} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileTopRow;
