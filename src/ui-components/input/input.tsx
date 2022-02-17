import styled from 'styled-components/native';

export function Input(props): JSX.Element {
  return <InputWrapper {...props} />;
}

const InputWrapper = styled.TextInput`
  border: ${(props) => props.theme.colors.border};
  background-color: #ffffff;
  border-radius: 10px;
  padding: 15px 15px 15px 52px;
  font-family: SF UI Text;
  font-size: ${(props) => props.theme.fontSize.text};
  line-height: 20px;
  color: ${(props) => props.theme.colors.text};
  margin: 5px 15px;
`;
