import { BoxProps, Flex } from 'rebass';

const Section = ({ children, backgroundColor, height, padding, alignItems, id }: BoxProps) => (
  <Flex
    as="section"
    id={id}
    backgroundColor={backgroundColor}
    height={height}
    padding={padding}
    flexDirection="column"
    alignItems={alignItems ?? 'center'}
  >
    {children}
  </Flex>
);

export default Section;
