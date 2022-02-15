import { useCallback } from 'react';
import { Field, Form } from 'react-final-form';
import styled from 'styled-components';

import { useAppDispatch } from '../../hooks/redux';
import { SignInAction } from '../../store/ducks/auth/actions';
import { GetColumnsAction } from '../../store/ducks/board/actions';
import { AddButton } from '../../ui-components/add-button';
import { Input } from '../../ui-components/input';

interface LoginField {
  email: string;
  password: string;
}

export function AuthItem(): JSX.Element {
  const dispatch = useAppDispatch();

  const login = useCallback(
    (values: LoginField) => {
      console.log(`VALUES: `, values);
      dispatch(SignInAction(values));
    },
    [dispatch, SignInAction],
  );

  const submit = (values) => login(values);

  const getColumns = () => {
    dispatch(GetColumnsAction());
  };

  return (
    <AuthWrapper>
      <TextWrapper>Введите имя пользователя и пароль:</TextWrapper>
      <Form
        onSubmit={submit}
        render={() => (
          <>
            <Field
              name="email"
              render={(props) => <Input {...props} placeholder="Имя пользователя: " />}
            />
            <Field
              name="password"
              render={(props) => <Input {...props} placeholder="Пароль " />}
            />
            <AddButton onPress={submit} title="Принять" color="#bfb393" />
          </>
        )}
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
