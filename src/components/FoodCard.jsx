import React, { useState } from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/AntDesign'
import { ConstantsRecipe } from '../../constants'
import { RowOfElements } from './small_elements/RowOfElements'
import { MainHeader, WhiteRow } from './small_elements/MainHeader'

const { width, height } = Dimensions.get('window')

const Box = styled.View`
  position: relative;
  width: ${width * 0.69}px;
  height: ${height * 0.515}px;
  border-radius: 50px;
  margin-top: ${height * 0.0515}px;
  margin-right: ${width * 0.025555}px;
  margin-left: ${width * 0.076666}px;
`
const FoodItem = styled.Image`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: ${width * 0.69}px;
  height: ${height * 0.515}px;
  border-radius: 50px;
`
const IconSt = styled(Icon)`
  display: flex;
  position: absolute;
  top:  ${height * 0.038625}px;
  left: ${width * 0.076666}px;
  font-size: ${height * 0.038625}px;
  color: ${props =>
    props.name == 'hearto' ? ConstantsRecipe.green : 'orangered'};
  font-weight: bold;
  text-shadow: 1px 1px 1px #000000;
  z-index: 1;
`
const TextNum = styled.Text`
  position: absolute;
  top: ${height * 0.02575}px;
  right: ${width * 0.3961111}px;
  font-size: ${height * 0.0450625}px;
  font-weight: bold;
  color: ${ConstantsRecipe.green};
  text-shadow: ${ConstantsRecipe.text_shadow};
  z-index: 1;
`

const FoodCard = props => {
  const [iconName, seticonName] = useState('hearto')
  const [number, setnumber] = useState(0)

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
