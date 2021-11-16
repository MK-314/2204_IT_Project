import React, { useState } from 'react'
import { Text, StyleSheet, View, Keyboard } from 'react-native'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'

// const BoxSt = styled.View``

const RowSt = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 70px;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-top: 3%;
  margin-bottom: 3%;
  /*  */
  /* background-color: orangered; */
`
const TextInputSt = styled.TextInput`
  display: flex;
  background-color: #fff;
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
  color: #2ec269;
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