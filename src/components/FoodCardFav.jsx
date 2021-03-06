// CONTEXT
import React, { useContext, useEffect, useState, useRef } from 'react'
import RecipeContext from '../context/RecipeContext.jsx'
//
import { StyleSheet, Dimensions, Animated } from 'react-native'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/AntDesign'
import { ConstantsRecipe, HightUnit, WidthUnit } from '../../constants'
import { RowOfElements } from './small_elements/RowOfElements'
import { MainHeader, WhiteRow } from './small_elements/MainHeader'
import { FetchApi } from '../../datahandler'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TextNumber } from './small_elements/TextNumber.jsx'

const { width, height } = Dimensions.get('window')

const Box = styled.View`
  position: relative;
  width:  ${width * WidthUnit * 270}px;
  height: ${height * HightUnit * 340}px;
  border-radius: 50px;
  margin-top: ${height * HightUnit * 0}px;
  margin-right:  ${width * WidthUnit * 10}px;
  margin-left: ${props =>
    props.singleMode == 1 ? width * WidthUnit * 57 : width * WidthUnit * 30}px;
`
const FoodItem = styled.Image`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width:  ${width * WidthUnit * 270}px;
  height: ${height * HightUnit * 340}px;
  border-radius: 50px;
`
const IconSt = styled(Icon)`
  display: flex;
  position: absolute;
  top: ${height * HightUnit * 30}px;
  margin-left: ${width * WidthUnit * 30}px;
  font-size: ${height * HightUnit * 30}px;
  color: ${props =>
    props.name == 'hearto' ? ConstantsRecipe.green : 'orangered'};
  font-weight: bold;
  text-shadow: 1px 1px 1px #000000;
  z-index: 1;
`

const FoodCardFav = props => {
  // USECONTEXT
  const { firstUseEffectDoneFav, setFirstUseEffectDoneFav } = useContext(
    RecipeContext
  )
  const { singleMode, setSingleMode } = useContext(RecipeContext)
  // LOCAL STATES:
  const [iconName, seticonName] = useState('hearto')
  const [likesNum, setLikesNum] = useState(0)

  const fadeAnim = useRef(new Animated.Value(0)).current
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true
    }).start()
  }, [])

  useEffect(async () => {
    if (firstUseEffectDoneFav) {
      try {
        let user_id = await AsyncStorage.getItem('user_id')
        // counting hearts number:
        let heartsNum = await FetchApi.countFavsByPostId(props.itemId)
        let likedPosts = await FetchApi.getFavsByPostId(props.itemId)
        let filteredResult = likedPosts.filter(post => post.user_id == user_id)
        filteredResult.length != 0
          ? seticonName('heart')
          : seticonName('hearto')
        setLikesNum(heartsNum)
      } catch (error) {
        console.log('ERROR from FoodCardFav.jsx : ' + error)
      }
    }
  }, [firstUseEffectDoneFav])

  const handleHearts = async () => {
    try {
      let user_id = await AsyncStorage.getItem('user_id')
      if (iconName == 'hearto') {
        await FetchApi.createFavRecord({
          user_id: user_id,
          post_id: props.itemId
        })
        await FetchApi.updatePost({ likes: likesNum + 1 }, props.itemId)
        //
        setLikesNum(likesNum + 1)
        seticonName('heart')
      } else {
        let favRecord = await FetchApi.getByUserIdAndPostId(
          user_id,
          props.itemId
        )
        let fav_id = favRecord[0].id
        await FetchApi.deleteFavRecord(fav_id)
        //
        setLikesNum(likesNum - 1)
        await FetchApi.updatePost({ likes: likesNum -1 }, props.itemId)
        seticonName('hearto')
      }
    } catch (error) {
      console.log('ERRRRRRR ' + error)
    }
  }

  return (
    <Animated.View
      style={[
        {
          // Bind opacity to animated value
          opacity: fadeAnim
        }
      ]}
    >
      <Box style={styles.customShadow} singleMode={singleMode}>
        <TextNumber>{likesNum}</TextNumber>
        <WhiteRow style={styles.customShadow}>
          <MainHeader>{props.textFood}</MainHeader>
        </WhiteRow>
        <IconSt name={iconName} onPress={handleHearts} />
        <FoodItem
          singleMode={singleMode}
          source={{
            uri: props.url
          }}
        />
      </Box>
    </Animated.View>
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
export default FoodCardFav
