import { css } from '@emotion/react';
import { flexRow } from 'styles/element';

interface IArchiveFormHeader {
  date: string;
  createdAt: string;
  onEdit: VoidFunction;
  onDelete: VoidFunction;
}

const wrapper = css`
  display: flex;
  justify-content: center;
  align-items: ceneter;
  align-content: center;
`;

const ArchiveFormHeader = ({ date, createdAt, onEdit, onDelete }: IArchiveFormHeader) => {
  return (
    <div css={wrapper}>
      <h1
        css={css`
          font-size: 30px;
          font-weight: bold;
        `}
      >
        {date}
      </h1>
      <span
        css={css`
          display: inline-flex;
          align-items: center;
          margin-left: 10px;
        `}
      >
        {createdAt}
      </span>
      <div
        css={css`
          ${flexRow} margin-left: auto
        `}
      >
        <button type="button" onClick={onEdit}>
          수정
        </button>
        <button type="button" onClick={onDelete}>
          삭제
        </button>
      </div>
    </div>
  );
};

export default ArchiveFormHeader;
