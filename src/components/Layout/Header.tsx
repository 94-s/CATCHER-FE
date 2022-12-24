import React from 'react';
import { css } from '@emotion/react';
import Image from 'next/image';
import Logo from 'public/CATCHERLOGO.png';

const HeaderStyle = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 72px;
  column-gap: 127px;
`;

const Header = (): JSX.Element => {
  return (
    <header css={HeaderStyle}>
      <div>
        <Image src={Logo} alt='LOGO' placeholder='blur' />
      </div>
    </header>
  );
};

export default Header;
