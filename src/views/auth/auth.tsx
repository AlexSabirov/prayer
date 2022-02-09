import { useState } from 'react';
import styled from 'styled-components';

import { AddButton } from '../../ui-components/add-button';
import { Input } from '../../ui-components/input';

export function Auth(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    null;
  };

  return (
    <AuthWrapper>
      <TextWrapper>Введите имя пользователя и пароль:</TextWrapper>
      <Input placeholder="Имя пользователя: " value={email} onChangeText={setEmail} />
      <Input placeholder="Пароль: " value={password} onChangeText={setPassword} />
      <AddButton onPress={login} title="Принять" color="#bfb393" />
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
