import { css } from '@emotion/react';
import { getLocalStorageItem } from 'utils/localstorage';

const UserProfile = () => {
  const { avatarUrl } = getLocalStorageItem('user');

  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: auto;
      `}
    >
      <img
        css={css`
          width: 45px;
          height: 45px;
          border-radius: 100%;
        `}
        alt="profile"
        src={avatarUrl || '/public/icons/profile.svg'}
      />
    </div>
  );
};

export default UserProfile;
