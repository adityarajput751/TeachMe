import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {AppImage} from '../theme/AppImage';

const BackButton = ({onPress}) => {
  return (
    <View style={{marginTop: 20}}>
      <TouchableOpacity onPress={onPress}>
        <Image style={{height: 30, width: 30}} source={AppImage.BACK} />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
