import React, { useState } from 'react'
import { StyleSheet, Dimensions } from 'react-native'
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
const { width, height } = Dimensions.get('window')

const RowSt = styled(RowOfElements)`
  min-height: ${height * 0.2575}px;
`
const Box = styled.View`
  position: relative;
  width: ${width * 0.766666}px;
  height: ${height * 0.347625}px;
  border-radius: 20px;
  margin-top: ${height * 0.0012875 * 25}px;
  margin-bottom: ${height * 0.012875}px;
  overflow: hidden;
`
const SmallFoodItem = styled.Image`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: ${width * 0.766666}px;
  height: ${height * 0.347625}px;
  border-radius: 20px;
`
const HeartIcon = styled(Icon)`
  position: absolute;
  top: ${height * 0.0167375}px;
  left: ${width * 0.1405555}px;
  font-size: ${height * 0.0450625}px;
  color: ${ConstantsRecipe.green};
  font-weight: bold;
  text-shadow: ${ConstantsRecipe.text_shadow};
`
const IconBack = styled(BackIcon)`
  position: absolute;
  top: ${height * 0.012875}px;
  left: ${width * 0.0255555}px;
  font-size: ${height * 0.0515}px;
  color: ${ConstantsRecipe.green};
  font-weight: bold;
  text-shadow: ${ConstantsRecipe.text_shadow};
`
const IconShare = styled(Icon)`
  position: absolute;
  top: ${height * 0.012875}px;
  right: ${width * 0.0638888}px;
  font-size: ${height * 0.0450625}px;
  color: ${ConstantsRecipe.green};
  font-weight: bold;
  text-shadow: ${ConstantsRecipe.text_shadow};
`
const SmallTextNum = styled.Text`
  position: absolute;
  top: ${height * 0.0012875 * 5}px;
  left: ${width * 0.0025555 * 105}px;
  font-size: ${height * 0.0012875 * 35}px;
  font-weight: bold;
  color: ${ConstantsRecipe.green};
  text-shadow: ${ConstantsRecipe.text_shadow};
  z-index: 1;
`
const MainHeaderModified = styled(MainHeader)`
  font-size: ${height * 0.0012875 * 25}px;
`
const WhiteRowModified = styled(WhiteRow)`
  left: ${width * 0.0025555 * 25}px;
  bottom: ${height * 0.0012875 * 10}px;
`

const SmallFoodCard = props => {
  return (
    <RowSt>
      <Box style={styles.customShadow}>
        <SmallFoodItem
          source={{
            uri: props.item.imageUrl
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
          <MainHeaderModified>{props.item.name}</MainHeaderModified>
        </WhiteRowModified>
        <SmallTextNum>{props.item.id}</SmallTextNum>
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
