import React from 'react';
import { StyleSheet, Text } from 'react-native';
import DaySelector from '../sections/principal/DaySelector';
import MovieSelector from '../sections/principal/MovieSelector';

function Principal() {

    return <>
        <DaySelector/>
        <MovieSelector/>
    </>;
}

const styles = StyleSheet.create({
  container: {
  },
});

export default Principal;
