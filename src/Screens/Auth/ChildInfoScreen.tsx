import {Text, View, Image, Dimensions, ScrollView, Button} from 'react-native';
import React, {useState} from 'react';
import image3 from '../../Assets/Constant.png';
import CustomInput from '../../Components/CustomComponents/CustomInput';
import CustomButton from '../../Components/CustomComponents/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {introStyles} from '../globalStyles';

const {height, width} = Dimensions.get('screen');

const ChildInfo = () => {
  const navigation = useNavigation<any>();

  const [registerState, setRegisterState] = useState({
    childFirstName: '',
    childLastName: '',
    dob: '',
    gender: '',
    height: '',
    weight: '',
    nickName: '',
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
          <Text style={introStyles.registerText1}>Childs</Text>
          <Text style={introStyles.registerText1}>Details</Text>
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
          label="Child First Name*"
          placeholder="Enter First Name"
          value={registerState.childFirstName}
          onChangeText={value => {
            handleOnChange(value, 'childFirstName');
          }}
        />
        <CustomInput
          label="Child Last Name*"
          placeholder="Enter Last Name"
          value={registerState.childLastName}
          onChangeText={value => {
            handleOnChange(value, 'childLastName');
          }}
        />
        <CustomInput
          label="Date of birth*"
          placeholder="Enter D.O.B"
          value={registerState.dob}
          onChangeText={value => {
            handleOnChange(value, 'dob');
          }}
        />
        <CustomInput
          label="Gender*"
          placeholder=""
          value={registerState.gender}
          onChangeText={value => {
            handleOnChange(value, 'gender');
          }}
        />
        <CustomInput
          label="Height (cm)*"
          placeholder="Enter Height"
          value={registerState.height}
          onChangeText={value => {
            handleOnChange(value, 'height');
          }}
        />
        <CustomInput
          label="Weight (Kg)*"
          placeholder="Enter Weight"
          value={registerState.weight}
          onChangeText={value => {
            handleOnChange(value, 'weight');
          }}
        />
        <CustomInput
          label="Nick name*"
          placeholder="Enter Nickname"
          value={registerState.nickName}
          onChangeText={value => {
            handleOnChange(value, 'nickName');
          }}
        />
      </View>
      <View>
        <CustomButton title="Add more children +" onPress={() => {}} />
      </View>
      <View style={introStyles.btnCont}>
        <CustomButton
          title="Next"
          onPress={() => {
            navigation.navigate('');
          }}
        />
      </View>
    </ScrollView>
  );
};

export default ChildInfo;
