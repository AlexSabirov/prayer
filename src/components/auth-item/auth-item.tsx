import { useState } from 'react';
import styled from 'styled-components';

import { useAppDispatch } from '../../hooks/redux';
import { SignInAction } from '../../store/ducks/auth/actions';
import { AddColumnsAction, GetColumnsAction } from '../../store/ducks/board/actions';
import { AddButton } from '../../ui-components/add-button';
import { Input } from '../../ui-components/input';

export function AuthItem(): JSX.Element {
  const [email, setEmail] = useState('alexsabirov@gmail.com');
  const [password, setPassword] = useState('0000');

  const [title, setTitle] = useState('fdfs');
  const [description, setDescription] = useState('fdsfds');

  const dispatch = useAppDispatch();

  const login = () => {
    dispatch(SignInAction({ email, password }));
  };

  const getColumns = () => {
    dispatch(GetColumnsAction());
  };

  const addColumn = () => {
    dispatch(AddColumnsAction({ title, description }));
  };

  return (
    <AuthWrapper>
      <TextWrapper>Введите имя пользователя и пароль:</TextWrapper>
      <Input placeholder="Имя пользователя: " value={email} onChangeText={setEmail} />
      <Input
        placeholder="Пароль: "
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <AddButton onPress={login} title="Принять" color="#bfb393" />
      <AddButton onPress={getColumns} title="Columns" color="#bfb393" />
      <Input placeholder="Имя колонки: " value={title} onChangeText={setTitle} />
      <Input placeholder="Описание: " value={description} onChangeText={setDescription} />
      <AddButton onPress={addColumn} title="addColumn" color="#bfb393" />
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
