import styled from '@emotion/styled';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Flex, Text } from 'rebass';
import {
  getArchivingListAsync,
  selectOrderBy,
  setOrderBy,
  ORDER_BY,
  TOrderBy,
} from 'slices/archiving-list';
import { GRAY, LIGHT_GRAY } from 'styles/colors';

const OrderButton = styled.button<{ isSelected: boolean }>`
  font-size: 13px;
  color: ${(props) => (props.isSelected ? GRAY[2] : LIGHT_GRAY[1])};
`;

const OrderByButtons = () => {
  const dispatch = useDispatch();
  const orderBy = useSelector(selectOrderBy);

  const handleClick = useCallback((type: TOrderBy) => {
    dispatch(setOrderBy(type));
    dispatch(getArchivingListAsync());
  }, []);

  return (
    <Flex marginLeft="auto" fontSize="13px" alignItems="center">
      <Text color={GRAY[2]} marginRight="20px">
        정렬
      </Text>
      <OrderButton
        isSelected={orderBy === ORDER_BY.DESC}
        onClick={() => handleClick(ORDER_BY.DESC)}
      >
        최신순
      </OrderButton>
      <Text color={LIGHT_GRAY[1]} margin="0 5px">
        /
      </Text>
      <OrderButton isSelected={orderBy === ORDER_BY.ASC} onClick={() => handleClick(ORDER_BY.ASC)}>
        오래된순
      </OrderButton>
    </Flex>
  );
};

export default OrderByButtons;
