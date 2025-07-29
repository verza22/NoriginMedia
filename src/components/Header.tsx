import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigationState } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header({ navigation }: {navigation: NativeStackNavigationProp<EgpStackParamList, keyof EgpStackParamList> | null}) {
  
  const routeName = useNavigationState((state) => {
    const route = state.routes[state.index];
    
    if (route.state && typeof route.state.index === "number") {
      const nestedRoute = route.state.routes[route.state.index];
      return nestedRoute.name;
    }
    
    return route.name;
  });
  const isDetail = navigation !== null && routeName === "Movie";

  const goBack = () => {
    if(navigation){
      navigation.goBack();
    }
  }
  
  return (
    <View style={[styles.container, {position: isDetail ? "absolute" : "relative"}]}>

      {
        isDetail ? 
        <TouchableOpacity onPress={()=> goBack()}>
          <Icon name="chevron-left" size={30} color="#fff" />
        </TouchableOpacity> : 
        <TouchableOpacity>
          <Icon name="account" size={28} color="#fff" />
        </TouchableOpacity>
      }

      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <TouchableOpacity>
        <Icon name="magnify" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    width: '100%'
  },
  logo: {
    width: 100,
    height: 30,
  },
});