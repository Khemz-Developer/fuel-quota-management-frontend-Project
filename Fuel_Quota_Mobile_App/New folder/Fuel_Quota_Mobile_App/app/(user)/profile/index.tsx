import React from 'react'
import { Text, View } from 'react-native'
import UserIntro from '../../../components/Profile/UserIntro'
import MenuList from '../../../components/Profile/MenuList'
import {Colors} from '../../../constants/Colors'
const Index = () => {
  return (
    <View style={{
      padding:20,
    }}>
      <Text style={{
        fontFamily:'outfit-medium',
        fontSize:25,
        marginTop:20,
        color:'gray',
        textAlign:'center'
      }}> Profile</Text>


      <UserIntro />

      <MenuList/>
    </View>
  )
}

export default Index
