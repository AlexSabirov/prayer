import { Text, View } from 'react-native';

import { Prayer } from '../../store/ducks/board/types';

interface PrayerItemProps {
  prayer: Prayer;
}

export function PrayerItem({ prayer }: PrayerItemProps): JSX.Element {
  return (
    <View>
      <Text>{prayer.title}</Text>
    </View>
  );
}
