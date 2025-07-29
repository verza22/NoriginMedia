import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function Description({description}: {description: string}) {

    const [showMore, setShowMore] = useState(false);

    return <>
        <Text style={styles.description} numberOfLines={showMore ? undefined : 5}>
            {description}
        </Text>
        <TouchableOpacity onPress={() => setShowMore(!showMore)}>
            <Text style={styles.more}>{showMore ? 'less' : 'more'}</Text>
        </TouchableOpacity>
    </>
}

const styles = StyleSheet.create({
  description: {
    marginHorizontal: 16,
    marginTop: 12,
    fontSize: 14,
    color: '#eaeaea',
  },
  more: {
    color: '#b454e9',
    fontSize: 14,
    marginHorizontal: 16,
    marginTop: 6,
  }
});

export default Description;