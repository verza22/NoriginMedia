import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigator from './src/navigation/Navigator';
import Toast from 'react-native-toast-message';
import { ThemeProvider, useTheme } from './src/theme/ThemeContext';

function AppContainer() {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Navigator />
      <Toast />
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContainer />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});