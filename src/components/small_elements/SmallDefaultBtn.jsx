import React, { useState } from 'react'
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native'
import styled from 'styled-components/native'
import { ConstantsRecipe, HightUnit, WidthUnit } from '../../../constants'
import { Dimensions } from 'react-native'
import { RowOfElements } from './RowOfElements'
const { width, height } = Dimensions.get('window')

const DefaultBtn = styled(RowOfElements)`
  background-color: ${ConstantsRecipe.green};
  width: 40%;
  border-radius: 20px;
  padding: ${height * HightUnit * 10}px ${width * WidthUnit * 10}px;
`
const BtnText = styled.Text`
  color: ${ConstantsRecipe.white};
  font-size: ${height * HightUnit * 18}px;
`

const SmallDefaultBtn = props => {
  return (
    <RowOfElements style={{ marginTop: props.marginSt }}>
      <DefaultBtn style={styles.boxShadow}>
        <BtnText>{props.text}</BtnText>
      </DefaultBtn>
    </RowOfElements>
  )
}

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11
  }
})
export default SmallDefaultBtn
