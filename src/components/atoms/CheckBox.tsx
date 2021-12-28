import styled from '@emotion/styled';
import { BLUE, GRAY } from 'styles/colors';

interface CheckBoxProps {
  name?: string;
  margin?: string;
  checked: boolean;
  onClick: (...args: any[]) => void;
  width?: string;
  height?: string;
  padding?: string;
  border?: string;
  borderRadius?: string;
  fontColor?: string;
  checkedFontColor?: string;
  type?: 'check' | 'square';
  onlyCheckBox?: boolean;
}

const Wrapper = styled.div<{
  margin: string;
  width: string;
  height: string;
  border: string;
  borderRadius: string;
  fontColor: string;
  type: string;
  checkedFontColor: string;
  padding: string;
}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};
  font-size: 13px;
  color: ${(props) => props.fontColor};
  cursor: pointer;
  user-select: none;
  padding: ${(props) => props.padding};
  line-height: 1;

  input[type='checkbox'] {
    display: none;
  }

  > label {
    content: '';
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background: #fff;
    border-radius: ${(props) => props.borderRadius};
    border: ${(props) => props.border};
    background-color: ${GRAY[4]};
    display: inline-block;
    vertical-align: middle;
    margin-right: 6px;
    cursor: pointer;
  }

  label.checked {
    display: flex;
    justify-content: center;
    align-items: center;

    ${(props) =>
      props.type === 'check' &&
      `
      background-color: ${BLUE[1]};
      border: 1px solid ${BLUE[1]}; 
    `};
    ${(props) =>
      props.type === 'squre' &&
      `
      background-color: #ffffff; 
    `};
  }

  ${(props) =>
    props.type === 'check' &&
    `label.checked > span::before {
    content: url('/public/icons/checkmark.svg');
  }`}

  ${(props) =>
    props.type === 'square' &&
    `
    label.checked > span {
    min-width: 8px;
    min-height: 8px;
    background: ${BLUE[1]};
    border-radius: 2px;
  }
  `};

  label.checked + span {
    color: ${(props) => props.checkedFontColor};
  }
`;

const CheckBox = ({
  margin = '',
  name,
  checked = false,
  onClick,
  width = '14px',
  height = '14px',
  padding = '0',
  border = `1px solid ${GRAY[3]}`,
  borderRadius = '2px',
  fontColor = `${GRAY[3]}`,
  checkedFontColor = `${GRAY[1]}`,
  type = 'check',
  onlyCheckBox = false,
}: CheckBoxProps) => {
  return (
    <Wrapper
      type={type}
      margin={margin}
      onClick={onClick}
      width={width}
      height={height}
      border={border}
      borderRadius={borderRadius}
      fontColor={fontColor}
      checkedFontColor={checkedFontColor}
      padding={padding}
    >
      <label htmlFor={name} className={checked ? 'checked' : undefined}>
        <input type="checkbox" className="checkbox-custom" name={name} checked={checked} readOnly />
        <span />
      </label>
      {!onlyCheckBox && <span>{name}</span>}
    </Wrapper>
  );
};

export default CheckBox;
