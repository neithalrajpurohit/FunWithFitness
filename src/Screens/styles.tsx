import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('screen');
export const introStyles = StyleSheet.create({
  introImgContainer: {
    height: height * 0.55,
    width: width,
    borderBottomLeftRadius: 110,
    borderBottomRightRadius: 110,
    overflow: 'hidden',
  },
  imageStyle: {
    width: width,
    height: height * 0.55,
    resizeMode: 'cover',
  },
  imageStyle1: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: height * 0.04,
  },
  text1: {
    paddingHorizontal: width * 0.05,
    color: 'black',
    textAlign: 'center',
    lineHeight: 24,
  },
  btnContainer: {
    width: width * 0.6,
    marginTop: height * 0.02,
    marginBottom: height * 0.02,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  text2: {
    color: '#4B4242',
    textAlign: 'center',
  },
});
