// REACT:
import React, { useState, useEffect, useContext } from 'react'
import { Text, Image, StyleSheet } from 'react-native'
// STYLED:
import styled from 'styled-components/native'
// SESSION STORAGE:
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ContainerDefault } from '../components/small_elements/ContainerDefault'
import { RowOfElements } from '../components/small_elements/RowOfElements'
import NavIcons from '../components/NavIcons'
import { FooterDefault } from '../components/small_elements/FooterDefault'
import { ConstantsRecipe, HightUnit, WidthUnit } from '../../constants'
import { MainHeader } from '../components/small_elements/MainHeader'
// ICONS
import { default as IconPencil } from 'react-native-vector-icons/Entypo'
import { default as IconHeartbeat } from 'react-native-vector-icons/FontAwesome5'
import { default as IconFollowers } from 'react-native-vector-icons/MaterialCommunityIcons'
import SmallDefaultBtn from '../components/small_elements/SmallDefaultBtn'
import { Pressable } from 'react-native'
import { FetchApi } from '../../datahandler'
//
import { pickImage } from '../../imagePicker'
//
import { Dimensions } from 'react-native'
import { FireBaseImageHandler } from '../../firebase'
import RecipeContext from '../context/RecipeContext'
const { width, height } = Dimensions.get('window')

const HeaderRow = styled(RowOfElements)`
  margin-top: ${height * HightUnit * 30}px;
  margin-left: ${width * WidthUnit * 25}px;
  justify-content: flex-start;
  /* background-color: aqua; */
`
const AvatarBox = styled.View`
  position: relative;
  width: ${width * WidthUnit * 140}px;
  height: ${height * HightUnit * 140}px;
  border-radius: 30px;
`
const AvatarImg = styled.Image`
  position: absolute;
  width: ${width * WidthUnit * 140}px;
  height: ${height * HightUnit * 140}px;
  border-radius: 30px;
`
const NameText = styled(MainHeader)`
  display: flex;
  flex: 1;
  margin-left: ${width * WidthUnit * 35}px;
  flex-wrap: wrap;
`
const MainViewRow = styled(RowOfElements)`
  justify-content: flex-start;
  margin-left: ${width * WidthUnit * 25}px;
  margin-top: ${height * HightUnit * 40}px;
  /* background-color: aqua; */
`
const MainViewRow2 = styled(MainViewRow)`
  margin-top: ${height * HightUnit * 20}px;
`
const MainViewRow3 = styled(MainViewRow)`
  margin-top: ${height * HightUnit * 20}px;
`
const ElevatedPart = styled(RowOfElements)`
  width: ${width * WidthUnit * 170}px;
  /* height: 50px; */
  margin-right: ${width * WidthUnit * 55}px;
  border-radius: 10px;
  background-color: ${ConstantsRecipe.lightGreen};
`
const TextOfElevation = styled.Text`
  padding: ${height * HightUnit * 20}px 0px;
  font-size: ${height * HightUnit * 17}px;
  font-weight: 700;
`
const PencilIcon = styled(IconPencil)`
  font-size: ${height * HightUnit * 50}px;
  color: ${ConstantsRecipe.green};
  font-weight: bold;
  text-shadow: ${ConstantsRecipe.text_shadow};
`
const HeartbeatIcon = styled(IconHeartbeat)`
  font-size: ${height * HightUnit * 50}px;
  color: ${ConstantsRecipe.green};
  font-weight: bold;
  text-shadow: ${ConstantsRecipe.text_shadow};
`
const FollowersIcon = styled(IconFollowers)`
  font-size: ${height * HightUnit * 50}px;
  color: ${ConstantsRecipe.green};
  font-weight: bold;
  text-shadow: ${ConstantsRecipe.text_shadow};
`
const NumberRecipes = styled.Text`
  position: absolute;
  top: ${height * HightUnit * 3}px;
  left: ${width * WidthUnit * 17}px;
  font-size: ${height * HightUnit * 35}px;
  margin-right: ${width * WidthUnit * 20}px;
  text-shadow: ${ConstantsRecipe.text_shadow};
`
const NumberRecipesBox = styled.View`
  position: relative;
  margin-right: ${width * WidthUnit * 20}px;
  border-radius: 100px;
  width: ${width * WidthUnit * 55}px;
  height: ${height * HightUnit * 55}px;
  background-color: ${ConstantsRecipe.lightGreen};
  text-shadow: ${ConstantsRecipe.text_shadow};
`

