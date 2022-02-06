import styled from 'styled-components/native';

interface Props {
  title: string;
  color: string;
}
export function AddButton(props: Props): JSX.Element {
  return (
    <ButtonsWrapper>
      <ButtonWrapper title={props.title} color={props.color} />
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
