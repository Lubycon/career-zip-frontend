import { Box } from 'rebass';

interface FooterProps {
  children: React.ReactNode;
}

const Footer = ({ children }: FooterProps) => <Box as="footer">{children}</Box>;

export default Footer;
