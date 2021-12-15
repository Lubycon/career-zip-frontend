import styled from '@emotion/styled';

const VerticalLine = styled.div<{ width: string; height: string; margin: string }>`
  min-width: ${(props) => props.width};
  min-height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  background-color: #dfdfdf;
`;

export default VerticalLine;
