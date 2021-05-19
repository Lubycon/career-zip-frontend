import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import linkStyle from 'styles/link';

interface LoginButtonProps {
  text: string;
}

const style = css`
  background-color: blue;
  padding: 10px;
  border-radius: 8px;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  ${linkStyle}
`;

const LoginButton = ({ text }: LoginButtonProps) => {
  return (
    <Link to="/login" css={style}>
      {text}
    </Link>
  );
};

export default LoginButton;
