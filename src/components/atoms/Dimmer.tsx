import styled from '@emotion/styled';

const Dimmer = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export default Dimmer;
