// REACT:
import React, { useState } from 'react'
import { Text, Image } from 'react-native'
import {
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native-gesture-handler'
// STYLED:
import styled from 'styled-components/native'
// SESSION STORAGE:
import AsyncStorage from '@react-native-async-storage/async-storage'

const ContainerSt = styled.View`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  /*  */
  background-color: #f1f1f4;
`
const RowSt = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  /*  */
  background-color: #78a5c4;
`
const CustomText = styled.Text`
    margin-top: 40px;
    font-size: 40px;
`

const CreateRecipe = ({ navigation }) => {

  return (
    <ContainerSt>
      <RowSt>
        <CustomText>Name of Your Recipe</CustomText>
      </RowSt>
      <RowSt>
        <CustomText>Ingredients</CustomText>
      </RowSt>
      <RowSt>
        <CustomText>Directions</CustomText>
      </RowSt>
      <RowSt>
        <CustomText>Image</CustomText>
      </RowSt>
    </ContainerSt>
  )
}
export default CreateRecipe
