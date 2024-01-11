import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import {introStyles} from '../globalStyles';
import image3 from '../../Assets/Constant.png';
import CustomButton from '../../Components/CustomComponents/CustomButton';
import {useNavigation} from '@react-navigation/native';

const ChildReviewScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      keyboardShouldPersistTaps="always"
      style={introStyles.registerContainer1}>
      <View style={introStyles.registerContainer2}>
        <View>
          <Text style={introStyles.registerText1}>Child</Text>
          <Text style={introStyles.registerText1}>Review</Text>
          <Text style={introStyles.registerText2}>Lorem ipsum dolor sit</Text>
          <Text style={introStyles.registerText2}>
            amet, consectetur adipiscing.
          </Text>
        </View>
        <View>
          <Image source={image3} />
        </View>
      </View>
      <View style={introStyles.btnCont}>
        <CustomButton
          title="Next"
          onPress={() => navigation.navigate('GroupScreen')}
        />
      </View>
    </ScrollView>
  );
};

export default ChildReviewScreen;

const styles = StyleSheet.create({});
