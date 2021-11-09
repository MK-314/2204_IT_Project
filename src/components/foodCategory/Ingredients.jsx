import React, { useState } from 'react'
import { Text, StyleSheet, View, Keyboard, Image } from 'react-native'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/AntDesign'
import BackIcon from 'react-native-vector-icons/Ionicons'
import {
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native-gesture-handler'
import { TextNum } from '../FoodCard'

const RowSt = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  /* align-items: center; */
  width: 100%;
  /* min-height: 200px; */
  /*  */
  position: relative;
  margin-top: 10px;

  overflow: hidden;
  /*  */
  /* background-color: #78a5c4; */
`
const BlackAria = styled.View`
  display: flex;
  background-color: black;
  border-radius: 10px;
  margin-left: 45px;
`
const IngredientsText = styled.Text`
  color: #fff;
  font-size: 25px;
  padding: 5px 15px;
`

const Ingredients = props => {
  return (
    <RowSt>
      <BlackAria>
        <IngredientsText>Ingredients:</IngredientsText>
      </BlackAria>
    </RowSt>
  )
}

export default Ingredients
