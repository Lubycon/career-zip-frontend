interface ShortLogoProps {
  width?: string;
  height?: string;
}

const ShortLogo = ({ width = 'auto', height = 'auto' }: ShortLogoProps) => (
  <img alt="short logo" width={width} height={height} src="/public/images/short_logo.svg" />
);

export default ShortLogo;
