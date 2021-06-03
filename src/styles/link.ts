import { css } from '@emotion/react';
import { BLUE } from './colors';

const linkStyle = css`
  text-decoration: none;
  :hover,
  :focus,
  :active {
    text-decoration: none;
  }
`;

export const mainLoginButton = css`
  display: flex;
  width: 500px;
  padding: 16px 0;
  background-color: ${BLUE[1]};
  border-radius: 10px;
  color: #fff;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  font-weight: bold;
  box-shadow: 0px 0px 15px 5px #104ef24d;
  font-size: 20px;
  border: none;
  ${linkStyle}
`;

export default linkStyle;
