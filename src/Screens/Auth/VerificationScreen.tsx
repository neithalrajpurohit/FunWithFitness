import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import image3 from '../../Assets/Constant.png';
import {OtpInput} from 'react-native-otp-entry';
import {introStyles} from '../globalStyles';
import CustomButton from '../../Components/CustomComponents/CustomButton';
import {useNavigation} from '@react-navigation/native';
const {height, width} = Dimensions.get('screen');

const VerificationScreen = () => {
  const navigation = useNavigation<any>();

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
        <OtpInput
          numberOfDigits={4}
          focusColor="green"
          focusStickBlinkingDuration={500}
          onTextChange={text => console.log(text)}
          onFilled={text => console.log(`OTP is ${text}`)}
          theme={{
            containerStyle: styles.container,
            inputsContainerStyle: styles.inputsContainer,
            pinCodeContainerStyle: styles.codeContainer,
            pinCodeTextStyle: styles.codeText,
            //   focusStickStyle: styles.focusStick,
            //   focusedPinCodeContainerStyle: styles.activePinCodeContainer,
          }}
        />
        <View>
          <Text style={styles.otpText1}>Didn’t receive any OTP?</Text>
          <Text style={styles.otpText2}>Resend OTP?</Text>
        </View>
        <View style={styles.submitBtn}>
          <CustomButton
            title="Submit"
            onPress={() => navigation.navigate('OtpVerifiedScreen')}
          />
        </View>
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
  container: {
    marginTop: height * 0.04,
    flexDirection: 'row',
  },
  inputsContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  codeContainer: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#00000',
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  codeText: {
    fontSize: 28,
  },
  otpText1: {
    marginTop: height * 0.2,
    color: '#4B4242',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  otpText2: {
    marginTop: height * 0.04,
    color: '#F41414',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  submitBtn: {
    marginTop: height * 0.08,
  },
});
