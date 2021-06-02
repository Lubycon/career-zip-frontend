import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { BoxProps } from 'rebass';
import { BLUE } from 'styles/colors';
import linkStyle from 'styles/link';

interface LoginButtonProps extends BoxProps {
  text: string;
}

const buttonStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
  background-color: ${BLUE[1]};
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  ${linkStyle};
`;

const LoginButton = ({ text }: LoginButtonProps) => {
  return (
    <Link to="/login" css={buttonStyle}>
      {text}
    </Link>
  );
};

export default LoginButton;
