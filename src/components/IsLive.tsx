import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '../theme/ThemeContext';

function IsLive() {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Icon style={{ color: colors.liveIcon }} name="circle" size={20} />
      <Text style={[styles.text, { color: colors.text }]}>LIVE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    opacity: 0.75,
    paddingVertical: 6,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 16,
    marginLeft: 8,
  },
});

export default IsLive;