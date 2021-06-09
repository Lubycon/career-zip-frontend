interface BetoLogoProps {
  width?: string;
  height?: string;
}

const BetaLogo = ({ width = 'auto', height = 'auto' }: BetoLogoProps) => (
  <img alt="beta logo" width={width} height={height} src="/public/images/beta-logo.svg" />
);

export default BetaLogo;
