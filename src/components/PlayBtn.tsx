import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '../theme/ThemeContext';

function PlayBtn() {
  const { colors } = useTheme();

  return (
    <TouchableOpacity style={styles.btn}>
      <Icon
        style={[styles.icon, { color: colors.text }]}
        name="play-circle"
        size={80}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    margin: 'auto',
  },
  icon: {
    opacity: 0.75,
  },
});

export default PlayBtn;