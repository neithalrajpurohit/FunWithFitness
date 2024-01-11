import {Text, View, Image, Dimensions, ScrollView} from 'react-native';
import React, {useState} from 'react';
import image3 from '../../Assets/Constant.png';

import CustomButton from '../../Components/CustomComponents/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {introStyles} from '../globalStyles';

import CustomChildInfo from '../../Components/CustomComponents/CustomChildInfo';
const {height, width} = Dimensions.get('screen');

const ChildInfo = () => {
  const navigation = useNavigation<any>();

  const [registerState, setRegisterState] = useState<any>([
    {
      //1 represents screen 1
      0: {
        childFirstName: '',
        childLastName: '',
        dob: '',
        gender: '',
        height: '',
        weight: '',
        nickName: '',
      },
    },
    {
      //2 represents screen 2
      1: {
        childFirstName: '',
        childLastName: '',
        dob: '',
        gender: '',
        height: '',
        weight: '',
        nickName: '',
      },
    },
  ]);

  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [childScreen, setChildScreen] = useState<any>([1]);

  const handleOnChange = (value: string, name: string, id: number) => {
    // setRegisterState((prevState: any) => {
    //   return [...prevState, {[id]: {...prevState[id], [name]: value}}];
  };
  const handleOnClick = () => {
    let id = Math.random();
    setChildScreen([...childScreen, id]);
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

      {registerState.map((child: any, i) => {
        console.log(child[i]);
        return (
          <View key={i} style={{}}>
            <CustomChildInfo
              id={i}
              registerState={child}
              handleOnChange={handleOnChange}
              showCalendar={showCalendar}
              setShowCalendar={setShowCalendar}
            />
          </View>
        );
      })}
      <View style={{marginTop: height * 0.02}} />

      <View style={[introStyles.btnCont, {marginBottom: 0}]}>
        <CustomButton
          outline
          color="#000000"
          title="Add more children +"
          onPress={() => {
            handleOnClick();
          }}
        />
      </View>
      <View style={{marginTop: height * 0.02}} />
      <View style={introStyles.btnCont}>
        <CustomButton
          title="Next"
          onPress={() => {
            navigation.navigate('ChildReviewScreen');
          }}
        />
      </View>
    </ScrollView>
  );
};

export default ChildInfo;
