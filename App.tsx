import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { Desk } from './src/components/desk';
import { theme } from './src/styles/theme';

export const App = function (): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Desk />
      </SafeAreaView>
    </ThemeProvider>
  );
};
