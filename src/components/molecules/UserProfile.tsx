import { css } from '@emotion/react';
import { useSelector } from 'react-redux';
import { RootState } from 'slices';

const defaultAvatarUrl =
  'https://cdn6.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumbCard.jpg';

const UserProfile = () => {
  const { name, avatarUrl = defaultAvatarUrl } = useSelector((state: RootState) => state.account);
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
        src={avatarUrl}
      />
      <span
        css={css`
          font-weight: bold;
          margin-left: 10px;
        `}
      >
        {name}
      </span>
    </div>
  );
};

export default UserProfile;
