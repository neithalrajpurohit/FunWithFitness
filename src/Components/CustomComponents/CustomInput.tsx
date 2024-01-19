import {
  StyleSheet,
  TextInput,
  View,
  Text,
  KeyboardTypeOptions,
} from 'react-native';
import React from 'react';
import {height, width} from '../../utils';

interface CustomInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void; // the function doesnt return anything ,hence defining void
  label?: string;
  keyboardType?: KeyboardTypeOptions;
  securePswd?: boolean;
}

const CustomInput = ({
  placeholder,
  value,
  onChangeText,
  label,
  keyboardType,
  securePswd,
}: CustomInputProps) => {
  return (
    <View style={styles.inputCont}>
      {label ? <Text style={styles.textStyle}>{label}</Text> : ''}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.inputStyle}
        keyboardType={keyboardType}
        secureTextEntry={securePswd}
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
