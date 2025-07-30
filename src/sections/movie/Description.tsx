import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

function Description({ description }: { description: string }) {
  const { colors } = useTheme();
  const [showMore, setShowMore] = useState(false);

  return <>
    <Text style={[styles.description, { color: colors.gray2 }]} numberOfLines={showMore ? undefined : 5}>
      {description}
    </Text>
    <TouchableOpacity onPress={() => setShowMore(!showMore)}>
      <Text style={[styles.more, { color: colors.primary }]}>
        {showMore ? 'less' : 'more'}
      </Text>
    </TouchableOpacity>
  </>
}

const styles = StyleSheet.create({
  description: {
    marginHorizontal: 16,
    marginTop: 12,
    fontSize: 14,
  },
  more: {
    fontSize: 14,
    marginHorizontal: 16,
    marginTop: 6,
  }
});

export default Description;