import {Text, View, Image, Dimensions, ScrollView} from 'react-native';
import React, {useState} from 'react';
import image3 from '../../Assets/Constant.png';
import CustomInput from '../../Components/CustomComponents/CustomInput';
import CustomButton from '../../Components/CustomComponents/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {introStyles} from '../globalStyles';

const {height, width} = Dimensions.get('screen');

const RegisterScreen = () => {
  const navigation = useNavigation<any>();

  const [registerState, setRegisterState] = useState({
    fistName: '',
    lastName: '',
    email: '',
    contact: '',
    password: '',
    confirmPassword: '',
  });
  const handleOnChange = (value: string, name: string) => {
    setRegisterState({...registerState, [name]: value});
  };
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
          value={registerState.fistName}
          onChangeText={value => {
            handleOnChange(value, 'firstName');
          }}
        />
        <CustomInput
          label="Last Name*"
          placeholder="Enter Last Name"
          value={registerState.lastName}
          onChangeText={value => {
            handleOnChange(value, 'lastName');
          }}
        />
        <CustomInput
          label="Email ID*"
          placeholder="Enter email ID"
          value={registerState.email}
          onChangeText={value => {
            handleOnChange(value, 'email');
          }}
        />
        <CustomInput
          label="Mobile Number*"
          placeholder="Enter mobile number"
          value={registerState.contact}
          onChangeText={value => {
            handleOnChange(value, 'contact');
          }}
        />
        <CustomInput
          label="Password*"
          placeholder="Enter Password"
          value={registerState.password}
          onChangeText={value => {
            handleOnChange(value, 'password');
          }}
        />
        <CustomInput
          label="Confirm Password*"
          placeholder="Confirm Password"
          value={registerState.confirmPassword}
          onChangeText={value => {
            handleOnChange(value, 'confirmPassword');
          }}
        />
      </View>
      <View style={introStyles.btnCont}>
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
