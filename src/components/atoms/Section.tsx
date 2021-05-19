import { BoxProps, Flex } from 'rebass';

const Section = ({ children, backgroundColor, height, padding, id }: BoxProps) => (
  <Flex
    as="section"
    id={id}
    backgroundColor={backgroundColor}
    height={height}
    padding={padding}
    flexDirection="column"
    alignItems="center"
  >
    {children}
  </Flex>
);

export default Section;
