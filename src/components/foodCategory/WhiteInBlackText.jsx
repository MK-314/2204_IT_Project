import React, { useState, useContext } from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import styled from 'styled-components/native'
import { ConstantsRecipe, HightUnit, WidthUnit } from '../../../constants'
import { RowOfElements } from '../small_elements/RowOfElements'
import RecipeContext from '../../context/RecipeContext'
const { width, height } = Dimensions.get('window')

const RowSt = styled(RowOfElements)`
  justify-content: flex-start;
`
const BlackAria = styled.View`
  display: flex;
  background-color: black;
  border-radius: 10px;
  margin-left: ${width * 0.115}px;
  margin-bottom: ${height * 0.012875}px;
`
const CustomText = styled.Text`
  color: ${ConstantsRecipe.white};
  font-size: ${height * 0.023175}px;
  padding: ${height * 0.00643}px ${width * 0.038333}px;
  text-transform: uppercase;
`

const WhiteInBlackText = props => {

  return (
    <RowSt>
      <BlackAria style={styles.customShadow}>
        <CustomText>{props.text}</CustomText>
      </BlackAria>
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

export default WhiteInBlackText
