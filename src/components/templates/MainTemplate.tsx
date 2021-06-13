import { useEffect } from 'react';
import { useHistory } from 'react-router';
import client from 'api/client';
import GNB from 'components/molecules/GNB';
import SideMenu from 'components/molecules/SideMenu';
import { Box, Flex } from 'rebass';
import { getLocalStorageItem } from 'utils/localstorage';

const MainTemplate = ({ children }: { children: React.ReactNode }) => {
  const history = useHistory();
  useEffect(() => {
    if (getLocalStorageItem('accessToken') == null || getLocalStorageItem('user') == null) {
      history.push('/login?error=unauthorized');
    } else {
      client.defaults.headers = {
        Authorization: getLocalStorageItem('accessToken'),
      };
    }
  }, []);
  return (
    <Flex minHeight="100vh" maxHeight="100vh">
      <SideMenu />
      <Flex flexDirection="column" flex="1" maxHeight="100vh" overflowY="auto">
        <GNB />
        <Box padding="10px 240px 147px 160px">{children}</Box>
      </Flex>
    </Flex>
  );
};

export default MainTemplate;
