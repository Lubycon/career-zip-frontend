import styled from '@emotion/styled';

const SpeechBubble = styled.div<{ isVisible: boolean }>`
  position: absolute;
  visibility: ${(props) => !props.isVisible && 'hidden'};
  display: flex;
  padding: 20px 17px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  background-color: white;
  right: 0;
  margin-top: 20px;

  &::before {
    content: '';
    position: absolute;
    top: -9px;
    right: 14px;
    width: 0;
    border-bottom: 10px solid white;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
  }

  ${(props) =>
    props.isVisible &&
    `
    visibility: visible;
    transform: translate3d(0,10px,0);
    transition: all .2s ease-in-out;
  `}
`;

export default SpeechBubble;
