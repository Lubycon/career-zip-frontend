import styled from '@emotion/styled';
import { BLUE, GRAY } from 'styles/colors';

interface CheckBoxProps {
  name: string;
  margin?: string;
  checked: boolean;
  onClick: VoidFunction;
}

const Wrapper = styled.div<{ margin: string }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};
  font-size: 13px;
  color: ${GRAY[3]};
  cursor: pointer;
  user-select: none;

  input[type='checkbox'] {
    display: none;
  }

  > label {
    content: '';
    width: 14px;
    height: 14px;
    background: #fff;
    border-radius: 2px;
    border: 1px solid ${GRAY[3]};
    background-color: ${GRAY[4]};
    display: inline-block;
    vertical-align: middle;
    margin-right: 6px;
    cursor: pointer;
  }

  label.checked {
    background-color: ${BLUE[1]};
    border: 1px solid ${BLUE[1]};
  }

  label.checked > span::before {
    content: url('/public/icons/checkmark.svg');
  }

  label.checked + span {
    color: ${GRAY[1]};
  }
`;

const CheckBox = ({ margin = '', name, checked, onClick }: CheckBoxProps) => {
  return (
    <Wrapper margin={margin} onClick={onClick}>
      <label htmlFor={name} className={checked ? 'checked' : undefined}>
        <input type="checkbox" className="checkbox-custom" name={name} checked={checked} readOnly />
        <span />
      </label>
      <span>{name}</span>
    </Wrapper>
  );
};

export default CheckBox;
