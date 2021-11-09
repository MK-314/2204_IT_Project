import React, { useState } from 'react'
import { Text, StyleSheet, View, Keyboard } from 'react-native'
import styled from 'styled-components/native'
import IconBook from 'react-native-vector-icons/FontAwesome'
import IconFavorite from 'react-native-vector-icons/AntDesign'
import IconProfile from 'react-native-vector-icons/AntDesign'
import { ScrollView } from 'react-native-gesture-handler'

// const BoxSt = styled.View``

const RowSt = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 30px;
  position: relative;
  justify-content: space-evenly;
  align-items: stretch;
  /*  */
  background-color: #c6cac687;
`

const IconFavoriteSt = styled(IconFavorite)`
  display: flex;
  align-self: center;
  padding: 10px;
  font-size: ${props=>props.big ? '85px' : '65px'};
  color: ${props=>props.big ? 'red' : '#ccc'};
  text-shadow: #000 1px 3px 5px;
  margin-top: ${props=>props.big ? '-20px' : '0'};
`
const IconBookSt = styled(IconBook)`
  display: flex;
  align-self: center;
  padding: 10px;
  font-size: 65px;
  color: #2ec269;
  text-shadow: #000 1px 3px 5px;
`
const IconProfileSt = styled(IconProfile)`
  display: flex;
  align-self: center;
  padding: 10px;
  font-size: 65px;
  color: #ccc;
  text-shadow: #000 1px 3px 5px;
`

const Box1 = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #d7dfe6;
`
const Box2 = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #d7dfe6;
`
const Box3 = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #d7dfe6;
`

const TextSt = styled.Text`
  display: flex;
  font-size: 25px;
  font-weight: bold;
  color: #2ec269;
  text-shadow: #000 1px 3px 5px;
`
const DisabledText = styled(TextSt)`
  color: #ccc;
`

const NavIcons = () => {
  const [bigHeart, setBigHeart] = useState(false)
  return (
    <RowSt>
      <Box1>
        <IconBookSt name='book' />
        <TextSt>Recipes</TextSt>
      </Box1>
      <Box2>
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
      </Box2>
      <Box3>
        <IconProfileSt name='github' />
        <DisabledText>Profile</DisabledText>
      </Box3>
    </RowSt>
  )
}

export default NavIcons
