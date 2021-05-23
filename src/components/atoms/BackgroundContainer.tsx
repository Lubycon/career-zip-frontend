import React from 'react';
import { Flex, FlexProps } from 'rebass';

interface BackgroundContainerProps extends FlexProps {
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
