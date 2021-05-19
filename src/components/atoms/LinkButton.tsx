/* eslint-disable react/require-default-props */
import { css } from '@emotion/react';

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
        text-decoration: none;
        color: inherit;
        margin: ${margin};
        :hover,
        :focus,
        :active {
          text-decoration: none;
          color: inherit;
        }
      `}
    >
      {children}
    </a>
  );
};

export default LinkButton;
