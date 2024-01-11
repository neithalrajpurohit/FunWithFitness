import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import {introStyles} from '../globalStyles';
import image3 from '../../Assets/Constant.png';
import CustomInput from '../../Components/CustomComponents/CustomInput';
import CustomButton from '../../Components/CustomComponents/CustomButton';
import {useNavigation} from '@react-navigation/native';

const InvitationScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      keyboardShouldPersistTaps="always"
      style={introStyles.registerContainer1}>
      <View style={introStyles.registerContainer2}>
        <View>
          <Text style={introStyles.registerText1}>Invite Friends</Text>
          <Text style={introStyles.registerText1}>in Group</Text>
          <Text style={introStyles.registerText2}>Add Friends from your</Text>
          <Text style={introStyles.registerText2}>contact list.</Text>
        </View>
        <View>
          <Image source={image3} />
        </View>
      </View>
      <View>
        <CustomInput label="" placeholder="" value="" onChangeText={() => {}} />
      </View>
      <View style={introStyles.btnCont}>
        <CustomButton
          title="Continue"
          onPress={() => navigation.navigate('GroupScreen')}
        />
      </View>
    </ScrollView>
  );
};

export default InvitationScreen;

const styles = StyleSheet.create({});
