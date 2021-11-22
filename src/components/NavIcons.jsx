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
  color: #ccc;
  text-shadow: ${ConstantsRecipe.text_shadow};
  margin-top: 0;
`
const IconBookSt = styled(IconBook)`
  display: flex;
  align-self: center;
  padding: 10px;
  font-size: 40px;
  color: ${ConstantsRecipe.green};
  text-shadow: ${ConstantsRecipe.text_shadow};
`
const IconProfileSt = styled(IconProfile)`
  display: flex;
  align-self: center;
  padding: 10px;
  font-size: 40px;
  text-shadow: ${ConstantsRecipe.text_shadow};
  color: #ccc;
`

const BoxSt = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${ConstantsRecipe.gray2};
`
const TextSt = styled.Text`
  display: flex;
  font-size: 20px;
  font-weight: bold;
  color: ${ConstantsRecipe.green};
  text-shadow: ${ConstantsRecipe.text_shadow};
`
const DisabledText = styled(TextSt)`
  color: #ccc;
  text-shadow: ${ConstantsRecipe.text_shadow};
`

const NavIcons = props => {
  const [bigHeart, setBigHeart] = useState(false)
  return (
    <RowSt>
      <BoxSt style={styles.customShadow}>
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
        <Pressable
          onPress={() => {
            props.toProfileScreen()
          }}
        >
          <IconProfileSt name='github' />
          <DisabledText>Profile</DisabledText>
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
  }
})

export default NavIcons
