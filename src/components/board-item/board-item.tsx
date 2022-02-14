import { View } from 'react-native';
import styled from 'styled-components';

import { ColumnList } from '../columns-list/columns-list';

export function BoardItem(): JSX.Element {
  return (
    <View>
      <TextWrapper>My Desk</TextWrapper>
      <ColumnList />
    </View>
  );
}

const TextWrapper = styled.Text`
  text-align: center;
  padding: 22px 0 22px 0;
  border: ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.background};
`;
