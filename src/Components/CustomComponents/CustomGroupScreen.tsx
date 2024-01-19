// import {View, Pressable, StyleSheet, Text, Image} from 'react-native';
// import React from 'react';
// import CustomInput from '../../Components/CustomComponents/CustomInput';
// import {useAppDispatch, useAppSelector} from '../../App/hooks';
// import {handleDelete} from '../../Features/childInfoSlice';
// import {introStyles} from '../../Screens/globalStyles';
// import deleteImage from '../../Assets/deleteImage.png';

// interface CustomGroupInfoProps {
//   groupName: any;
//   handleChange: (name: string, value: string, id: number) => void;
//   id: number;
// }
// const CustomGroupScreen = () => {
//   const dispatch = useAppDispatch();
//   const registerStateBtn = useAppSelector(state => state.childInfo);

//   return (
//     <View style={{paddingBottom: 20}}>
//       <View>
//         <CustomInput
//           label="Group Name*"
//           placeholder="Enter Group Name"
//           value={groupName}
//           onChangeText={text => {
//             setGroupName(text);
//           }}
//         />
//       </View>
//       <Pressable style={styles.profileIcon} onPress={selectImage}>
//         {groupPhoto && groupPhoto.uri ? (
//           <Image source={{uri: groupPhoto.uri}} style={styles.profileIcon} />
//         ) : (
//           <Icon name="plus" size={60} style={styles.plusIcon} />
//         )}
//       </Pressable>
//       <Text style={styles.desStyle}>Upload group photo</Text>

//       {registerStateBtn.length > 1 && (
//         <Pressable
//           onPress={() => {
//             dispatch(handleDelete({id}));
//           }}
//           style={introStyles.deleteButtonContainer}>
//           <Text style={introStyles.deleteBtnStyle}>Delete</Text>
//           <Image source={deleteImage} style={introStyles.deleteIcon} />
//         </Pressable>
//       )}
//     </View>
//   );
// };

// export default CustomGroupScreen;

// const styles = StyleSheet.create({});
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CustomGroupScreen = () => {
  return (
    <View>
      <Text>CustomGroupScreen</Text>
    </View>
  );
};

export default CustomGroupScreen;

const styles = StyleSheet.create({});
