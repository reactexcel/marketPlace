import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  Window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  sPadding:10,
  xsPadding:5,
  lPadding:15,
  xLPadding:20,
};
