import { css } from '@emotion/react';

interface TUserProfile {
  name: string;
  profileImageUrl: string;
}

const UserProfile = ({ name, profileImageUrl }: TUserProfile) => {
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
