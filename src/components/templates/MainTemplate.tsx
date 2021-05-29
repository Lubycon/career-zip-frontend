import { css } from '@emotion/react';
import GNB from 'components/molecules/GNB';
import SideMenu from 'components/molecules/SideMenu';
import { flexColumn } from 'styles/element';

const MainTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div css={flexColumn}>
      <GNB />
      <div
        css={css`
          display: flex;
          height: calc(100vh - 65px);
        `}
      >
        <SideMenu />
        <div
          css={css`
            flex: 1;
            max-width: 100vw;
            padding: 20px;
            background-color: greenyellow;
          `}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainTemplate;
