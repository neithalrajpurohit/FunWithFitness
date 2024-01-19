import {StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';

interface ButtonProps {
  color?: string;
  title: string;
  backgroundColor?: string;
  onPress: any;
  outline?: boolean;
}

const CustomButton = ({
  color = '#FFFFFF',
  title,
  backgroundColor = '#F41414',
  onPress,
  outline,
}: ButtonProps) => {
  return (
    <Pressable
      style={[
        {backgroundColor: backgroundColor},
        outline ? styles.outlineBtnStyle : styles.btnStyle,
      ]}
      onPress={onPress}>
      <Text
        style={[
          outline ? styles.outlineText : styles.btnTextStyle,
          {color: color},
        ]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btnStyle: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    // marginTop: height * 0.05,
    // marginBottom: height * 0.05,
  },
  btnTextStyle: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
  },
  outlineBtnStyle: {
    borderWidth: 1,
    borderColor: '#FFD800',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  outlineText: {
    color: '#000000',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
  },
});
