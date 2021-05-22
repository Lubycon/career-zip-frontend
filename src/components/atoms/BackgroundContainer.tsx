import React from 'react';
import { Flex } from 'rebass';

interface BackgroundContainerPropsType {
  padding?: string;
  children: React.ReactNode;
}

const BackgroundContainer = ({ children, padding }: BackgroundContainerPropsType) => {
  return (
    <Flex
      flexDirection="column"
      width="100vw"
      height="100vh"
      backgroundColor="grey"
      padding={padding}
    >
      {children}
    </Flex>
  );
};

export default BackgroundContainer;
