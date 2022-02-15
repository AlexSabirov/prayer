import styled from 'styled-components';

import { useAppSelector } from '../../hooks/redux';
import { selectorColumns } from '../../store/ducks/board/selectors';
import { ColumnItem } from '../column-item';

export function ColumnList(): JSX.Element {
  const columns = useAppSelector(selectorColumns);

  return (
    <ListWrapper>
      {Object.values(columns).map((column) => {
        return <ColumnItem key={column.id} column={column} />;
      })}
    </ListWrapper>
  );
}

const ListWrapper = styled.View`
  padding: 15px;
  background-color: ${(props) => props.theme.colors.background};
`;
