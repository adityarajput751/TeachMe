import {StyleSheet} from 'react-native';
import { Appcolor } from '../../theme/Appcolor';

export const LandingStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  logoImaage: {alignSelf: 'center', marginTop: 108},
  appImage: {alignSelf: 'center', marginTop: 69},
  textOne: {
    paddingTop: 22,
    alignSelf: 'center',
    fontSize: 18,
    color: Appcolor.TEXT_COLOR,
  },
});
