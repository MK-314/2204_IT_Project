import React, { useState } from 'react'
import {
  Text,
  StyleSheet,
  View,
  Keyboard,
  Image,
  Pressable
} from 'react-native'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/AntDesign'
import { ConstantsRecipe } from '../../constants'
import { RowOfElements } from './small_elements/RowOfElements'
import { MainHeader, WhiteRow } from './small_elements/MainHeader'

const Box = styled.View`
  position: relative;
  width: 270px;
  height: 400px;
  border-radius: 50px;
  margin-top: 40px;
  margin-right: 10px;
  margin-left: 30px;
`
const FoodItem = styled.Image`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 270px;
  height: 400px;
  border-radius: 50px;
`
const IconSt = styled(Icon)`
  display: flex;
  position: absolute;
  top: 30px;
  left: 30px;
  font-size: 35px;
  color: ${props =>
    props.name == 'hearto' ? ConstantsRecipe.green : 'orangered'};
  font-weight: bold;
  text-shadow: 1px 1px 1px #000000;
  z-index: 1;
`
const TextNum = styled.Text`
  position: absolute;
  top: 20px;
  right: 155px;
  font-size: 35px;
  font-weight: bold;
  color: ${ConstantsRecipe.green};
  text-shadow: ${ConstantsRecipe.text_shadow};
  z-index: 1;
`

const FoodCard = props => {
  const [iconName, seticonName] = useState('hearto')
  const [number, setnumber] = useState(props.number)

  return (
    <Box style={styles.customShadow}>
      <TextNum>{number}</TextNum>
      <WhiteRow style={styles.customShadow}>
        <MainHeader>{props.textFood}</MainHeader>
      </WhiteRow>
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
const styles = StyleSheet.create({
  customShadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 17
  }
})

export default FoodCard
export { TextNum }
