/* eslint-disable react/require-default-props */
import { css } from '@emotion/react';
import linkStyle from 'styles/link';

interface LinkButtonProps {
  href: string;
  margin?: string;
  children: React.ReactNode;
}

const LinkButton = ({ href, children, margin }: LinkButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      css={css`
        margin: ${margin};
        ${linkStyle}
      `}
    >
      {children}
    </a>
  );
};

export default LinkButton;
