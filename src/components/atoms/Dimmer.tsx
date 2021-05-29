import { css } from '@emotion/react';

const Dimmer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      css={css`
        position: absolute;
        display: flex;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
      `}
    >
      {children}
    </div>
  );
};

export default Dimmer;
