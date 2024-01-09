import {StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';

interface ButtonProps {
  color: string;
  title: string;
  backgroundColor: string;
}

const Button = ({color, title, backgroundColor}: ButtonProps) => {
  return (
    <Pressable style={[{backgroundColor: backgroundColor}, styles.btnStyle]}>
      <Text style={{color: color, textAlign: 'center'}}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnStyle: {
    borderRadius: 20,
    paddingVertical: 10,
  },
});
