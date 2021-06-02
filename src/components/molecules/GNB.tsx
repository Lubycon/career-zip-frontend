import { css } from '@emotion/react';
import GrayLogo from 'components/atoms/GrayLogo';
import SearchInput from './SearchInput';
import UserProfile from './UserProfile';

const GNB = () => {
  return (
    <div
      css={css`
        display: flex;
        padding: 0 240px;
        background-color: gray;
      `}
    >
      <GrayLogo />
      <SearchInput />
      <UserProfile />
    </div>
  );
};

export default GNB;
