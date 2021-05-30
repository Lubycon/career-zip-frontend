/* eslint-disable jsx-a11y/no-static-element-interactions */
import { css } from '@emotion/react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { selectArchivingList } from 'slices/archiving-list';
import { flexColumn, flexRow } from 'styles/element';

interface IArchiving {
  id: number;
  number: number;
  date: string;
  projects: { id: number; title: string }[];
  createdAt: string;
}

const listWrapper = css`
  ${flexColumn};
  margin-top: 20px;
`;

const listRow = css`
  border: 0;
  background-color: transparent;
  padding: 0;
  cursor: pointer;

  > div {
    ${flexRow};
    background-color: lightgray;
    padding: 20px;
    border-bottom: 1px solid black;
  }

  :last-of-type > div {
    border-bottom: none;
  }
`;

const Archiving = ({ number, id, date, projects, createdAt }: IArchiving) => {
  const history = useHistory();
  return (
    <button type="button" css={listRow} onClick={() => history.push(`/archive/${id}`)}>
      <div>
        <span>{number}</span>
        <div
          css={css`
            ${flexColumn};
            flex: 1;
            margin-left: 25px;
            text-align: left;
          `}
        >
          <span
            css={css`
              font-size: 20px;
            `}
          >
            {date}
          </span>
          <div
            css={css`
              ${flexRow};
              margin-top: 10px;
            `}
          >
            <div css={flexRow}>
              {projects.map((project) => (
                <span key={project.id}>{`# ${project.title}`}</span>
              ))}
            </div>
            <span
              css={css`
                margin-left: auto;
              `}
            >{`작성일: ${createdAt}`}</span>
          </div>
        </div>
      </div>
    </button>
  );
};

const ArchivingListTable = () => {
  const list = useSelector(selectArchivingList);

  return (
    <div css={listWrapper}>
      {list.map((el, i) => (
        <Archiving
          key={el.id}
          number={i + 1}
          id={el.id}
          date={`${el.startDate}(월) ~ ${el.endDate}(금)`}
          createdAt={el.createdDateTime}
          projects={el.projects}
        />
      ))}
    </div>
  );
};

export default ArchivingListTable;
