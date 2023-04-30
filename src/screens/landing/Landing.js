import {View, Text, Image} from 'react-native';
import React from 'react';
import {AppImage} from '../../theme/AppImage';
import {Appcolor} from '../../theme/Appcolor';
import Button from '../../components/Button';
import { LandingStyle } from './LandingStyle';

const Landing = () => {
  return (
    <View style={LandingStyle.mainContainer}>
      <Image
        source={AppImage.LOGO}
        style={LandingStyle.logoImaage}
      />
      <Image
        source={AppImage.LANDINGIMAGE}
        style={LandingStyle.appImage}
      />
      <Text
        style={LandingStyle.textOne}>
        Best platform for online education
      </Text>
      <Button
        title={'CREATE AN ACCOUNT'}
        backgroundColor={Appcolor.BUTTON_COLOR_ONE}
        marginTop={20}
        fontColor={Appcolor.WHITE}
      />
      <Button
        title={'LOG IN'}
        backgroundColor={Appcolor.BUTTON_COLOR_ONE}
        marginTop={20}
        fontColor={Appcolor.BLACK}
      />
    </View>
  );
};

export default Landing;
