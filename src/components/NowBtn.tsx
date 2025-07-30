import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

function NowBtn({ now }: { now: () => void }) {
  const { colors } = useTheme();

  return (
    <TouchableOpacity style={[styles.btn, {backgroundColor: colors.primary}]} onPress={()=> now()}>
        <Text style={{color: colors.text}}>NOW</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    position: "absolute",
    bottom: 20,
    right: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6
  }
});

export default NowBtn;