import React, { useEffect, useState } from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import styled from 'styled-components/native'
import { default as BombIcon } from 'react-native-vector-icons/FontAwesome5'
import Icon from 'react-native-vector-icons/AntDesign'
import BackIcon from 'react-native-vector-icons/Ionicons'
import { TextNum } from '../FoodCard'
import { RowOfElements } from '../small_elements/RowOfElements'
import { ConstantsRecipe, HightUnit, WidthUnit } from '../../../constants'
import { MainHeader, WhiteRow } from '../small_elements/MainHeader'
import { FetchApi } from '../../../datahandler'
import ModalDelete from './../ModalDelete'
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
  color: ${props =>
    props.name == 'hearto' ? ConstantsRecipe.green : 'orangered'};
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
const IconBomb = styled(BombIcon)`
  position: absolute;
  top: ${height * HightUnit * 10}px;
  right: ${width * WidthUnit * 25}px;
  font-size: ${height * HightUnit * 35}px;
  color: orangered;
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
  const [modalVisible, setModalVisible] = useState(false)
  const [ableToDelete, setableToDelete] = useState(false)

  useEffect(async () => {
    try {
      let user_id = await AsyncStorage.getItem('user_id')
      // counting hearts number:
      let heartsNum = props.item.likes
      let likedPosts = await FetchApi.getFavsByPostId(props.item.id)
      let filteredResult = likedPosts.filter(post => post.user_id == user_id)
      // red or green heard:
      filteredResult.length != 0 ? seticonName('heart') : seticonName('hearto')
      // able to edit or not:
      if (props.item.user_id == user_id) setableToDelete(true)
      setLikesNum(heartsNum)
    } catch (error) {
      console.log('ERROR from FoodCardFav.jsx : ' + error)
    }
  }, [])

  const handleHearts = async () => {
    try {
      let user_id = await AsyncStorage.getItem('user_id')
      if (iconName == 'hearto') {
        await FetchApi.createFavRecord({
          user_id: user_id,
          post_id: props.item.id
        })
        await FetchApi.updatePost({ likes: likesNum + 1 }, props.item.id)
        //
        setLikesNum(likesNum + 1)
        seticonName('heart')
      } else {
        let favRecord = await FetchApi.getByUserIdAndPostId(
          user_id,
          props.item.id
        )
        let fav_id = favRecord[0].id
        await FetchApi.deleteFavRecord(fav_id)
        //
        setLikesNum(likesNum - 1)
        await FetchApi.updatePost({ likes: likesNum - 1 }, props.item.id)
        seticonName('hearto')
      }
    } catch (error) {
      console.log('ERRORRRR FROM SMALL CARD JSX ' + error)
    }
  }

  const handleDestroyItNow = async () => {
    try {
      await FetchApi.deletePost(props.item.id)
      props.toUserRecipes()
    } catch (error) {
      console.log('Delete Error => ' + error)
    }
  }

  return (
    <RowSt>
      <ModalDelete
        modalVisible={modalVisible}
        hideModal={() => {
          setModalVisible(false)
        }}
        deleteRecipe={handleDestroyItNow}
      />
      <Box style={styles.customShadow}>
        <SmallFoodItem
          source={{
            uri: props.item.imageUrl
          }}
        />
        <HeartIcon name={iconName} onPress={handleHearts} />
        {ableToDelete && (
          <IconBomb name={'bomb'} onPress={() => setModalVisible(true)} />
        )}
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
