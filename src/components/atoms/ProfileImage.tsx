import styled from '@emotion/styled';

const StyledImage = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 100%;
`;

interface ProfileImageProps {
  src: string;
}

const ProfileImage = ({ src = '/public/icons/profile.svg' }: ProfileImageProps) => {
  return <StyledImage alt="profile" src={src} />;
};

export default ProfileImage;
