import React, { useState } from 'react'
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native'
import styled from 'styled-components/native'
import { ConstantsRecipe } from '../../../constants'
import { RowOfElements } from './RowOfElements'

const DefaultBtn = styled(RowOfElements)`
  background-color: ${ConstantsRecipe.green};
  margin-top: 20px;
  width: 40%;
  border-radius: 20px;
  padding: 10px;
`
const BtnText = styled.Text`
  color: ${ConstantsRecipe.white};
`

const SmallDefaultBtn = props => {
  return (
    <RowOfElements>
      <DefaultBtn>
        <BtnText>{props.text}</BtnText>
      </DefaultBtn>
    </RowOfElements>
  )
}
export default SmallDefaultBtn
