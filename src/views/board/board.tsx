import { SafeAreaView } from 'react-native-safe-area-context';

import { BoardItem } from '../../components/board-item';

export function Board(): JSX.Element {
  return (
    <SafeAreaView>
      <BoardItem />
    </SafeAreaView>
  );
}
