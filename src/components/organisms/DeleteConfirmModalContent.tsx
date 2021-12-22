import styled from '@emotion/styled';
import { Flex, Text } from 'rebass';
import { BLUE, GRAY } from 'styles/colors';

interface Props {
  onCancel: () => void;
  onDelete: () => void;
}

const Button = styled.button<{ backgroundColor: string; margin?: string }>`
  border-radius: 6px;
  font-weight: 600;
  color: #ffffff;
  background-color: ${(props) => props.backgroundColor};
  padding: 7px 16px;
  line-height: 1.4;
  margin: ${(props) => props.margin};
`;

const DeleteConfirmModalContent = ({ onCancel, onDelete }: Props) => {
  return (
    <Flex flexDirection="column">
      <Text fontSize="14" fontWeight="600" color={GRAY[1]}>
        커리어집 삭제
      </Text>
      <Flex
        flexDirection="column"
        alignItems="center"
        padding="74px 0 59px 0"
        sx={{ borderBottom: '1px solid #DFDFDF' }}
      >
        <Text fontSize="13px" color={GRAY[1]}>
          정말 삭제하시겠어요?
        </Text>
        <Text fontSize="13px" color={GRAY[1]}>
          삭제된 커리어집은 복구가 불가능합니다.
        </Text>
      </Flex>
      <Flex padding="8px 0" justifyContent="flex-end">
        <Button margin="0 12px 0 0" backgroundColor={GRAY[3]} onClick={onCancel}>
          취소
        </Button>
        <Button backgroundColor={BLUE[1]} onClick={onDelete}>
          삭제하기
        </Button>
      </Flex>
    </Flex>
  );
};

export default DeleteConfirmModalContent;
