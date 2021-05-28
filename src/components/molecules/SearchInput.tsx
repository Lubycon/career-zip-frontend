import { css } from '@emotion/react';

const SearchInput = () => {
  return (
    <div
      css={css`
        display: flex;
        margin-left: 100px;
      `}
    >
      <input
        css={css`
          width: 300px;
        `}
        placeholder="검색어를 입력해주세요."
        type="text"
      />
      <button
        type="button"
        css={css`
          padding: 0 20px;
        `}
      >
        검색
      </button>
    </div>
  );
};

export default SearchInput;
