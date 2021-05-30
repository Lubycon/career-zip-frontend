import { css } from '@emotion/react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArchivingListAsync, selectOrderBy, setOrderBy, OrderBy } from 'slices/archiving-list';
import { SKY_BLUE } from 'styles/colors';
import { flexRow } from 'styles/element';

const button = css`
  padding: 10px;
  &.selected {
    background-color: ${SKY_BLUE[1]};
    color: #fff;
  }
`;

const OrderByButtons = () => {
  const dispatch = useDispatch();
  const orderBy = useSelector(selectOrderBy);

  const handleClick = useCallback((type: OrderBy) => {
    dispatch(setOrderBy(type));
    dispatch(getArchivingListAsync());
  }, []);

  return (
    <div
      css={css`
        ${flexRow};
        margin-top: 25px;
        margin-left: auto;
      `}
    >
      <button
        type="button"
        css={css`
          ${button};
          margin-right: 10px;
        `}
        className={orderBy === OrderBy.DESC && 'selected'}
        onClick={() => handleClick(OrderBy.DESC)}
      >
        최신순
      </button>
      <button
        type="button"
        css={button}
        className={orderBy === OrderBy.ASC && 'selected'}
        onClick={() => handleClick(OrderBy.ASC)}
      >
        오래된순
      </button>
    </div>
  );
};

export default OrderByButtons;
