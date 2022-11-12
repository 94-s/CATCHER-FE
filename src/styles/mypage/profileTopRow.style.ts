import { css } from "@emotion/react";

export const Container = css`
border: 1px solid red;
width: 100%;
`;

export const Wrapper = css`
max-width: 960px;
min-height: 64px; 
height: 100%;
border: 1px solid gold;
margin: 0 auto;
display: flex;
align-items: center;
margin-top: 40px;
margin-bottom: 40px;
`;

export const ProfileImg = css`
width: 64px;
height: 64px;
border-radius: 100%;
border: 1px solid red;
overflow: hidden;
`;

export const TextCol = css`
display: flex;
flex-direction: column;
margin-left: 16px;
`;

export const NickName = css`
font-size: 26px;
font-weight: 800;
line-height: 42px;
text-align: start;
`;

export const DayInfo = css`
font-size: 14px;
line-height: 22px;
font-weight: 500;
text-align: start;
`;

export const RouteButton = css`
margin-left: auto;
`;

export const RightButton = css`
margin-left: auto ;
`