import GNB from 'components/molecules/GNB';
import SideMenu from 'components/molecules/SideMenu';
import { Box, Flex } from 'rebass';

const MainTemplate = ({ children }: { children: React.ReactNode }) => {
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
