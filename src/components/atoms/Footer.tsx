import { Box } from 'rebass';

interface FooterProps {
  children: React.ReactNode;
}

const Footer = ({ children }: FooterProps): JSX.Element => <Box as="footer">{children}</Box>;

export default Footer;
