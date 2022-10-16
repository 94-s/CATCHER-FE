/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

const signupStyle = css`
  background-color: red;
`;

const SignUp = () => {
  return (
    <>
      <div css={signupStyle}>Signup</div>
    </>
  );
};

export default SignUp;