const ProfileScreen = ({ navigation }) => {
  // USECONTEXT
  const { modeUserRecipes, setModeUserRecipes } = useContext(RecipeContext)
  // LOCAL STATES:
  const [avatar, setAvatar] = useState(
    'https://www.baytekent.com/wp-content/uploads/2016/12/facebook-default-no-profile-pic1.jpg'
  )
  const [userState, setUserState] = useState(null)
  const [postNumber, setPostNumber] = useState(0)
  const [namOfPostsThatUserLikes, setNamOfPostsThatUserLikes] = useState(0)

  useEffect(async () => {
    let email = await AsyncStorage.getItem('email')
    let data = await FetchApi.getUserByEmail(email)
    let user = data[0]
    setUserState(user)
    let numOfPosts = await FetchApi.countPostsByUserId(user.id)
    setPostNumber(numOfPosts)
    let favs = await FetchApi.countFavsByUserId(user.id)
    setNamOfPostsThatUserLikes(favs)
    if (user.avatar) setAvatar(user.avatar)
  }, [])

  const handleAvatarUpload = async () => {
    let pickedImage = await pickImage()
    let snapshot = await FireBaseImageHandler.uploadImageToFireBase(
      pickedImage.uri
    )
    let url = await FireBaseImageHandler.getUrlOfImageFireBase(
      snapshot.metadata.fullPath
    )
    setAvatar(url)
    await AsyncStorage.setItem('avatar', url)
    let swapObject = { ...userState, avatar: url }
    setUserState(swapObject)
    let userUpdateResult = await FetchApi.updateUser(userState.id, swapObject)
  }

  return (
    <ContainerDefault>
      <HeaderRow>
        <Pressable onPress={handleAvatarUpload}>
          <AvatarBox style={styles.elementShadow}>
            <AvatarImg source={{ uri: avatar }} />
          </AvatarBox>
        </Pressable>
        <NameText>Michael Kashkov</NameText>
      </HeaderRow>
      {/* ////////////////////////////////////////////////////////////////////// */}
      <Pressable
        onPress={() => {
          setModeUserRecipes(true)
          navigation.navigate('Home')
        }}
      >
        <MainViewRow>
          <ElevatedPart style={styles.elementShadow}>
            <TextOfElevation>Posted Recipes</TextOfElevation>
          </ElevatedPart>
          <NumberRecipesBox style={styles.elementShadow}>
            <NumberRecipes>{postNumber}</NumberRecipes>
          </NumberRecipesBox>
          <PencilIcon name='pencil' />
        </MainViewRow>
      </Pressable>
      {/* ////////////////////////////////////////////////////////////////////// */}
      <Pressable
        onPress={() => {
          navigation.navigate('Favourites')
        }}
      >
      <MainViewRow2>
        <ElevatedPart style={styles.elementShadow}>
          <TextOfElevation>Favourites</TextOfElevation>
        </ElevatedPart>
        <NumberRecipesBox style={styles.elementShadow}>
          <NumberRecipes>{namOfPostsThatUserLikes}</NumberRecipes>
        </NumberRecipesBox>
        <HeartbeatIcon name='heartbeat' />
      </MainViewRow2>
      </Pressable>
      {/* ////////////////////////////////////////////////////////////////////// */}
      <MainViewRow3>
        <ElevatedPart style={styles.elementShadow}>
          <TextOfElevation>Followers</TextOfElevation>
        </ElevatedPart>
        <NumberRecipesBox style={styles.elementShadow}>
          <NumberRecipes>7</NumberRecipes>
        </NumberRecipesBox>
        <FollowersIcon name='human-greeting' />
      </MainViewRow3>
      {/* ////////////////////////////////////////////////////////////////////// */}
      <Pressable
        onPress={() => {
          navigation.navigate('CreateRecipe')
        }}
      >
        <SmallDefaultBtn text={'New Recipe'} marginSt={40} />
      </Pressable>
      <FooterDefault>
        <NavIcons
          iconName='profile'
          toScreen={screen => {
            navigation.navigate(screen)
          }}
        />
      </FooterDefault>
    </ContainerDefault>
  )
}
const styles = StyleSheet.create({
  elementShadow: {
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

export default ProfileScreen
