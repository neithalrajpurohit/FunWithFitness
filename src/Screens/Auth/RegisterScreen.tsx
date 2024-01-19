import {Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import image3 from '../../Assets/Constant.png';
import CustomInput from '../../Components/CustomComponents/CustomInput';
import CustomButton from '../../Components/CustomComponents/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {introStyles} from '../globalStyles';
import {handleOnChange} from '../../Features/parentsRegistrationSlice';
import {useAppDispatch, useAppSelector} from '../../App/hooks';

const RegisterScreen = () => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const registerState = useAppSelector(state => state.parentsRegistration);

  return (
    <ScrollView
      keyboardShouldPersistTaps="always"
      style={introStyles.registerContainer1}>
      <View style={introStyles.registerContainer2}>
        <View>
          <Text style={introStyles.registerText1}>Parents</Text>
          <Text style={introStyles.registerText1}>Registration</Text>
          <Text style={introStyles.registerText2}>Lorem ipsum dolor sit</Text>
          <Text style={introStyles.registerText2}>
            amet, consectetur adipiscing.
          </Text>
        </View>
        <View>
          <Image source={image3} />
        </View>
      </View>
      <View>
        <CustomInput
          label="First Name*"
          placeholder="Enter First Name"
          value={registerState.firstName}
          onChangeText={value => {
            dispatch(handleOnChange({name: 'firstName', value: value}));
          }}
        />
        <CustomInput
          label="Last Name*"
          placeholder="Enter Last Name"
          value={registerState.lastName}
          onChangeText={value => {
            dispatch(handleOnChange({name: 'lastName', value: value}));
          }}
        />
        <CustomInput
          label="Email ID*"
          placeholder="Enter email ID"
          value={registerState.email}
          keyboardType="email-address"
          onChangeText={value => {
            dispatch(handleOnChange({name: 'email', value: value}));
          }}
        />

        <CustomInput
          label="Mobile Number*"
          placeholder="Enter mobile number"
          keyboardType="phone-pad"
          value={registerState.contact}
          onChangeText={value => {
            if (String(registerState!.contact!).length < 10) {
              dispatch(handleOnChange({name: 'contact', value: value}));
            }
          }}
        />
        <CustomInput
          label="Password*"
          placeholder="Enter Password"
          keyboardType="visible-password"
          securePswd={false}
          value={registerState.password}
          onChangeText={value => {
            dispatch(handleOnChange({name: 'password', value: value}));
          }}
        />
        <CustomInput
          label="Confirm Password*"
          placeholder="Confirm Password"
          keyboardType="visible-password"
          securePswd={true}
          value={registerState.confirmPassword}
          onChangeText={value => {
            dispatch(handleOnChange({name: 'confirmPassword', value: value}));
          }}
        />
      </View>
      <View style={introStyles.btnContainer}>
        <CustomButton
          title="Verify A/C"
          onPress={() => {
            navigation.navigate('VerificationScreen');
          }}
        />
      </View>
      <Text style={introStyles.text2}>Already have an account?</Text>
    </ScrollView>
  );
};

export default RegisterScreen;
