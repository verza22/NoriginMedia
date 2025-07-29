import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigator from './src/navigation/Navigator';

function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Navigator/>
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
