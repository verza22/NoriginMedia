import React from 'react';
import { View, StyleSheet } from 'react-native';
import moment from 'moment';
import { PIXELS_PER_MINUTE } from '../config';
import { useTheme } from '../theme/ThemeContext';

const NowIndicator = () => {
  const { colors } = useTheme();
  const currentMinutes = moment().hours() * 60 + moment().minutes();
  const left = currentMinutes * PIXELS_PER_MINUTE;

  return (
    <View style={[styles.line, { left, backgroundColor: colors.primary }]} />
  );
};

const styles = StyleSheet.create({
  line: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 1,
    zIndex: 10,
  },
});

export default NowIndicator;