import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from 'styled-components';

import { theme } from './src/styles/theme';
import { Auth } from './src/views/auth';
import { Board } from './src/views/board';

const Stack = createNativeStackNavigator();

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Auth">
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen name="Board" component={Board} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
