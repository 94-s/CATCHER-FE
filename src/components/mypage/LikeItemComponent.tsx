/** @jsxImportSource @emotion/react */
import Image from 'next/image';
import React from 'react';
import Asics from '../../assets/img/asics.png';
import StringUtil from '../../common/utils/stringUtil';
import * as styles from '../../styles/mypage/likeItemComponent';

const LikeItemArr = [
  {
    id: 1,
    brand: 'Asics',
    Product: '아식스 노란색 신발',
    price: 349000,
  },
  {
    id: 2,
    brand: 'Asics',
    Product: '아식스 노란색 신발',
    price: 349000,
  },
  {
    id: 3,
    brand: 'Asics',
    Product: '아식스 노란색 신발',
    price: 349000,
  },
  {
    id: 4,
    brand: 'Asics',
    Product: '아식스 노란색 신발',
    price: 349000,
  },
  {
    id: 5,
    brand: 'Asics',
    Product: '아식스 노란색 신발',
    price: 349000,
  },
  {
    id: 6,
    brand: 'Asics',
    Product: '아식스 노란색 신발',
    price: 349000,
  },
  {
    id: 7,
    brand: 'Asics',
    Product: '아식스 노란색 신발',
    price: 349000,
  },
  {
    id: 8,
    brand: 'Asics',
    Product: '아식스 노란색 신발',
    price: 349000,
  },
  {
    id: 9,
    brand: 'Asics',
    Product: '아식스 노란색 신발',
    price: 349000,
  },
  {
    id: 10,
    brand: 'Asics',
    Product: '아식스 노란색 신발',
    price: 349000,
  },
];

// 좋아요한 상품
const LikeItemComponent = () => {
  return (
    <div css={styles.Container}>
      {/* <Grid> */}
      {LikeItemArr.map((item) => {
        return (
          <div key={item.id} css={styles.Card}>
            <Image src={Asics} alt='상품이미지' width={230} height={230} />
            <div css={styles.TextGroup}>
              <h4 css={styles.Brand}>{item.brand}</h4>
              <span css={styles.Product}>{item.Product}</span>
              <span css={styles.Price}>
                {StringUtil.addComma(item.price)}
                <span css={styles.Unit}>원</span>
              </span>
            </div>
          </div>
        );
      })}
      {/* </Grid> */}
    </div>
  );
};

export default LikeItemComponent;
