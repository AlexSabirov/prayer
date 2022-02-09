import { ButtonProps } from 'react-native';
import styled from 'styled-components/native';

export function AddButton(props: ButtonProps): JSX.Element {
  return (
    <ButtonsWrapper>
      <ButtonWrapper {...props} />
    </ButtonsWrapper>
  );
}

const ButtonWrapper = styled.Button`
  align-self: center;
  align-items: center;
`;

const ButtonsWrapper = styled.View`
  overflow: hidden;
  border-radius: 15px;
  width: 60%;
  align-self: center;
`;
