// REACT:
import React, { useState } from 'react'
import { Text, Image } from 'react-native'
// STYLED:
import styled from 'styled-components/native'
// SESSION STORAGE:
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ContainerDefault } from '../components/small_elements/ContainerDefault'
import { RowOfElements } from '../components/small_elements/RowOfElements'

const ContainerSt = styled(ContainerDefault)`
  background-color: #f1f1f4;
`
const RowSt = styled(RowOfElements)`
  background-color: #78a5c4;
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
