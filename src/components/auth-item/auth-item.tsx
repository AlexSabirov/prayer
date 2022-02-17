import { useCallback } from 'react';
import { Field, Form } from 'react-final-form';
import { View } from 'react-native';
import styled from 'styled-components';

import { LoginBody } from '../../api/axios/type';
import { useAppDispatch } from '../../hooks/redux';
import { SignInAction } from '../../store/ducks/auth/actions';
import { GetColumnsAction, GetPrayersAction } from '../../store/ducks/board/actions';
import { AddButton } from '../../ui-components/add-button';
import { Input } from '../../ui-components/input';

export function AuthItem(): JSX.Element {
  const dispatch = useAppDispatch();

  const getColumns = () => {
    dispatch(GetColumnsAction());
  };

  const getPrayers = () => {
    dispatch(GetPrayersAction());
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

  const submit = (values) => {
    login(values);
    getColumns();
    getPrayers();
  };

  return (
    <AuthWrapper>
      <TextWrapper>Введите имя пользователя и пароль:</TextWrapper>
      <Form
        onSubmit={submit}
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
