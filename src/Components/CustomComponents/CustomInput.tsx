import {
  StyleSheet,
  TextInput,
  Dimensions,
  View,
  Text,
  ScrollView,
} from 'react-native';
import React from 'react';

const {height, width} = Dimensions.get('screen');
interface CustomInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void; // the function doesnt return anything ,hence defining void
  label?: string;
}

const CustomInput = ({
  placeholder,
  value,
  onChangeText,
  label,
}: CustomInputProps) => {
  return (
    <View style={styles.inputCont}>
      {label ? <Text style={styles.textStyle}>{label}</Text> : ''}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.inputStyle}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputCont: {
    marginTop: height * 0.03,
    width: width * 0.8,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  inputStyle: {
    backgroundColor: 'white',
    borderRadius: 12,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 8,
    width: width * 0.8,
  },
  textStyle: {
    color: 'black',
    fontWeight: '600',
    marginBottom: 6,
    marginLeft: 3,
  },
});
