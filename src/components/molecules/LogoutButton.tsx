import styled from '@emotion/styled';
import { logger } from '@lubycon/utils';
import { useHistory } from 'react-router';
import { BLUE, GRAY } from 'styles/colors';

const StyledLogoutButton = styled.button`
  display: flex;
  width: 226px;
  height: 40px;
  font-size: 14px;
  color: ${GRAY[2]};
  justify-content: flex-start;
  align-items: center;

  .icon {
    display: flex;
    width: 24px;
    height: 24px;
    margin-right: 12px;
    font-size: 14px;
    line-height: 19.6px;
    justify-content: center;
    align-items: center;
    background-color: ${BLUE[4]};
    border-radius: 100%;
  }
`;

const LogoutButton = () => {
  const history = useHistory();
  const pageLogger = logger.getPageLogger(history.location.pathname);
  const handleLogout = () => {
    pageLogger.click('click_logout_button');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    history.push('/login');
  };

  return (
    <StyledLogoutButton onClick={handleLogout}>
      <div className="icon">🔒</div>
      <div>로그아웃</div>
    </StyledLogoutButton>
  );
};

export default LogoutButton;
