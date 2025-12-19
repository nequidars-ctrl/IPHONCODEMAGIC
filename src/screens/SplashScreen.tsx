import React, {useRef, useState, useEffect} from 'react';
import {View, StyleSheet, StatusBar, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import {getAnimationData} from '../_rsc/_loader';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const SplashScreen: React.FC = () => {
  const navigation = useNavigation();
  const animationRef = useRef<LottieView>(null);
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    try {
      const data = getAnimationData();
      setAnimationData(data);
    } catch (error) {
      console.error('Error loading animation:', error);
    }
  }, []);

  const handleAnimationFinish = () => {
    navigation.navigate('Login' as never);
  };

  if (!animationData) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#200020" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#200020" />
      
      <LottieView
        ref={animationRef}
        source={animationData}
        autoPlay
        loop={false}
        style={styles.animation}
        resizeMode="cover"
        onAnimationFinish={handleAnimationFinish}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#200020',
    alignItems: 'center',
    justifyContent: 'center',
  },
  animation: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
});

export default SplashScreen;
