// REACT:
import React, { useState, useEffect } from 'react'
import { Text, Image, StyleSheet } from 'react-native'
// STYLED:
import styled from 'styled-components/native'
// SESSION STORAGE:
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ContainerDefault } from '../components/small_elements/ContainerDefault'
import { RowOfElements } from '../components/small_elements/RowOfElements'
import NavIcons from '../components/NavIcons'
import { FooterDefault } from '../components/small_elements/FooterDefault'
import { ConstantsRecipe } from '../../constants'
import { MainHeader } from '../components/small_elements/MainHeader'
// ICONS
import { default as IconPencil } from 'react-native-vector-icons/Entypo'
import { default as IconHeartbeat } from 'react-native-vector-icons/FontAwesome5'
import { default as IconFollowers } from 'react-native-vector-icons/MaterialCommunityIcons'
import SmallDefaultBtn from '../components/small_elements/SmallDefaultBtn'
import { Pressable } from 'react-native'
import { FetchApi } from '../../datahandler'
//
import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

const HeaderRow = styled(RowOfElements)`
  margin-top: ${height * 0.0012875 * 40}px;
  margin-left: ${width * 0.0025555 * 25}px;
  justify-content: flex-start;
  /* background-color: aqua; */
`
const AvatarBox = styled.View`
  position: relative;
  width: ${width * 0.0025555 * 140}px;
  height: ${height * 0.0012875 * 140}px;
  border-radius: 30px;
`
const AvatarImg = styled.Image`
  position: absolute;
  width: ${width * 0.0025555 * 140}px;
  height: ${height * 0.0012875 * 140}px;
  border-radius: 30px;
`
const NameText = styled(MainHeader)`
  display: flex;
  flex: 1;
  margin-left: ${width * 0.0025555 * 35}px;
  flex-wrap: wrap;
`
const MainViewRow = styled(RowOfElements)`
  justify-content: flex-start;
  margin-left: ${width * 0.0025555 * 25}px;
  margin-top: ${height * 0.0012875 * 70}px;
  /* background-color: aqua; */
`
const MainViewRow2 = styled(MainViewRow)`
  margin-top: ${height * 0.0012875 * 20}px;
`
const MainViewRow3 = styled(MainViewRow)`
  margin-top: ${height * 0.0012875 * 20}px;
`
const ElevatedPart = styled(RowOfElements)`
  width: ${width * 0.0025555 * 170}px;
  /* height: 50px; */
  margin-right: ${width * 0.0025555 * 55}px;
  border-radius: 10px;
  background-color: ${ConstantsRecipe.lightGreen};
`
const TextOfElevation = styled.Text`
  padding: ${height * 0.0012875 * 20}px 0px;
  font-size: ${height * 0.0012875 * 17}px;
  font-weight: 700;
`
const PencilIcon = styled(IconPencil)`
  font-size: ${height * 0.0012875 * 50}px;
  color: ${ConstantsRecipe.green};
  font-weight: bold;
  text-shadow: ${ConstantsRecipe.text_shadow};
`
const HeartbeatIcon = styled(IconHeartbeat)`
  font-size: ${height * 0.0012875 * 50}px;
  color: ${ConstantsRecipe.green};
  font-weight: bold;
  text-shadow: ${ConstantsRecipe.text_shadow};
`
const FollowersIcon = styled(IconFollowers)`
  font-size: ${height * 0.0012875 * 50}px;
  color: ${ConstantsRecipe.green};
  font-weight: bold;
  text-shadow: ${ConstantsRecipe.text_shadow};
`
const NumberRecipes = styled.Text`
  position: absolute;
  top: ${height * 0.0012875 * 3}px;
  left: ${width * 0.0025555 * 17}px;
  font-size: ${height * 0.0012875 * 35}px;
  margin-right: ${width * 0.0025555 * 20}px;
  text-shadow: ${ConstantsRecipe.text_shadow};
`
const NumberRecipesBox = styled.View`
  position: relative;
  margin-right: ${width * 0.0025555 * 20}px;
  border-radius: 100px;
  width: ${width * 0.0025555 * 55}px;
  height: ${height * 0.0012875 * 55}px;
  background-color: ${ConstantsRecipe.lightGreen};
  text-shadow: ${ConstantsRecipe.text_shadow};
`

const ProfileScreen = ({ navigation }) => {
  useEffect(async () => {
    let email = await AsyncStorage.getItem('email')
    let user = await FetchApi.getUserByEmail(email)
  }, [])

  return (
    <ContainerDefault>
      <HeaderRow>
        <AvatarBox style={styles.elementShadow}>
          <AvatarImg
            source={{
              uri:
                'https://www.baytekent.com/wp-content/uploads/2016/12/facebook-default-no-profile-pic1.jpg'
            }}
          />
        </AvatarBox>
        <NameText>Michael Kashkov</NameText>
      </HeaderRow>
      {/* ////////////////////////////////////////////////////////////////////// */}
      <MainViewRow>
        <ElevatedPart style={styles.elementShadow}>
          <TextOfElevation>Posted Recipes</TextOfElevation>
        </ElevatedPart>
        <NumberRecipesBox style={styles.elementShadow}>
          <NumberRecipes>7</NumberRecipes>
        </NumberRecipesBox>
        <PencilIcon name='pencil' />
      </MainViewRow>
      {/* ////////////////////////////////////////////////////////////////////// */}
      <MainViewRow2>
        <ElevatedPart style={styles.elementShadow}>
          <TextOfElevation>Favourites</TextOfElevation>
        </ElevatedPart>
        <NumberRecipesBox style={styles.elementShadow}>
          <NumberRecipes>2</NumberRecipes>
        </NumberRecipesBox>
        <HeartbeatIcon name='heartbeat' />
      </MainViewRow2>
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
        <SmallDefaultBtn text={'New Recipe'} marginSt={50} />
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
