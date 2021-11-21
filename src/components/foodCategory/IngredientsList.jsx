import React, { useState } from 'react'
import { Text, StyleSheet, View, Keyboard, Image } from 'react-native'
import styled from 'styled-components/native'
import { ConstantsRecipe } from '../../../constants'
import { RowOfElements } from '../small_elements/RowOfElements'

const RowSt = styled(RowOfElements)`
  justify-content: flex-start;
  margin-top: 10px;
  overflow: hidden;
`
const ListItem = styled.Text`
  display: flex;
  font-size: 25px;
  font-weight: bold;
  color: ${ConstantsRecipe.green};
  text-shadow: ${ConstantsRecipe.text_shadow};
  margin-left: 45px;
`
const IngredientsList = props => {
  return (
    <RowSt>
      <ListItem>{props.name}</ListItem>
    </RowSt>
  )
}

export default IngredientsList
