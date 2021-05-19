import { BoxProps, Flex } from 'rebass';

const Section = ({ children, bg, height, padding, id }: BoxProps): JSX.Element => (
  <Flex
    as="section"
    id={id}
    bg={bg}
    height={height}
    padding={padding}
    flexDirection="column"
    alignItems="center"
  >
    {children}
  </Flex>
);

export default Section;
