import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function RightGradient() {
  return (
    <LinearGradient
      colors={['transparent', 'rgba(0,0,0,0.8)']}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 0 }}
      style={styles.rightGradient}
    />
  );
}

const styles = StyleSheet.create({
  rightGradient: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: -10,
    width: 10,
    zIndex: 2,
  },
});

export default RightGradient;