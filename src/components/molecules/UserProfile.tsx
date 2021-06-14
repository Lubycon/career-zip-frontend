import { useState } from 'react';
import { Flex } from 'rebass';
import ProfileImage from 'components/atoms/ProfileImage';
import AccountMenu from 'components/organisms/AccountMenu';
import { getLocalStorageItem } from 'utils/localstorage';
import useLoginStatus from 'hooks/useLoginStatus';

const UserProfile = () => {
  const { isLoggedIn } = useLoginStatus();
  const [isAccountMenuVisible, setIsAccountMenuVisible] = useState(false);

  const handleToggleMenu = () => {
    setIsAccountMenuVisible(!isAccountMenuVisible);
  };

  const handleCloseMenu = () => {
    setIsAccountMenuVisible(false);
  };
  if (!isLoggedIn) return null;
  const { avatarUrl } = getLocalStorageItem('user');
  return (
    <Flex justifyContent="center" alignItems="center" marginLeft="auto">
      <Flex flexDirection="column">
        <button type="button" onClick={handleToggleMenu}>
          <ProfileImage src={avatarUrl ?? undefined} />
        </button>
        <AccountMenu isVisible={isAccountMenuVisible} onClose={handleCloseMenu} />
      </Flex>
    </Flex>
  );
};

export default UserProfile;
