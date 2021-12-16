// REACT:
import React, { useContext, useEffect, useState } from 'react'
import { Text, Image, StyleSheet } from 'react-native'
// STYLED:
import styled from 'styled-components/native'
// SESSION STORAGE:
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ContainerDefault } from '../components/small_elements/ContainerDefault'
import { RowOfElements } from '../components/small_elements/RowOfElements'
//
import { Dimensions } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import NavIcons from './../components/NavIcons'
import RecipeContext from '../context/RecipeContext'
import { FooterDefault } from '../components/small_elements/FooterDefault'
import { H1Text } from '../components/small_elements/H1Text'
import { AvatarBox } from '../components/small_elements/AvatarBox'
import { AvatarImg } from '../components/small_elements/AvatarImg'
import { Alien, HightUnit, NoPostsYet, WidthUnit } from '../../constants'
const { width, height } = Dimensions.get('window')

const H1TextCustomized = styled(H1Text)`
  font-size: ${height * HightUnit * 30}px;
  text-align: center;
  margin-top: ${height * HightUnit * 15}px;
  margin-bottom: ${height * HightUnit * 15}px;
  margin-left:  ${height * HightUnit * 5}px;
  margin-right:  ${height * HightUnit * 5}px;
`
const NameText = styled(H1TextCustomized)`
  color: #774747;
  margin: auto;
  text-align: center;
  padding-bottom: ${height * HightUnit * 30}px;
  /* background-color: aqua; */
`
const RowOfElementsCustomized = styled(RowOfElements)`
  justify-content: flex-start;
`
const AvatarBoxCusmomized = styled(AvatarBox)`
  margin-bottom: ${height * HightUnit * 20}px;
  margin-left:  ${width * WidthUnit * 40}px;
`

const FollowersScreen = ({ navigation }) => {
  const favScreenItems = navigation.getParam('favScreenItems')
  const { startUseEffectChainFav, setStartUseEffectChainFav } = useContext(
    RecipeContext
  )
  const { firstUseEffectDoneFav, setFirstUseEffectDoneFav } = useContext(
    RecipeContext
  )
  useEffect(() => {
    const unsubscribe = navigation.addListener('didFocus', () => {
      setFirstUseEffectDoneFav(true)
      setStartUseEffectChainFav(false)
    })
    return unsubscribe
  }, [navigation])

  return (
    <ContainerDefault>
      <RowOfElements>
        <H1TextCustomized>You have Awesome Followers!</H1TextCustomized>
      </RowOfElements>
      <RowOfElements>
        <FlatList
          vertical
          data={favScreenItems}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <RowOfElementsCustomized>
                <AvatarBoxCusmomized style={styles.elementShadow}>
                  {item.avatar ? (
                    <AvatarImg source={{ uri: item.avatar }} />
                  ) : (
                    <AvatarImg
                      source={{
                        uri: Alien
                      }}
                    />
                  )}
                </AvatarBoxCusmomized>
                <NameText>{item.name}</NameText>
              </RowOfElementsCustomized>
            )
          }}
          contentContainerStyle={{ paddingBottom: 200, paddingTop: 10 }}
        />
      </RowOfElements>
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
export default FollowersScreen
