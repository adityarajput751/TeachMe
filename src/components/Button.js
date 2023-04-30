import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { Appcolor } from '../theme/Appcolor';

const Button = ({title, onPress, backgroundColor, marginTop, fontColor}) => {
  return (
    <View style={{paddingHorizontal: 20, height: 50, backgroundColor: backgroundColor, justifyContent:'center', marginTop: marginTop}}>
      <TouchableOpacity onPress={onPress}>
        <Text style={{alignSelf:'center', fontSize: 18, fontWeight: '600', color: fontColor}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
