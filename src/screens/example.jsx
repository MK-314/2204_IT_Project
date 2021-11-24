// REACT:
import React, { useState } from 'react'
import { Text, Image } from 'react-native'
// STYLED:
import styled from 'styled-components/native'
// SESSION STORAGE:
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ContainerDefault } from '../components/small_elements/ContainerDefault'
import { RowOfElements } from '../components/small_elements/RowOfElements'
// 
import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

const startUseEffectChain = ({ navigation }) => {

  return (
    <ContainerDefault>
      <RowOfElements>
        
      </RowOfElements>
    </ContainerDefault>
  )
}
export default startUseEffectChain
