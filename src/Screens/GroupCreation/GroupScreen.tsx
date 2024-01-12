import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  Pressable,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {introStyles} from '../globalStyles';
import image3 from '../../Assets/Constant.png';
import CustomInput from '../../Components/CustomComponents/CustomInput';
import CustomButton from '../../Components/CustomComponents/CustomButton';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
const {height, width} = Dimensions.get('screen');
import {
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';

const GroupScreen = () => {
  const navigation = useNavigation();
  const [groupName, setGroupName] = useState<any>('');
  const [groupPhoto, setGroupPhoto] = useState<any>(null);

  const selectImage = () => {
    const options = {
      mediaType: 'photo',
    };
    launchImageLibrary(options, (response: ImagePickerResponse) => {
      console.log('ImagePicker Response: ', response);
      if (
        !response.didCancel &&
        !response.error &&
        response.assets.length > 0
      ) {
        const selectedImage = response.assets[0];
        setGroupPhoto(selectedImage);
      }
    });
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="always"
      style={introStyles.registerContainer1}>
      <View style={introStyles.registerContainer2}>
        <View>
          <Text style={introStyles.registerText1}>Create a</Text>
          <Text style={introStyles.registerText1}>Group</Text>
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
          label="Group Name*"
          placeholder="Enter Group Name"
          value={groupName}
          onChangeText={text => {
            setGroupName(text);
          }}
        />
      </View>
      <Pressable style={styles.profileIcon} onPress={selectImage}>
        {groupPhoto && groupPhoto.uri ? (
          <Image source={{uri: groupPhoto.uri}} style={styles.profileIcon} />
        ) : (
          <Icon name="plus" size={60} style={styles.plusIcon} />
        )}
      </Pressable>
      <Text style={styles.desStyle}>Upload group photo</Text>
      <View style={introStyles.btnCont}>
        <CustomButton
          title="Next"
          onPress={() => navigation.navigate('InvitationScreen')}
        />
      </View>
    </ScrollView>
  );
};

export default GroupScreen;

const styles = StyleSheet.create({
  profileIcon: {
    height: width * 0.5,
    width: width * 0.5,
    borderRadius: width,
    backgroundColor: '#ffffff',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: height * 0.03,
    marginBottom: height * 0.03,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  desStyle: {
    textAlign: 'center',
    marginBottom: height * 0.07,
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  plusIcon: {},
});
