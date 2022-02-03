import { Text, View } from 'react-native';

import { AddButton } from '../../ui-components/add-button';
import { Input } from '../../ui-components/input';

export function Desk(): JSX.Element {
  return (
    <View>
      <Text>My Desk</Text>
      <AddButton />
      <Input />
    </View>
  );
}
