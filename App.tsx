import React from 'react';
import 'react-native-gesture-handler';
import {Navigation} from './src/navigation/Navigation';
import {ThemeProvider} from './src/context/themeContext/ThemeContext';

// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DarkTheme.colors,
//     // primary: string;
//     background: 'yellow',
//     // card: string;
//     // text: string;
//     // border: string;
//     // notification: string;
//   },
// };
// const MyTheme = {
//   ...DefaultTheme,
// };

const App = () => {
  return (
    <AppState>
      <Navigation />
    </AppState>
  );
};

const AppState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
