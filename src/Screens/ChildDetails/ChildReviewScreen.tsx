import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import React, {useEffect} from 'react';
import image3 from '../../Assets/Constant.png';
import CustomButton from '../../Components/CustomComponents/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector, useAppDispatch} from '../../App/hooks';
import {height} from '../../utils';
import {handleDelete} from '../../Features/childInfoSlice';
import {introStyles} from '../globalStyles';

const ChildReviewScreen = () => {
  const registerState = useAppSelector(state => state.childInfo);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    if (registerState.length === 0) {
      navigation.goBack();
    }
  }, [registerState, navigation]);
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
      {registerState.map((displayItem, index: number) => {
        return (
          <View style={styles.mainContainer}>
            <View>
              <Text style={styles.mainContainerLabels}>Nick name</Text>
              <Text style={styles.mainText}>{displayItem.nickName}</Text>
            </View>
            <View>
              <Text style={styles.mainContainerLabels}>Child name</Text>
              <Text style={styles.mainText}>{displayItem.childFirstName}</Text>
            </View>
            <View>
              <Text style={styles.mainContainerLabels}>Date of birth</Text>
              <Text style={styles.mainText}>{displayItem.dob}</Text>
            </View>
            <View>
              <Text style={styles.mainContainerLabels}>Gender</Text>
              <Text style={styles.mainText}>{displayItem.gender}</Text>
            </View>
            <View>
              <Text style={styles.mainContainerLabels}>Height (cm)</Text>
              <Text style={styles.mainText}>{displayItem.height}</Text>
            </View>
            <View>
              <Text style={styles.mainContainerLabels}>Weight (kg)</Text>
              <Text style={styles.mainText}>{displayItem.weight}</Text>
            </View>
            <Pressable
              onPress={() => {
                dispatch(handleDelete({id: index}));
              }}>
              <Text style={introStyles.deleteBtnStyle}>Delete</Text>
            </Pressable>
          </View>
        );
      })}

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

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 40,
    marginTop: height * 0.04,
  },
  mainContainerLabels: {
    fontSize: 18,
    color: '#827F7F',
    fontWeight: '600',
  },
  mainText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#000000',
    paddingBottom: height * 0.03,
  },
});
