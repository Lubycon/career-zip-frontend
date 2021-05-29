import { css } from '@emotion/react';
import { useSelector } from 'react-redux';
import { selectAccountInfo } from 'slices/account';
import Logo from 'components/atoms/Logo';
import SearchInput from './SearchInput';
import UserProfile from './UserProfile';

const GNB = () => {
  const { name, avatarUrl } = useSelector(selectAccountInfo);
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
      <UserProfile name={name} profileImageUrl={avatarUrl} />
    </div>
  );
};

export default GNB;
