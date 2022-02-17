import { Field, Form } from 'react-final-form';
import { Button, View } from 'react-native';
import styled from 'styled-components';

import { useAppDispatch } from '../../hooks/redux';
import { useToggle } from '../../hooks/useToggle';
import { AddColumnsAction } from '../../store/ducks/board/actions';
import { AddButton } from '../../ui-components/add-button';
import { Input } from '../../ui-components/input';
import { ColumnList } from '../columns-list/columns-list';

export function BoardItem(): JSX.Element {
  const { visible, toggle } = useToggle(false);

  const dispatch = useAppDispatch();

  const addColumn = (values) => {
    dispatch(AddColumnsAction(values));
  };

  const initialValues = {
    title: '',
    description: '',
  };

  const addColumnAndClose = (values) => {
    addColumn(values);
    toggle();
  };
  return (
    <BoardWrapper>
      {!visible ? (
        <BoardMenuWrapper>
          <View>
            <TextWrapper>My Desk</TextWrapper>
          </View>
          <BoardAddButtonWrapper>
            <Button title="+" onPress={toggle} />
          </BoardAddButtonWrapper>
        </BoardMenuWrapper>
      ) : (
        <>
          <Form
            onSubmit={addColumnAndClose}
            initialValues={initialValues}
            render={({ handleSubmit }) => {
              return (
                <View>
                  <Field
                    name="title"
                    render={(props) => (
                      <Input {...props.input} placeholder="Имя колонки: " />
                    )}
                  />
                  <Field
                    name="description"
                    render={(props) => (
                      <Input {...props.input} placeholder="Описание: " />
                    )}
                  />
                  <AddButton title="Принять" onPress={handleSubmit} color="#bfb393" />
                </View>
              );
            }}
          />
          <AddButton title="Отменить" onPress={toggle} color="#bfb393" />
        </>
      )}
      <ColumnList />
    </BoardWrapper>
  );
}

const BoardWrapper = styled.View`
  background-color: ${(props) => props.theme.colors.background};
`;

const TextWrapper = styled.Text`
  text-align: center;
  padding: 22px 0 22px 0;
  border: ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.background};
`;

const BoardMenuWrapper = styled.View`
  width: 100%;
  position: relative;
`;

const BoardAddButtonWrapper = styled.View`
  position: absolute;
  top: 25%;
  right: 20px;
`;
