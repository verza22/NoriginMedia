import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigator from './src/navigation/Navigator';
import Toast from 'react-native-toast-message';

function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Navigator />
      <Toast />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
});

export default App;
