import React, { useState } from 'react'
import { Text, StyleSheet, View, Keyboard, Pressable } from 'react-native'
import styled from 'styled-components/native'
import IconBook from 'react-native-vector-icons/FontAwesome'
import IconFavorite from 'react-native-vector-icons/AntDesign'
import IconProfile from 'react-native-vector-icons/AntDesign'
import { RowOfElements } from './small_elements/RowOfElements'
import { ConstantsRecipe } from '../../constants'

// const BoxSt = styled.View``

const RowSt = styled(RowOfElements)`
  /* min-height: 15px; */
  justify-content: space-evenly;
  /* align-items: stretch; */
  /*  */
`

const IconFavoriteSt = styled(IconFavorite)`
  display: flex;
  align-self: center;
  padding: 10px;
  font-size: 40px;
  color: ${props =>
    props.iconeName == 'favorites' ? ConstantsRecipe.green : '#ccc'};
  text-shadow: ${ConstantsRecipe.text_shadow};
  margin-top: 0;
`
const IconBookSt = styled(IconBook)`
  display: flex;
  align-self: center;
  padding: 10px;
  font-size: 40px;
  color: ${props =>
    props.iconeName == 'recipes' ? ConstantsRecipe.green : '#ccc'};
  text-shadow: ${ConstantsRecipe.text_shadow};
`
const IconProfileSt = styled(IconProfile)`
  display: flex;
  align-self: center;
  padding: 10px;
  font-size: 40px;
  text-shadow: ${ConstantsRecipe.text_shadow};
  color: ${props =>
    props.iconeName == 'profile' ? ConstantsRecipe.green : '#ccc'};
`

const BoxSt = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${ConstantsRecipe.gray2};
`
const RecipesText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${props =>
    props.iconeName == 'recipes' ? ConstantsRecipe.green : '#ccc'};
  text-shadow: ${ConstantsRecipe.text_shadow};
`
const FavoritesText = styled(RecipesText)`
  color: ${props =>
    props.iconeName == 'favorites' ? ConstantsRecipe.green : '#ccc'};
`
const ProfileText = styled(RecipesText)`
  color: ${props =>
    props.iconeName == 'profile' ? ConstantsRecipe.green : '#ccc'};
`
const NavIcons = props => {
  return (
    <RowSt>
      <BoxSt
        style={[
          props.iconName == 'recipes' ? styles.customShadow : styles.noShadow
        ]}
      >
        <IconBookSt name='book' iconeName={props.iconName} />
        <RecipesText iconeName={props.iconName}>Recipes</RecipesText>
      </BoxSt>
      <BoxSt
        style={[
          props.iconName == 'favorites' ? styles.customShadow : styles.noShadow
        ]}
      >
        <IconFavoriteSt name='heart' iconeName={props.iconName} />
        <FavoritesText iconeName={props.iconName}>Favorites</FavoritesText>
      </BoxSt>
      <BoxSt
        style={[
          props.iconName == 'profile' ? styles.customShadow : styles.noShadow
        ]}
      >
        <Pressable
          onPress={() => {
            props.toProfileScreen()
          }}
        >
          <IconProfileSt name='github' iconeName={props.iconName} />
          <ProfileText iconeName={props.iconName}>Profile</ProfileText>
        </Pressable>
      </BoxSt>
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
  },
  noShadow: {}
})

export default NavIcons
