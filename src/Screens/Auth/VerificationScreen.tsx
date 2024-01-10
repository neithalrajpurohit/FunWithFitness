import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import image3 from '../../Assets/Constant.png';

import {introStyles} from '../globalStyles';

const {height, width} = Dimensions.get('screen');

const VerificationScreen = () => {
  return (
    <View style={introStyles.registerContainer1}>
      <View style={introStyles.registerContainer2}>
        <View>
          <Text style={introStyles.registerText1}>Verification</Text>
          <Text style={introStyles.registerText1}>Code</Text>
        </View>
        <View>
          <Image source={image3} />
        </View>
      </View>
      <View style={styles.verificationStyles}>
        <Text style={styles.verificationText}>
          Please enter the verification
        </Text>
        <Text style={styles.verificationText}>code sent to +91 7285831282</Text>
      </View>
    </View>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({
  verificationStyles: {
    paddingHorizontal: width * 0.09,
    marginTop: height * 0.04,
  },
  verificationText: {
    textAlign: 'center',
    lineHeight: 23,
    color: 'black',
    fontWeight: '600',
  },
});
