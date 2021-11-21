import React, { useState } from 'react'
import { Text, StyleSheet, View, Keyboard } from 'react-native'
import styled from 'styled-components/native'
import IconBook from 'react-native-vector-icons/FontAwesome'
import IconFavorite from 'react-native-vector-icons/AntDesign'
import IconProfile from 'react-native-vector-icons/AntDesign'
import { ScrollView } from 'react-native-gesture-handler'
import { RowOfElements } from './small_elements/RowOfElements'
import { ConstantsRecipe } from '../../constants'

// const BoxSt = styled.View``

const RowSt = styled(RowOfElements)`
  min-height: 30px;
  justify-content: space-evenly;
  align-items: stretch;
  /*  */
`

const IconFavoriteSt = styled(IconFavorite)`
  display: flex;
  align-self: center;
  padding: 10px;
  font-size: ${props => (props.big ? '85px' : '65px')};
  color: ${props => (props.big ? 'red' : ConstantsRecipe.white)};
  text-shadow: ${ConstantsRecipe.text_shadow};
  margin-top: ${props => (props.big ? '-20px' : '0')};
`
const IconBookSt = styled(IconBook)`
  display: flex;
  align-self: center;
  padding: 10px;
  font-size: 65px;
  color: ${ConstantsRecipe.green};
  text-shadow: ${ConstantsRecipe.text_shadow};
`
const IconProfileSt = styled(IconProfile)`
  display: flex;
  align-self: center;
  padding: 10px;
  font-size: 65px;
  color: ${ConstantsRecipe.white};
`

const BoxSt = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${ConstantsRecipe.gray};
`
const TextSt = styled.Text`
  display: flex;
  font-size: 25px;
  font-weight: bold;
  color: ${ConstantsRecipe.green};
  text-shadow: ${ConstantsRecipe.text_shadow};
`
const DisabledText = styled(TextSt)`
  color: ${ConstantsRecipe.gray};
`

const NavIcons = () => {
  const [bigHeart, setBigHeart] = useState(false)
  return (
    <RowSt>
      <BoxSt>
        <IconBookSt name='book' />
        <TextSt>Recipes</TextSt>
      </BoxSt>
      <BoxSt>
        <IconFavoriteSt
          name='heart'
          big={bigHeart}
          onPress={() => {
            setBigHeart(true)
            setTimeout(() => {
              setBigHeart(false)
            }, 2000)
          }}
        />
        <DisabledText>Favorites</DisabledText>
      </BoxSt>
      <BoxSt>
        <IconProfileSt name='github' />
        <DisabledText>Profile</DisabledText>
      </BoxSt>
    </RowSt>
  )
}

export default NavIcons
