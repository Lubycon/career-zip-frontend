import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import styled from '@emotion/styled';
import { logger } from '@lubycon/utils';
import { getArchivingListAsync } from 'slices/archiving-list';
import MainTemplate from 'components/templates/MainTemplate';
import OrderByButtons from 'components/molecules/OrderByButtons';
import ArchivingListTable from 'components/organisms/ArchivingListTable';
import { Flex, Text } from 'rebass';
import { BLUE, GRAY } from 'styles/colors';

const archivingListPageLogger = logger.getPageLogger('archiving_list_page');

const StyledButton = styled.button`
  width: 180px;
  height: 40px;
  background-color: ${BLUE[1]};
  color: white;
  font-weight: bold;
  font-size: 14px;
  border-radius: 10px;
`;

const ArchivingList = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    archivingListPageLogger.view();

    dispatch(getArchivingListAsync());
  }, []);

  const handleClick = () => {
    history.push('/archive/post');
  };

  return (
    <MainTemplate>
      <Flex flexDirection="column">
        <Flex justifyContent="space-between">
          <Text as="h1" fontSize="32px" fontWeight="bold" color={GRAY[1]}>
            아카이빙 리스트
          </Text>
          <StyledButton onClick={handleClick}>커리어 아카이빙 하기</StyledButton>
        </Flex>
        <OrderByButtons />
        <ArchivingListTable />
      </Flex>
    </MainTemplate>
  );
};

export default ArchivingList;
