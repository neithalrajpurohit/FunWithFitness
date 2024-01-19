import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import {introStyles} from '../globalStyles';
import image3 from '../../Assets/Constant.png';
import CustomInput from '../../Components/CustomComponents/CustomInput';
import CustomButton from '../../Components/CustomComponents/CustomButton';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {height, width} from '../../utils';
import deleteImage from '../../Assets/deleteImage.png';
import editImage from '../../Assets/editImage.png';

import {
  ImagePickerResponse,
  MediaType,
  launchImageLibrary,
} from 'react-native-image-picker';
import {useAppDispatch, useAppSelector} from '../../App/hooks';

import {
  handleChange,
  handleAddChild,
  handleDelete,
  handleEdit,
  handleResetState,
} from '../../Features/groupCreationSlice';

const GroupScreen = () => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const groupState = useAppSelector(state => state.groupCreation);

  // const [groupPhoto, setGroupPhoto] = useState<any>(null);

  const selectImage = (i: number) => {
    const options = {
      mediaType: 'photo' as MediaType,
    };
    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (
        !response.didCancel &&
        response.assets &&
        response.assets.length > 0
      ) {
        const selectedImage: any = response.assets[0];
        // setGroupPhoto(selectedImage);
        dispatch(
          handleChange({id: i, value: selectedImage.uri, name: 'uploadPhoto'}),
        );
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
      {groupState.map((child: any, index: number) => {
        return (
          <View>
            <CustomInput
              label="Group Name*"
              placeholder="Enter Group Name"
              value={groupState[index].groupName}
              onChangeText={value => {
                dispatch(handleChange({id: index, value, name: 'groupName'}));
              }}
            />
            <Pressable
              style={styles.profileIcon}
              onPress={() => selectImage(index)}>
              {child && child.uploadPhoto ? (
                <Image
                  source={{uri: child.uploadPhoto}}
                  style={styles.profileIcon}
                />
              ) : (
                <Icon name="plus" size={60} style={styles.plusIcon} />
              )}
            </Pressable>
            <Text style={styles.desStyle}>
              {child.uploadPhoto ? 'Change Photo' : 'Upload group photo'}
            </Text>
            <View style={introStyles.buttonContainer}>
              {/* <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <View style={introStyles.editbutton}>
            <Text style={introStyles.buttonText}>Edit</Text>
            <Image source={editImage} style={introStyles.buttonIcon} />
          </View>
        </Pressable> */}
              <Pressable
                onPress={() => {
                  if (groupState.length === 1) {
                    dispatch(handleResetState());
                    navigation.goBack();
                  } else {
                    dispatch(handleDelete({id: index}));
                  }
                }}>
                <View style={introStyles.button}>
                  <Text style={introStyles.buttonText}>Delete</Text>
                  <Image source={deleteImage} style={introStyles.buttonIcon} />
                </View>
              </Pressable>
            </View>
          </View>
        );
      })}
      <View style={[introStyles.btnCont, {marginBottom: 0}]}>
        <CustomButton
          outline
          color="#000000"
          title="Add more children +"
          onPress={() => {
            dispatch(handleAddChild());
          }}
        />
      </View>

      <View style={{marginTop: height * 0.02}} />

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
