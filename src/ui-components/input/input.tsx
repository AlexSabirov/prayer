import styled from 'styled-components/native';

export function Input(): JSX.Element {
  return <InputWrapper placeholder="Add a prayer..." />;
}

const InputWrapper = styled.TextInput`
  background: #ffffff;
  border: ${(props) => props.theme.colors.border};
  border-radius: 10px;
  padding: 15px 15px 15px 52px;
  font-family: SF UI Text;
  font-size: ${(props) => props.theme.fontSize.text};
  line-height: 20px;
  color: ${(props) => props.theme.colors.text};
`;
