import {View, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import CustomInput from '../../Components/CustomComponents/CustomInput';

interface CustomChildInfoProps {
  registerState: any;
  handleOnChange: (name: string, value: string, id: number) => void;
  showCalendar: boolean;
  setShowCalendar: (showCalendar: boolean) => any;
  id: number;
}

const CustomChildInfo = ({
  registerState,
  handleOnChange,
  showCalendar,
  setShowCalendar,
  id,
}: CustomChildInfoProps) => {
  console.log(registerState, 'register');
  console.log(id, registerState[id], 'lll');
  return (
    <View style={{paddingBottom: 20}}>
      <View>
        <CustomInput
          label="Child First Name*"
          placeholder="Enter First Name"
          value={registerState[id].childFirstName}
          onChangeText={value => {
            handleOnChange(value, 'childFirstName', id);
          }}
        />
        <CustomInput
          label="Child Last Name*"
          placeholder="Enter Last Name"
          value={registerState[id].childLastName}
          onChangeText={value => {
            handleOnChange(value, 'childLastName', id);
          }}
        />
        <Pressable onPress={() => setShowCalendar(!showCalendar)}>
          {/* <Text>showCalendar</Text> */}
          <CustomInput
            label="Date of birth*"
            placeholder="Enter D.O.B"
            value={registerState[id].dob}
            onChangeText={value => {
              handleOnChange(value, 'dob', id);
            }}
          />
        </Pressable>

        {showCalendar && (
          <Calendar
            onDayPress={day => {
              console.log('selected day', day);
            }}
          />
        )}
        <CustomInput
          label="Gender*"
          placeholder=""
          value={registerState[id].gender}
          onChangeText={value => {
            handleOnChange(value, 'gender', id);
          }}
        />
        <CustomInput
          label="Height (cm)*"
          placeholder="Enter Height"
          value={registerState[id].height}
          onChangeText={value => {
            handleOnChange(value, 'height', id);
          }}
        />
        <CustomInput
          label="Weight (Kg)*"
          placeholder="Enter Weight"
          value={registerState[id].weight}
          onChangeText={value => {
            handleOnChange(value, 'weight', id);
          }}
        />
        <CustomInput
          label="Nick name*"
          placeholder="Enter Nickname"
          value={registerState[id].nickName}
          onChangeText={value => {
            handleOnChange(value, 'nickName', id);
          }}
        />
      </View>
    </View>
  );
};

export default CustomChildInfo;

const styles = StyleSheet.create({});
