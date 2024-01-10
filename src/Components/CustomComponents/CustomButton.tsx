import {StyleSheet, Text, Pressable, Dimensions} from 'react-native';
import React from 'react';

interface ButtonProps {
  color?: string;
  title: string;
  backgroundColor?: string;
  onPress: any;
}
const {height, width} = Dimensions.get('screen');

const Button = ({
  color = '#FFFFFF',
  title,
  backgroundColor = '#F41414',
  onPress,
}: ButtonProps) => {
  return (
    <Pressable
      style={[{backgroundColor: backgroundColor}, styles.btnStyle]}
      onPress={onPress}>
      <Text style={[styles.btnTextStyle, {color: color}]}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnStyle: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  btnTextStyle: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
  },
});
