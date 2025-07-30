import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import moment from 'moment';
import { NOW_INDICATOR_UPDATE_INTERVAL, PIXELS_PER_MINUTE } from '../config';
import { useTheme } from '../theme/ThemeContext';

const getCurrentLeft = () => {
  const currentMinutes = moment().hours() * 60 + moment().minutes();
  return currentMinutes * PIXELS_PER_MINUTE;
};

const NowIndicator = () => {
  const { colors } = useTheme();
  const [left, setLeft] = useState(getCurrentLeft);

  useEffect(() => {
    const updatePosition = () => {
      setLeft(getCurrentLeft());
    };

    updatePosition();
    const intervalId = setInterval(updatePosition, NOW_INDICATOR_UPDATE_INTERVAL);

    return () => clearInterval(intervalId);
  }, []);

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