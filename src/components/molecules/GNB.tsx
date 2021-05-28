import { css } from '@emotion/react';
import Logo from 'components/atoms/Logo';
import SearchInput from './SearchInput';
import UserProfile from './UserProfile';

const GNB = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        padding: 10px 20px;
        background-color: gray;
      `}
    >
      <Logo />
      <SearchInput />
      <UserProfile
        name="Junimo"
        profileImageUrl="https://cdn6.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumbCard.jpg"
      />
    </div>
  );
};

export default GNB;
