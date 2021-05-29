import { css } from '@emotion/react';

interface TUserProfile {
  name: string;
  profileImageUrl: string;
}

const defaultAvatarUrl =
  'https://cdn6.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumbCard.jpg';

const UserProfile = ({ name, profileImageUrl = defaultAvatarUrl }: TUserProfile) => {
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
        src={profileImageUrl}
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
