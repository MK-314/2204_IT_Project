import React, { useState } from 'react'
import { Text, StyleSheet, View, Keyboard, Image } from 'react-native'
import styled from 'styled-components/native'
import { RowOfElements } from '../small_elements/RowOfElements'

const RowSt = styled(RowOfElements)`
  justify-content: flex-start;
  margin-top: 10px;
  overflow: hidden;
  /* background-color: #78a5c4; */
`
const ListItem = styled.Text`
  display: flex;
  font-size: 25px;
  font-weight: bold;
  color: #2ec269;
  text-shadow: #000 1px 3px 5px;
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
