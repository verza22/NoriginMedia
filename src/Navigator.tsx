import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Principal from './views/Principal';

const Tab = createBottomTabNavigator();

function Screen2() {
  return <View style={styles.screen}><Text>Pantalla 2</Text></View>;
}
function Screen3() {
  return <View style={styles.screen}><Text>Pantalla 3</Text></View>;
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: '#999',
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Buscar') {
              iconName = 'youtube-tv';
            } else if (route.name === 'Favoritos') {
              iconName = 'view-list';
            } else if (route.name === 'Perfil') {
              iconName = 'replay';
            } else if (route.name === 'Ajustes') {
              iconName = 'book-open-variant';
            }

            return <Icon name={iconName as string} size={30} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={Screen2} />
        <Tab.Screen name="Buscar" component={Screen2} />
        <Tab.Screen name="Favoritos" component={Principal} />
        <Tab.Screen name="Perfil" component={Screen2} />
        <Tab.Screen name="Ajustes" component={Screen2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});