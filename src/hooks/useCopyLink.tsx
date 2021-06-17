import { useToast } from 'context/Toast';
import { Text } from 'rebass';
import { DARK_GRAY } from 'styles/colors';

const useCopyLink = () => {
  const { showToast } = useToast();

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText('https://career-zip.com?utm_source=share');
      showToast({
        message: (
          <Text fontWeight="bold" fontSize="20px" color={DARK_GRAY[2]} padding="0 85px">
            🔗 공유 링크가 복사 되었습니다!
          </Text>
        ),
      });
      throw new Error();
    } catch (err) {
      <Text fontWeight="bold" fontSize="20px" color={DARK_GRAY[2]} padding="0 85px">
        문제가 발생하여 링크를 복사하지 못했어요.😥 다시 시도해주세요.
      </Text>;
    }
  };

  return {
    copyLink,
  };
};

export default useCopyLink;
