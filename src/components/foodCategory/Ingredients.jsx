import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { ConstantsRecipe } from '../../../constants'
import { RowOfElements } from '../small_elements/RowOfElements'

const RowSt = styled(RowOfElements)`
  justify-content: flex-start;
  overflow: hidden;
  /*  */
    /* background-color: ${ConstantsRecipe.lightBlue}; */
`
const BlackAria = styled.View`
  display: flex;
  background-color: black;
  border-radius: 10px;
  margin-left: 45px;
  margin-bottom: 10px;
`
const IngredientsText = styled.Text`
  color: ${ConstantsRecipe.white};
  font-size: 18px;
  padding: 5px 15px;
  text-transform: uppercase;
`

const Ingredients = props => {
  return (
    <RowSt>
      <BlackAria style={styles.customShadow}>
        <IngredientsText>Ingredients:</IngredientsText>
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

export default Ingredients
