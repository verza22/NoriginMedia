import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

function Time({ timeDiff }: { timeDiff: string }) {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background, opacity: 0.75 }]}>
      <Text style={[styles.text, { color: colors.text }]}>{timeDiff}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
  text: {
    fontSize: 14,
    marginLeft: 8,
  },
});

export default Time;