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
            π κ³΅μ  λ§ν¬κ° λ³΅μ¬ λμμ΅λλ€!
          </Text>
        ),
      });
      throw new Error();
    } catch (err) {
      <Text fontWeight="bold" fontSize="20px" color={DARK_GRAY[2]} padding="0 85px">
        λ¬Έμ κ° λ°μνμ¬ λ§ν¬λ₯Ό λ³΅μ¬νμ§ λͺ»νμ΄μ.π₯ λ€μ μλν΄μ£ΌμΈμ.
      </Text>;
    }
  };

  return {
    copyLink,
  };
};

export default useCopyLink;
