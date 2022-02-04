import styled from 'styled-components/native';

interface InputProps {
  placeholder: string;
}

export function Input(props: InputProps): JSX.Element {
  return <InputWrapper {...props} />;
}

const InputWrapper = styled.TextInput`
  border: ${(props) => props.theme.colors.border};
  border-radius: 10px;
  padding: 15px 15px 15px 52px;
  font-family: SF UI Text;
  font-size: ${(props) => props.theme.fontSize.text};
  line-height: 20px;
  color: ${(props) => props.theme.colors.text};
`;
