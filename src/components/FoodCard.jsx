import React, { useState } from 'react'
import { Text, StyleSheet, View, Keyboard, Image } from 'react-native'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/AntDesign'
import {
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native-gesture-handler'

const Box = styled.View`
  position: relative;
  width: 300px;
  height: 500px;
  border-radius: 50px;
  margin-right: 10px;
  margin-left: 10px;

  /* background-color: #78a5c4; */
`

const FoodItem = styled.Image`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 500px;
  border-radius: 50px;
`
const IconSt = styled(Icon)`
  display: flex;
  position: absolute;
  top: 30px;
  left: 30px;
  font-size: 45px;
  color: #2ec269;
  font-weight: bold;
  text-shadow: #000 1px 3px 5px;
  z-index: 1;
`
const EmptyIcon = styled(Icon)`
  display: flex;
  position: absolute;
  top: 110px;
  left: 20px;
  font-size: 250px;
  color: transparent;
  font-weight: bold;
  text-shadow: #000 1px 3px 5px;
  z-index: 1;
`
const TextSt = styled.Text`
  display: flex;
  position: absolute;
  bottom: 50px;
  left: 30px;
  font-size: 55px;
  font-weight: bold;
  color: #2ec269;
  text-shadow: #000 1px 3px 5px;
  z-index: 1;
`

const TextNum = styled.Text`
  display: flex;
  position: absolute;
  top: 27px;
  right: 175px;
  font-size: 35px;
  font-weight: bold;
  color: #2ec269;
  text-shadow: #000 1px 3px 5px;
  z-index: 1;
`

const FoodCard = props => {
  const [iconName, seticonName] = useState('hearto')
  const [number, setnumber] = useState(props.number)

  return (
    <Box>
      <EmptyIcon
       name={'hearto'}
        onPress={() => {
          props.toFoodCategory()
        }}
      />
      <TextNum>{number}</TextNum>
      <TextSt>{props.textFood}</TextSt>
      <IconSt
        name={iconName}
        onPress={() => {
          if (iconName == 'hearto') {
            seticonName('heart')
            setnumber(number + 1)
          } else {
            seticonName('hearto')
            setnumber(number - 1)
          }
        }}
      />
      <FoodItem
        source={{
          uri: props.url
        }}
      />
    </Box>
  )
}

export default FoodCard
export {TextNum}