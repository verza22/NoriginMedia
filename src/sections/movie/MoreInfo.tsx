import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

function MoreInfo({ cast, creators }: { cast: string; creators: string }) {
  const { colors } = useTheme();

  return (
    <View style={styles.credits}>
      <Text style={[styles.creditLine, { color: colors.gray2 }]}>
        Cast: <Text style={[styles.creditValue, { color: colors.gray2 }]}>{cast}</Text>
      </Text>
      <Text style={[styles.creditLine, { color: colors.gray2 }]}>
        Creators: <Text style={[styles.creditValue, { color: colors.gray2 }]}>{creators}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  credits: {
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 30,
  },
  creditLine: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 6,
  },
  creditValue: {
    fontWeight: 'normal',
  },
});

export default MoreInfo;