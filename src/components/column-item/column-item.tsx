import { useState } from 'react';
import { Button, Text } from 'react-native';
import styled from 'styled-components';

import { useAppDispatch } from '../../hooks/redux';
import { useToggle } from '../../hooks/useToggle';
import { UpdateColumnAction } from '../../store/ducks/board/actions';
import { Column } from '../../store/ducks/board/types';
import { Input } from '../../ui-components/input';

interface ColumnItemProps {
  column: Column;
}

export function ColumnItem({ column }: ColumnItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { visible, toggle } = useToggle(false);

  const updateColumn = () =>
    dispatch(UpdateColumnAction({ title, description, id: column.id }));

  const updateColumnAndClose = () => {
    updateColumn();
    toggle();
  };

  return (
    <ItemWrapper>
      {!visible ? (
        <>
          <Text>{column.title}</Text>
          <Button title="edit" onPress={toggle} />
        </>
      ) : (
        <>
          <Input placeholder="Имя колонки: " value={title} onChangeText={setTitle} />
          <Input
            placeholder="Описание: "
            value={description}
            onChangeText={setDescription}
          />
          <Button title="accept" onPress={updateColumnAndClose} />
        </>
      )}
    </ItemWrapper>
  );
}

const ItemWrapper = styled.View`
  background-color: ${(props) => props.theme.colors.background};
  border: ${(props) => props.theme.colors.border};
  border-radius: 4px;
  padding: 20px 15px;
  margin-bottom: 10px;
`;
