import React, { useState } from 'react'
import { Text, StyleSheet, View, Keyboard, Image } from 'react-native'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/AntDesign'
import BackIcon from 'react-native-vector-icons/Ionicons'
import {
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native-gesture-handler'
import { TextNum } from '../FoodCard'
import { RowOfElements } from '../small_elements/RowOfElements'

const RowSt = styled(RowOfElements)`
  min-height: 200px;
  overflow: hidden;
  /* background-color: #78a5c4; */
`
const SmallFoodItem = styled.Image`
  display: flex;
  width: 300px;
  height: 270px;
  border-radius: 20px;
  margin-top: 10px;
`

const TextSt = styled.Text`
  display: flex;
  position: absolute;
  bottom: 25px;
  left: 60px;
  font-size: 55px;
  font-weight: bold;
  color: #2ec269;
  text-shadow: #000 1px 3px 5px;
  z-index: 1;
`

const HeartIcon = styled(Icon)`
  display: flex;
  position: absolute;
  top: 30px;
  right: 165px;
  font-size: 35px;
  color: #2ec269;
  font-weight: bold;
  text-shadow: #000 1px 3px 5px;
  z-index: 1;
`
const IconBack = styled(BackIcon)`
  display: flex;
  position: absolute;
  top: 30px;
  left: 60px;
  font-size: 40px;
  color: #2ec269;
  font-weight: bold;
  text-shadow: #000 1px 3px 5px;
  z-index: 1;
`
const IconShare = styled(Icon)`
  display: flex;
  position: absolute;
  top: 30px;
  right: 75px;
  font-size: 35px;
  color: #2ec269;
  font-weight: bold;
  text-shadow: #000 1px 3px 5px;
  z-index: 1;
`
const SmallTextNum = styled(TextNum)`
  font-size: 25px;
  right: 130px;
`

const SmallFoodCard = props => {
  return (
    <RowSt>
      <SmallFoodItem
        source={{
          uri: 'https://images.mktw.net/im-398488?width=1280&size=1'
        }}
      />
      <HeartIcon name={'heart'} />
      <IconShare name={'sharealt'} />
      <IconBack
        name={'arrow-back'}
        onPress={() => {
          props.toHomeScreen()
        }}
      />
      <TextSt>Burger</TextSt>
      <SmallTextNum>22</SmallTextNum>
    </RowSt>
  )
}

export default SmallFoodCard
export { SmallTextNum }
