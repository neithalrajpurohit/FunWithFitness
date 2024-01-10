import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import success from '../../Assets/Success.png';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('screen');

const OtpVerifiedScreen = () => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('ChildInfoScreen');
    }, 3000);
  }, []);
  return (
    <View style={styles.otpContainer}>
      <View style={styles.textCont}>
        <Text style={styles.text1}>Congratulations</Text>
        <Text style={styles.text2}>Welcome to Olly</Text>
      </View>
      <View>
        <Image style={styles.imgStyle} source={success} />
      </View>
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
    marginTop: height * 0.5,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
