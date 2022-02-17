import { useCallback } from 'react';
import { Field, Form } from 'react-final-form';
import { View } from 'react-native';
import styled from 'styled-components';

import { LoginBody } from '../../api/axios/type';
import { useAppDispatch } from '../../hooks/redux';
import { SignInAction } from '../../store/ducks/auth/actions';
import { GetColumnsAction } from '../../store/ducks/board/actions';
import { AddButton } from '../../ui-components/add-button';
import { Input } from '../../ui-components/input';

export function AuthItem(): JSX.Element {
  const dispatch = useAppDispatch();

  const getColumns = () => {
    dispatch(GetColumnsAction());
  };

  const initialValues: LoginBody = {
    email: '',
    password: '',
  };

  const login = useCallback(
    (values) => {
      dispatch(SignInAction(values));
    },
    [dispatch, SignInAction],
  );

  return (
    <AuthWrapper>
      <TextWrapper>Введите имя пользователя и пароль:</TextWrapper>
      <Form
        onSubmit={login}
        initialValues={initialValues}
        render={({ handleSubmit }) => {
          return (
            <View>
              <Field
                name="email"
                render={(props) => (
                  <Input {...props.input} placeholder="Имя пользователя: " />
                )}
              />
              <Field
                name="password"
                render={(props) => <Input {...props.input} placeholder="Пароль " />}
              />
              <AddButton onPress={handleSubmit} title="Принять" color="#bfb393" />
            </View>
          );
        }}
      />
      <AddButton onPress={getColumns} title="Columns" color="#bfb393" />
    </AuthWrapper>
  );
}

const AuthWrapper = styled.View`
  padding: 10px 15px;
`;

const TextWrapper = styled.Text`
  font-size: ${(props) => props.theme.fontSize.text};
  margin-bottom: 10px;
`;
