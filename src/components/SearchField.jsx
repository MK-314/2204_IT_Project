import React, { useState } from 'react'
import { Text, StyleSheet, View, Keyboard } from 'react-native'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { RowOfElements } from './small_elements/RowOfElements'
import { ConstantsRecipe } from '../../constants'

const RowSt = styled(RowOfElements)`
  min-height: 70px;
  margin-top: 3%;
  margin-bottom: 3%;
  /*  */
  /* background-color: orangered; */
`
const TextInputSt = styled.TextInput`
  display: flex;
  background-color: ${ConstantsRecipe.white};
  width: ${props => (props.focusedSt ? '90%' : '80%')};
  height: 50px;
  margin-right: -55px;
  padding-left: 20px;
  border-radius: 100px;
`
const IconSt = styled(Icon)`
  display: flex;
  align-self: center;
  padding: 10px;
  font-size: 30px;
  color: ${ConstantsRecipe.green};
`

const SearchField = props => {
  const [focusedBool, setfocusedBool] = useState(false)
  return (
    <RowSt>
      <TextInputSt
        placeholder='Search a recipe'
        focusedSt={focusedBool}
        onFocus={() => {
          setfocusedBool(true)
          props.hidden()
        }}
        onBlur={() => {
          setfocusedBool(false)
        }}
      />
      <IconSt name='search' />
    </RowSt>
  )
}

export default SearchField