import styled from 'styled-components';

import { AddButton } from '../../ui-components/add-button';
import { Input } from '../../ui-components/input';

export function Auth(): JSX.Element {
  return (
    <AuthWrapper>
      <TextWrapper>Введите имя пользователя и пароль:</TextWrapper>
      <Input placeholder="Имя пользователя: " />
      <Input placeholder="Пароль: " />
      <AddButton title="Принять" color="#bfb393" />
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
