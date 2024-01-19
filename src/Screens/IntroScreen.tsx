import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Intro from '../Assets/Intro.png';
import Intro2 from '../Assets/Intro2.png';
import {useNavigation} from '@react-navigation/native';
import {introStyles} from './globalStyles';

import CustomButton from '../Components/CustomComponents/CustomButton';

const IntroScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View>
      <View style={introStyles.introImgContainer}>
        <Image source={Intro} style={introStyles.imageStyle} />
      </View>
      <View>
        <Image source={Intro2} style={introStyles.imageStyle1} />
        <Text style={introStyles.text1}>
          Tailored exercises designed specifically for children's developmental
          stages, ensuring safe and effective movement.
        </Text>
        <View style={introStyles.btnContainer}>
          <CustomButton
            title="Register"
            onPress={() => navigation.navigate('RegisterScreen')}
          />
        </View>
        <Text style={introStyles.text2}>Already have an account?</Text>
      </View>
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({});
