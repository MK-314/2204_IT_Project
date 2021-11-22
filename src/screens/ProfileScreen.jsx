// REACT:
import React, { useState } from 'react'
import { Text, Image } from 'react-native'
// STYLED:
import styled from 'styled-components/native'
// SESSION STORAGE:
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ContainerDefault } from '../components/small_elements/ContainerDefault'
import { RowOfElements } from '../components/small_elements/RowOfElements'
import NavIcons from '../components/NavIcons'
import { FooterDefault } from '../components/small_elements/FooterDefault'

const ProfileScreen = ({ navigation }) => {

  return (
    <ContainerDefault>
      <RowOfElements>
        
      </RowOfElements>
      <FooterDefault>
        <NavIcons  
        iconName='profile'
        toScreen={(screen) => {
          navigation.navigate(screen)
        }}
        />
      </FooterDefault>
    </ContainerDefault>
  )
}
export default ProfileScreen

