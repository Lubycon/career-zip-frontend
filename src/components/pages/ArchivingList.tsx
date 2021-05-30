import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { css } from '@emotion/react';
import { getArchivingListAsync } from 'slices/archiving-list';
import { flexRow, flexColumn } from 'styles/element';
import MainTemplate from 'components/templates/MainTemplate';
import OrderByButtons from 'components/molecules/OrderByButtons';
import ArchivingListTable from 'components/organisms/ArchivingListTable';

const ArchivingList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArchivingListAsync());
  }, []);

  return (
    <MainTemplate>
      <div css={flexColumn}>
        <div
          css={css`
            ${flexRow};
            justify-content: space-between;
          `}
        >
          <h1
            css={css`
              font-size: 46px;
            `}
          >
            아카이빙 리스트
          </h1>
          <button type="button">커리어 아카이빙</button>
        </div>
        <OrderByButtons />
        <ArchivingListTable />
      </div>
    </MainTemplate>
  );
};

export default ArchivingList;
