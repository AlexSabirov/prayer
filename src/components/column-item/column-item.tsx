import { Text } from 'react-native';
import styled from 'styled-components';

import { Column } from '../../type/data';

interface ColumnItemProps {
  column: Column;
}

export function ColumnItem({ column }: ColumnItemProps): JSX.Element {
  return (
    <ItemWrapper>
      <Text>{column.title}</Text>
    </ItemWrapper>
  );
}

const ItemWrapper = styled.View`
  background-color: ${(props) => props.theme.colors.background};
  border: ${(props) => props.theme.colors.border};
`;
