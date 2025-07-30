import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EgpStack from './EgpStack';
import Header from '../components/Header';
import { useTheme } from '../theme/ThemeContext';

const Tab = createBottomTabNavigator<tabNavigatorParamList>();

function Screen() {
  const { colors } = useTheme();

  return (
    <View style={[styles.screen, { backgroundColor: colors.background }]}>
      <Text style={{ color: colors.text }}>Screen</Text>
    </View>
  );
}

export default function Navigator() {
  const { colors } = useTheme();

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.background,
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: route.name !== 'EGP',
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.inactive,
          header: () => <Header navigation={null} />,
          tabBarStyle: {
            backgroundColor: colors.card,
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

            return <Icon name={iconName} size={30} color={color} />;
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
  }
});