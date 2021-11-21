import React, { useState } from 'react'
import styled from 'styled-components/native'
import { RowOfElements } from '../small_elements/RowOfElements'

const RowSt = styled(RowOfElements)`
  justify-content: flex-start;
  margin-top: 10px;
  overflow: hidden;
  /*  */
  /* background-color: #78a5c4; */
`
const BlackAria = styled.View`
  display: flex;
  background-color: black;
  border-radius: 10px;
  margin-left: 45px;
`
const IngredientsText = styled.Text`
  color: #fff;
  font-size: 25px;
  padding: 5px 15px;
`

const Ingredients = props => {
  return (
    <RowSt>
      <BlackAria>
        <IngredientsText>Ingredients:</IngredientsText>
      </BlackAria>
    </RowSt>
  )
}

export default Ingredients
