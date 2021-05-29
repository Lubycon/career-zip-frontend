import { css } from '@emotion/react';
import Logo from 'components/atoms/Logo';
import SearchInput from './SearchInput';
import UserProfile from './UserProfile';

const GNB = () => {
  return (
    <div
      css={css`
        display: flex;
        padding: 10px 20px;
        background-color: gray;
      `}
    >
      <Logo />
      <SearchInput />
      <UserProfile />
    </div>
  );
};

export default GNB;
