import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import PlayBtn from '../../components/PlayBtn';
import IsLive from '../../components/IsLive';
import Time from '../../components/Time';

const screenHeight = Dimensions.get('window').height;

function ImageCover({isLive, isPast, timeDiff} : {isLive: boolean, isPast: boolean, timeDiff: string}) {

    return <View style={styles.containerImg}>
        <Image
            source={require('../../assets/movie.jpg')}
            style={styles.image}
            resizeMode="cover"
        />
        <LinearGradient
            colors={['rgba(0,0,0,0.8)', 'transparent']}
            style={[styles.gradient, styles.topGradient]}
        />
        <LinearGradient
            colors={['transparent', 'rgba(0,0,0,1)']}
            style={[styles.gradient, styles.bottomGradient]}
        />
        {
          (isLive || isPast) && <View style={styles.iconView}><PlayBtn /></View>
        }
        {
          isLive && <View style={styles.liveView}><IsLive /></View>
        }
        {
          isPast && <View style={styles.liveView}><Time timeDiff={timeDiff}/></View>
        }
    </View>
}

const styles = StyleSheet.create({
  containerImg: {
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: screenHeight * 0.35,
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: 100,
    zIndex: 2,
  },
  topGradient: {
    top: 0,
  },
  bottomGradient: {
    bottom: 0,
  },
  iconView: {
    position: "absolute",
    zIndex: 2,
    alignSelf: "center",
    bottom: 0,
    top: 0
  },
  liveView: {
    position: "absolute",
    zIndex: 2,
    right: 1,
    top: "20%"
  }
});

export default ImageCover;