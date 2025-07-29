import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EgpStack from "./EgpStack";
import Header from '../components/Header';

const Tab = createBottomTabNavigator<tabNavigatorParamList>();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'black'
  },
};

function Screen() {
  return <View style={styles.screen}><Text style={styles.text}>Screen</Text></View>;
}

export default function Navigator() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: route.name !== "EGP",
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#b454e9',
          tabBarInactiveTintColor: '#999',
          header: () => <Header navigation={null} />,
          tabBarStyle: {
            backgroundColor: '#1E1E1E',
            borderTopWidth: 0,
          },
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              default:
              case 'Home':
                iconName = 'home';
                break;
              case 'Play':
                iconName = 'youtube-tv';
                break;
              case 'EGP':
                iconName = 'view-list';
                break;
              case 'Reset':
                iconName = 'replay';
                break;
              case 'Settings':
                iconName = 'book-open-variant';
                break;
            }

            return <Icon name={iconName as string} size={30} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={Screen} />
        <Tab.Screen name="Play" component={Screen} />
        <Tab.Screen name="EGP" component={EgpStack} />
        <Tab.Screen name="Reset" component={Screen} />
        <Tab.Screen name="Settings" component={Screen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "black"
  },
  text: {
    color: "white"
  }
});