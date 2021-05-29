import { css } from '@emotion/react';

const TextButton = ({
  fontSize = '14px',
  fontWeight = 'normal',
  margin,
  padding = '10px',
  children,
  onClick,
}: {
  fontSize?: string;
  fontWeight?: string;
  margin?: string;
  padding?: string;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    css={css`
      margin: ${margin};
      padding: ${padding};
      font-size: ${fontSize};
      font-weight: ${fontWeight};
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
    `}
  >
    {children}
  </button>
);

export default TextButton;
