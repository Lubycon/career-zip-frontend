import { css } from '@emotion/react';

const global = css`
  *,
  body {
    box-sizing: border-box;
    font-family: 'NanumBarunGothic', sans-serif;
    letter-spacing: -0.02em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  button {
    cursor: pointer;
    padding: 0;
    background-color: transparent;
    border: none;
  }

  b {
    font-weight: bold;
    font-family: inherit;
  }
`;

export default global;
