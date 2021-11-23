// REACT:
import React, { useState } from 'react'
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
//

const HeaderRow = styled(RowOfElements)`
  margin-top: 40px;
  margin-left: 25px;
  justify-content: flex-start;
  /* background-color: aqua; */
`
const AvatarBox = styled.View`
  position: relative;
  width: 140px;
  height: 140px;
  border-radius: 30px;
`
const AvatarImg = styled.Image`
  position: absolute;
  width: 140px;
  height: 140px;
  border-radius: 30px;
`
const NameText = styled(MainHeader)`
  display: flex;
  flex: 1;
  margin-left: 35px;
  flex-wrap: wrap;
`
const MainViewRow = styled(RowOfElements)`
  justify-content: flex-start;
  margin-left: 25px;
  margin-top: 70px;
  /* background-color: aqua; */
`
const MainViewRow2 = styled(MainViewRow)`
  margin-top: 20px;
`
const MainViewRow3 = styled(MainViewRow)`
  margin-top: 20px;
`
const ElevatedPart = styled(RowOfElements)`
  width: 170px;
  /* height: 50px; */
  margin-right: 55px;
  border-radius: 10px;
  background-color: ${ConstantsRecipe.lightGreen};
`
const TextOfElevation = styled.Text`
  padding: 20px 0px;
  font-size: 17px;
  font-weight: 700;
`
const PencilIcon = styled(IconPencil)`
  font-size: 50px;
  color: ${ConstantsRecipe.green};
  font-weight: bold;
  text-shadow: ${ConstantsRecipe.text_shadow};
`
const HeartbeatIcon = styled(IconHeartbeat)`
  font-size: 50px;
  color: ${ConstantsRecipe.green};
  font-weight: bold;
  text-shadow: ${ConstantsRecipe.text_shadow};
`
const FollowersIcon = styled(IconFollowers)`
  font-size: 50px;
  color: ${ConstantsRecipe.green};
  font-weight: bold;
  text-shadow: ${ConstantsRecipe.text_shadow};
`
const NumberRecipes = styled.Text`
  position: absolute;
  top: 3px;
  left: 17px;
  font-size: 35px;
  margin-right: 20px;
  text-shadow: ${ConstantsRecipe.text_shadow};
`
const NumberRecipesBox = styled.View`
  position: relative;
  margin-right: 20px;
  border-radius: 100px;
  width: 55px;
  height: 55px;
  background-color: ${ConstantsRecipe.lightGreen};
  text-shadow: ${ConstantsRecipe.text_shadow};
`

const ProfileScreen = ({ navigation }) => {
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
      <Pressable onPress={()=>{navigation.navigate('CreateRecipe')}}>
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
