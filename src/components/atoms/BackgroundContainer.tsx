import React from 'react';
import { Flex } from 'rebass';

interface BackgroundContainerProps {
  padding?: string;
  children: React.ReactNode;
}

const BackgroundContainer = ({ children, padding }: BackgroundContainerProps) => {
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
