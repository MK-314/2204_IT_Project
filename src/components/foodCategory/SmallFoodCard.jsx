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
  /*  */
  /* background-color: azure; */
`
const Box = styled.View`
  position: relative;
  width: 300px;
  height: 270px;
  border-radius: 20px;
  margin-top: 40px;
  margin-bottom: 20px;
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
  position: absolute;
  top: 13px;
  left: 55px;
  font-size: 35px;
  color: ${ConstantsRecipe.green};
  font-weight: bold;
  text-shadow: ${ConstantsRecipe.text_shadow};
`
const IconBack = styled(BackIcon)`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 40px;
  color: ${ConstantsRecipe.green};
  font-weight: bold;
  text-shadow: ${ConstantsRecipe.text_shadow};
`
const IconShare = styled(Icon)`
  position: absolute;
  top: 10px;
  right: 25px;
  font-size: 35px;
  color: ${ConstantsRecipe.green};
  font-weight: bold;
  text-shadow: ${ConstantsRecipe.text_shadow};
`
const SmallTextNum = styled.Text`
  position: absolute;
  top: 5px;
  left: 105px;
  font-size: 35px;
  font-weight: bold;
  color: ${ConstantsRecipe.green};
  text-shadow: ${ConstantsRecipe.text_shadow};
  z-index: 1;
`
const MainHeaderModified = styled(MainHeader)`
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
          <MainHeaderModified>Burger</MainHeaderModified>
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
