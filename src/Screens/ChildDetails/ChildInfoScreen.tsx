import {Text, View, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import image3 from '../../Assets/Constant.png';
import CustomButton from '../../Components/CustomComponents/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {introStyles} from '../globalStyles';
import CustomChildInfo from '../../Components/CustomComponents/CustomChildInfo';
import {useAppDispatch, useAppSelector} from '../../App/hooks';
import {
  handleAddChild,
  handleEdit,
  handleOnChange,
} from '../../Features/childInfoSlice';
import {height} from '../../utils';

const ChildInfo = () => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();

  const registerState = useAppSelector(state => state.childInfo);

  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  const handleChange = (
    value: string,
    name: string,
    id: number,
    type: 'add' | 'edit',
  ) => {
    if (type === 'add') {
      dispatch(handleOnChange({value, name, id}));
    } else {
      dispatch(handleEdit({value, name, id}));
    }
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
        return (
          <View key={i} style={{}}>
            <CustomChildInfo
              id={i}
              registerState={child}
              handleChange={handleChange}
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
            dispatch(handleAddChild());
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
