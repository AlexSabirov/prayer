import { useState } from 'react';
import { Button, View } from 'react-native';
import styled from 'styled-components';

import { useAppDispatch } from '../../hooks/redux';
import { useToggle } from '../../hooks/useToggle';
import { AddColumnsAction } from '../../store/ducks/board/actions';
import { Input } from '../../ui-components/input';
import { ColumnList } from '../columns-list/columns-list';

export function BoardItem(): JSX.Element {
  const { visible, toggle } = useToggle(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useAppDispatch();

  const addColumn = () => {
    dispatch(AddColumnsAction({ title, description }));
  };

  const addColumnAndClose = () => {
    addColumn();
    toggle();
  };
  return (
    <View>
      {!visible ? (
        <>
          <TextWrapper>My Desk</TextWrapper>
          <Button title="+" onPress={toggle} />
        </>
      ) : (
        <>
          <Input placeholder="Имя колонки: " value={title} onChangeText={setTitle} />
          <Input
            placeholder="Описание: "
            value={description}
            onChangeText={setDescription}
          />
          <Button title="+" onPress={addColumnAndClose} />
          <Button title="-" onPress={toggle} />
        </>
      )}
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
