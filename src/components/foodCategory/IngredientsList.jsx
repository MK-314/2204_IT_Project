import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import styled from 'styled-components/native'
import { ConstantsRecipe } from '../../../constants'
import { RowOfElements } from '../small_elements/RowOfElements'
const { width, height } = Dimensions.get('window')

const RowSt = styled(RowOfElements)`
  justify-content: flex-start;
  margin-top: ${height * 0.012875}px;
  overflow: hidden;
`
const ListItem = styled.Text`
  display: flex;
  font-size: ${height * 0.0321875}px;
  font-weight: bold;
  color: ${ConstantsRecipe.green};
  text-shadow: ${ConstantsRecipe.text_shadow};
  margin-left: ${width * 0.115}px;
`
const IngredientsList = props => {
  return (
    <RowSt>
      <ListItem>{props.name}</ListItem>
    </RowSt>
  )
}

export default IngredientsList
