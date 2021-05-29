import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import useModal from 'hooks/useModal';
import linkStyle from 'styles/link';
import BackgroundContainer from 'components/atoms/BackgroundContainer';
import LoginModalContent from 'components/organisms/LoginModalContent';

const internalLinkButtonStyle = css`
  font-size: 30px;
  font-weight: bold;
  ${linkStyle}
`;

const Login = () => {
  const { handleOpenModal, renderModal } = useModal({});

  useEffect(() => {
    handleOpenModal();
  }, []);

  return (
    <BackgroundContainer padding="33px 324px">
      <Link to="/" css={internalLinkButtonStyle}>{`< 홈으로`}</Link>
      {renderModal(<LoginModalContent />)}
    </BackgroundContainer>
  );
};

export default Login;
