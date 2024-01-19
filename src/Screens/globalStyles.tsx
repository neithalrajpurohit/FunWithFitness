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
    marginTop: height * 0.03,
    marginBottom: height * 0.02,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  text2: {
    color: '#4B4242',
    textAlign: 'center',
    marginTop: height * 0.01,
  },
  registerContainer1: {
    flex: 1,
    backgroundColor: '#FEF3EF',
  },
  registerContainer2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingTop: height * 0.04,
  },
  registerText1: {
    color: '#000000',
    fontSize: 28,
    fontWeight: '600',
    lineHeight: 28,
    paddingBottom: 7,
  },
  registerText2: {
    color: '#4B4242',
    lineHeight: 18,
    fontWeight: '600',
  },
  btnCont: {
    paddingHorizontal: width * 0.1,
    marginBottom: height * 0.03,
    fontWeight: '700',
    fontSize: 18,
  },
  deleteBtnStyle: {
    color: '#000000',
    fontWeight: '700',
    fontSize: 18,
    marginTop: height * 0.01,
    marginLeft: 'auto',
    marginRight: 5,
  },
  deleteButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  deleteIcon: {
    width: 20,
    height: 20,
    marginTop: height * 0.01,
    marginRight: 25,
  },
  //todo
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Align buttons at each end of the container
    padding: 10,
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#000000',
    borderRadius: 5,
    padding: 17,
  },
  editbutton: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#000000',
    borderRadius: 5,
    marginLeft: 'auto',
    marginRight: 30,
  },
  buttonText: {
    color: '#000000',
    marginRight: 5,
    fontWeight: '700',
    fontSize: 18,
  },
  buttonIcon: {
    width: 20,
    height: 20,
  },
});
