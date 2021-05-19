interface ATagProps {
  href: string;
  children: React.ReactNode;
}

const ATag = ({ href, children }: ATagProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default ATag;
