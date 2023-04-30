import { View, Text, Image } from 'react-native'
import React from 'react'
import { AppImage } from '../../theme/AppImage'

const Splash = () => {
  return (
    <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
      <Image source={AppImage.LOGO} />
    </View>
  )
}

export default Splash