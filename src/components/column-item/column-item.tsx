import { Field, Form } from 'react-final-form';
import { Button, Text, View } from 'react-native';
import styled from 'styled-components';

import { useAppDispatch } from '../../hooks/redux';
import { useToggle } from '../../hooks/useToggle';
import { RemoveColumnAction, UpdateColumnAction } from '../../store/ducks/board/actions';
import { Column } from '../../store/ducks/board/types';
import { AddButton } from '../../ui-components/add-button';
import { Input } from '../../ui-components/input';

interface ColumnItemProps {
  column: Column;
}

export function ColumnItem({ column }: ColumnItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { visible, toggle } = useToggle(false);

  const updateColumn = (values) => dispatch(UpdateColumnAction(values));

  const updateColumnAndClose = (values) => {
    updateColumn({ title: values.title, description: values.description, id: column.id });
    toggle();
  };

  const removeColumn = () => dispatch(RemoveColumnAction({ id: column.id }));

  const initialValues = {
    title: '',
    description: '',
  };

  return (
    <ItemWrapper>
      {!visible ? (
        <ColumnTitleWrapper>
          <View>
            <Text>{column.title}</Text>
          </View>
          <TitleButtonWrapper>
            <View>
              <Button title="Edit" onPress={toggle} />
            </View>
            <View>
              <Button title="Del" onPress={removeColumn} />
            </View>
          </TitleButtonWrapper>
        </ColumnTitleWrapper>
      ) : (
        <>
          <Form
            onSubmit={updateColumnAndClose}
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
                  <AddButton title="Изменить" onPress={handleSubmit} color="#bfb393" />
                  <AddButton title="Отменить" onPress={toggle} color="#bfb393" />
                </View>
              );
            }}
          />
        </>
      )}
    </ItemWrapper>
  );
}

const ItemWrapper = styled.View`
  background-color: ${(props) => props.theme.colors.background};
  border: ${(props) => props.theme.colors.border};
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 10px;
`;

const ColumnTitleWrapper = styled.View`
  width: 100%;
  position: relative;
`;

const TitleButtonWrapper = styled.View`
  position: absolute;
  top: -7px;
  right: -15px;
  flex-direction: row;
`;
