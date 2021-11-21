// REACT:
import React, { useState } from 'react'
import { Text, Image } from 'react-native'
// STYLED:
import styled from 'styled-components/native'
// SESSION STORAGE:
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ContainerDefault } from '../components/small_elements/ContainerDefault'
import { RowOfElements } from '../components/small_elements/RowOfElements'
import { ConstantsRecipe } from '../../constants'

const ContainerSt = styled(ContainerDefault)`
  background-color: ${ConstantsRecipe.blue};
`
const RowSt = styled(RowOfElements)`
    background-color: ${ConstantsRecipe.lightBlue};
`
const ProfileScreen = ({ navigation }) => {

  return (
    <ContainerSt>
      <RowSt>
        <Text>ok ok</Text>
      </RowSt>
    </ContainerSt>
  )
}
export default ProfileScreen
