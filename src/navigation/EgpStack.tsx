import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Principal from './../views/Principal';
import Movie from './../views/Movie';
import Header from '../components/Header';

const Stack = createNativeStackNavigator<EgpStackParamList>();

export default function EgpStack() {
  return (
    <Stack.Navigator 
      screenOptions={({ route, navigation }) => ({
        headerShown: true,
        header: () => <Header navigation={navigation} />,
      })}
    >
      <Stack.Screen name="Principal" component={Principal}/>
      <Stack.Screen name="Movie" component={Movie}/>
    </Stack.Navigator>
  );
}