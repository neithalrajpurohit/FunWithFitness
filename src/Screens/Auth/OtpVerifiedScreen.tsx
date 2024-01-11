import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React, {useEffect, useRef} from 'react';
import success from '../../Assets/Success.png';
import {useNavigation} from '@react-navigation/native';
import ConfettiCannon from 'react-native-confetti-cannon';
import LottieView from 'lottie-react-native';

const {height, width} = Dimensions.get('screen');

const OtpVerifiedScreen = () => {
  const navigation = useNavigation<any>();
  const explosionRef = useRef<any>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('ChildInfoScreen');
    }, 5000);
    handleSomeKindOfEvent();
  }, []);

  const handleSomeKindOfEvent = () => {
    explosionRef.current.start();
  };
  return (
    <View style={styles.otpContainer}>
      <View style={styles.textCont}>
        <Text style={styles.text1}>Congratulations</Text>
        <Text style={styles.text2}>Welcome to Olly</Text>
      </View>
      <LottieView
        source={require('../../Assets/Animation.json')}
        autoPlay
        loop
        style={styles.lottieStyles}
      />
      <View>
        <Image style={styles.imgStyle} source={success} />
      </View>
      <ConfettiCannon
        count={500}
        origin={{x: -10, y: 0}}
        autoStart={false}
        ref={explosionRef}
      />
    </View>
  );
};

export default OtpVerifiedScreen;

const styles = StyleSheet.create({
  otpContainer: {
    flex: 1,
    backgroundColor: '#FEF3EF',
  },
  textCont: {
    paddingTop: height * 0.09,
  },
  text1: {
    fontWeight: '900',
    color: '#000000',
    fontSize: 35,
    textAlign: 'center',
  },
  text2: {
    fontWeight: '600',
    color: '#000000',
    fontSize: 16,
    textAlign: 'center',
  },
  imgStyle: {
    marginTop: height * 0.08,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  lottieStyles: {
    height: height * 0.3,
    width: width * 0.5,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
