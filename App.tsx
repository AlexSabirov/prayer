import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import { persistor, store } from './src/store/store';
import { theme } from './src/styles/theme';
import { Auth } from './src/views/auth';
import { Board } from './src/views/board';

const Stack = createNativeStackNavigator();

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Board">
              <Stack.Screen name="Auth" component={Auth} />
              <Stack.Screen name="Board" component={Board} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}
