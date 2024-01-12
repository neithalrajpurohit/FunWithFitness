import {View, Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import CustomInput from '../../Components/CustomComponents/CustomInput';
import {useAppDispatch, useAppSelector} from '../../App/hooks';
import {handleDelete} from '../../Features/childInfoSlice';
import {introStyles} from '../../Screens/globalStyles';
interface CustomChildInfoProps {
  registerState: any;
  handleChange: (name: string, value: string, id: number) => void;
  showCalendar: boolean;
  setShowCalendar: (showCalendar: boolean) => any;
  id: number;
}
const CustomChildInfo = ({
  registerState,
  handleChange,
  showCalendar,
  setShowCalendar,
  id,
}: CustomChildInfoProps) => {
  const dispatch = useAppDispatch();
  const registerStateBtn = useAppSelector(state => state.childInfo);
  return (
    <View style={{paddingBottom: 20}}>
      <View>
        <CustomInput
          label="Child First Name*"
          placeholder="Enter First Name"
          value={registerState.childFirstName}
          onChangeText={value => {
            handleChange(value, 'childFirstName', id);
          }}
        />
        <CustomInput
          label="Child Last Name*"
          placeholder="Enter Last Name"
          value={registerState.childLastName}
          onChangeText={value => {
            handleChange(value, 'childLastName', id);
          }}
        />
        <Pressable onPress={() => setShowCalendar(!showCalendar)}>
          {/* <Text>showCalendar</Text> */}
          <CustomInput
            label="Date of birth*"
            placeholder="Enter D.O.B"
            value={registerState.dob}
            onChangeText={value => {
              handleChange(value, 'dob', id);
            }}
          />
        </Pressable>

        {/* {showCalendar && (
          <Calendar
            onDayPress={day => {
              console.log('selected day', day);
            }}
          />
        )} */}
        <CustomInput
          label="Gender*"
          placeholder=""
          value={registerState.gender}
          onChangeText={value => {
            handleChange(value, 'gender', id);
          }}
        />
        <CustomInput
          label="Height (cm)*"
          placeholder="Enter Height"
          value={registerState.height}
          onChangeText={value => {
            handleChange(value, 'height', id);
          }}
        />
        <CustomInput
          label="Weight (Kg)*"
          placeholder="Enter Weight"
          value={registerState.weight}
          onChangeText={value => {
            handleChange(value, 'weight', id);
          }}
        />
        <CustomInput
          label="Nick name*"
          placeholder="Enter Nickname"
          value={registerState.nickName}
          onChangeText={value => {
            handleChange(value, 'nickName', id);
          }}
        />
      </View>
      {registerStateBtn.length > 1 && (
        <Pressable
          onPress={() => {
            dispatch(handleDelete({id}));
          }}>
          <Text style={introStyles.deleteBtnStyle}>Delete</Text>
        </Pressable>
      )}
    </View>
  );
};

export default CustomChildInfo;

export const styles = StyleSheet.create({});
