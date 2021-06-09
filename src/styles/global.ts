import { css } from '@emotion/react';

const global = css`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'NanumBarunGothic', sans-serif;
    letter-spacing: -0.02em;
  }
  button {
    cursor: pointer;
    padding: 0;
    background-color: transparent;
    border: none;
  }
`;

export default global;
