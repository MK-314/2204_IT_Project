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
import { ConstantsRecipe } from '../../../constants'
import { MainHeader, WhiteRow } from '../small_elements/MainHeader'

const RowSt = styled(RowOfElements)`
  min-height: 200px;
  overflow: hidden;
  /*   background-color: ${ConstantsRecipe.lightBlue}; */
`
const Box = styled.View`
  position: relative;
  width: 300px;
  height: 270px;
  border-radius: 20px;
  margin: 40px 0px;
  overflow: hidden;
`
const SmallFoodItem = styled.Image`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 270px;
  border-radius: 20px;
`
const HeartIcon = styled(Icon)`
  display: flex;
  position: absolute;
  top: 30px;
  right: 165px;
  font-size: 35px;
  color: ${ConstantsRecipe.green};
  font-weight: bold;
  text-shadow: ${ConstantsRecipe.text_shadow};
`
const IconBack = styled(BackIcon)`
  position: absolute;
  top: 30px;
  left: 60px;
  font-size: 40px;
  color: ${ConstantsRecipe.green};
  font-weight: bold;
  text-shadow: ${ConstantsRecipe.text_shadow};
`
const IconShare = styled(Icon)`
  top: 30px;
  right: 75px;
  font-size: 35px;
  color: ${ConstantsRecipe.green};
  font-weight: bold;
  text-shadow: ${ConstantsRecipe.text_shadow};
`
const SmallTextNum = styled(TextNum)`
  font-size: 25px;
  right: 130px;
`
const TextSt = styled(MainHeader)`
font-size: 25px;
`
const WhiteRowModified = styled(WhiteRow)`
left: 25px;
bottom: 10px;
`

const SmallFoodCard = props => {
  return (
    <RowSt>
      <Box style={styles.customShadow}>
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
        <WhiteRowModified>
          <TextSt>Burger</TextSt>
        </WhiteRowModified>
        <SmallTextNum>22</SmallTextNum>
      </Box>
    </RowSt>
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

export default SmallFoodCard
export { SmallTextNum }
