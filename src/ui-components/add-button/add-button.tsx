import { Text, TouchableOpacity } from 'react-native';
// import styled from 'styled-components/native';

interface Props {
  title: string;
}
export function AddButton(props: Props): JSX.Element {
  return (
    <TouchableOpacity>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
}

// const ButtonWrapper = styled(TouchableOpacity)`
//   background-color: '#BFB393';
//   width: '30%';
//   align-self: 'center';
//   align-items: 'center';
// `;
