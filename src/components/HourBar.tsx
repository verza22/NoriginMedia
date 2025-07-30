import React, { useMemo } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { HOURS_TOTAL, PIXELS_PER_MINUTE } from '../config';
import { useTheme } from '../theme/ThemeContext';

function HourBar() {
  const { colors } = useTheme();

  const hoursArray = useMemo(() => {
    const result = [];
    for (let i = 0; i < HOURS_TOTAL; i++) {
      const label = i.toString().padStart(2, '0') + ':00';
      result.push(
        <View key={i} style={[styles.hourBlock, { borderRightColor: colors.sidebarBorder, width: PIXELS_PER_MINUTE * 60 }]}>
          <Text style={[styles.hourText, { color: colors.text }]}>{label}</Text>
        </View>
      );
    }
    return result;
  }, [HOURS_TOTAL, PIXELS_PER_MINUTE, colors]);

  return (
    <View style={[styles.timelineRow, styles.hourRow, { borderBottomColor: colors.sidebarBorder, backgroundColor: colors.sidebarBackground }]}>
      {hoursArray}
    </View>
  );
}

const styles = StyleSheet.create({
  timelineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    height: 80,
  },
  hourRow: {
    height: 40,
    borderBottomWidth: 1,
  },
  hourBlock: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    height: '100%',
  },
  hourText: {
    fontSize: 12,
  },
});

export default HourBar;