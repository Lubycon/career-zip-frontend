import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

import linkStyle from 'styles/link';

const homeButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 32px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  background: rgba(122, 160, 255, 0.5);
  color: #fff;
  ${linkStyle}

  >img {
    margin-right: 10px;
  }
`;

const HomeButton = () => {
  return (
    <Link to="/" css={homeButton}>
      <img src="/public/icons/left_arrow.svg" alt="left arrow" /> 홈으로
    </Link>
  );
};

export default HomeButton;
