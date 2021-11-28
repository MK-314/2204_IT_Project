import React, { useEffect, useState } from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/AntDesign'
import BackIcon from 'react-native-vector-icons/Ionicons'
import {
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native-gesture-handler'
import { TextNum } from '../FoodCard'
import { RowOfElements } from '../small_elements/RowOfElements'
import { ConstantsRecipe, HightUnit, WidthUnit } from '../../../constants'
import { MainHeader, WhiteRow } from '../small_elements/MainHeader'
import { FetchApi } from '../../../datahandler'
const { width, height } = Dimensions.get('window')

const RowSt = styled(RowOfElements)`
  min-height: ${height * HightUnit * 200}px;
`
const Box = styled.View`
  position: relative;
  width: ${width * WidthUnit * 300}px;
  height: ${height * HightUnit * 270}px;
  border-radius: 20px;
  margin-top: ${height * HightUnit * 25}px;
  margin-bottom: ${height * HightUnit * 10}px;
  overflow: hidden;
`
const SmallFoodItem = styled.Image`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: ${width * WidthUnit * 300}px;
  height: ${height * HightUnit * 270}px;
  border-radius: 20px;
`
const HeartIcon = styled(Icon)`
  position: absolute;
  top: ${height * HightUnit * 13}px;
  left: ${width * WidthUnit * 55}px;
  font-size: ${height * HightUnit * 35}px;
  color: ${ConstantsRecipe.green};
  font-weight: bold;
  text-shadow: ${ConstantsRecipe.text_shadow};
`
const IconBack = styled(BackIcon)`
  position: absolute;
  top: ${height * HightUnit * 10}px;
  left: ${width * WidthUnit * 10}px;
  font-size: ${height * HightUnit * 40}px;
  color: ${ConstantsRecipe.green};
  font-weight: bold;
  text-shadow: ${ConstantsRecipe.text_shadow};
`
const IconShare = styled(Icon)`
  position: absolute;
  top: ${height * HightUnit * 10}px;
  right: ${width * WidthUnit * 25}px;
  font-size: ${height * HightUnit * 35}px;
  color: ${ConstantsRecipe.green};
  font-weight: bold;
  text-shadow: ${ConstantsRecipe.text_shadow};
`
const SmallTextNum = styled.Text`
  position: absolute;
  top: ${height * HightUnit * 5}px;
  left: ${width * WidthUnit * 105}px;
  font-size: ${height * HightUnit * 35}px;
  font-weight: bold;
  color: ${ConstantsRecipe.green};
  text-shadow: ${ConstantsRecipe.text_shadow};
  z-index: 1;
`
const MainHeaderModified = styled(MainHeader)`
  font-size: ${height * HightUnit * 25}px;
`
const WhiteRowModified = styled(WhiteRow)`
  left: ${width * WidthUnit * 25}px;
  bottom: ${height * HightUnit * 10}px;
`

const SmallFoodCard = props => {
  const [likesNum, setLikesNum] = useState(0)
  const [iconName, seticonName] = useState('hearto')

  useEffect(async () => {
    try {
      let user_id = await AsyncStorage.getItem('user_id')
      // counting hearts number: 
      let heartsNum = await FetchApi.countFavsByPostId(props.item.id)
      let likedPosts = await FetchApi.getFavsByPostId(props.item.id)
      let filteredResult = likedPosts.filter(post => post.user_id == user_id)
      filteredResult.length != 0
        ? seticonName('heart')
        : seticonName('hearto')
      setLikesNum(heartsNum)
    } catch (error) {
      console.log('ERROR from FoodCardFav.jsx : ' + error)
    }
  }, [])

  return (
    <RowSt>
      <Box style={styles.customShadow}>
        <SmallFoodItem
          source={{
            uri: props.item.imageUrl
          }}
        />
        <HeartIcon name={iconName} />
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
        <SmallTextNum>{likesNum}</SmallTextNum>
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
