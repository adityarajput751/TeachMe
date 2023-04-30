import { View, Text, Image } from 'react-native'
import React from 'react'
import { AppImage } from '../../../theme/AppImage'
import BackButton from '../../../components/BackButton'

const Login = () => {
  return (
    <View style={{flex:1, paddingHorizontal: 20}}>
      <BackButton />
    </View>
  )
}

export default Login