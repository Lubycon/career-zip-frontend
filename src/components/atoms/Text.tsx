import styled from '@emotion/styled';

interface IText {
  fontWeight?: string;
  fontSize?: string;
  color?: string;
}

const Text = styled.span<IText>`
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize || '14px'};
  color: ${(props) => props.color};
`;

export default Text;
