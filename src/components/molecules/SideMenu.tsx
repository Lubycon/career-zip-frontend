import { useState } from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import linkStyle from 'styles/link';
import { externaURL } from 'utils/url';
import LinkButton from 'components/atoms/LinkButton';

const sideMenuStyle = css`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: lightblue;
  transition: width ease 0.6s;
  overflow: hidden;

  &.opened {
    width: 200px;
  }

  &.closed {
    width: 50px;
  }

  > a {
    ${linkStyle}
    background-color: gray;
    padding: 20px 0;
    margin-top: 10px;
    white-space: nowrap;
    overflow: hidden;
    :last-of-type {
      margin-top: auto;
    }
  }
`;

const buttonStyle = css`
  width: 50px;
  padding: 10px 0;
  margin-left: auto;
`;

const SideMenu = () => {
  const [isOpened, setIsOpened] = useState(true);

  const handleClickButton = () => {
    setIsOpened(!isOpened);
  };

  return (
    <nav css={sideMenuStyle} className={isOpened ? 'opened' : 'closed'}>
      <button type="button" css={buttonStyle} onClick={handleClickButton}>
        {isOpened ? `<<<<` : `>>>>`}
      </button>
      <Link to="/archiving-list">{isOpened ? '아카이빙 리스트' : '아'}</Link>
      <Link to="/careerzip-report">{isOpened ? '커리어집 리포트' : '커'}</Link>
      <Link to="/project-management">{isOpened ? '프로젝트 관리' : '프'}</Link>
      <LinkButton href={externaURL.FAQ}>FAQ</LinkButton>
    </nav>
  );
};

export default SideMenu;
