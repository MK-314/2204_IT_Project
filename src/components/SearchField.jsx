import React, { useState } from 'react'
import { Text, StyleSheet, View, Keyboard } from 'react-native'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { RowOfElements } from './small_elements/RowOfElements'
import { ConstantsRecipe } from '../../constants'
import { AsyncStorage } from '@react-native-async-storage/async-storage'

const RowSt = styled(RowOfElements)`
  min-height: 70px;
  margin-top: 7%;
  /*  */
  background-color: #1f8448;
`
const InputBox = styled(RowOfElements)`
  position: absolute;
  background-color: ${ConstantsRecipe.white};
  width: ${props => (props.focusedSt ? '90%' : '80%')};
  height: 50px;
  /* padding-left: 20px; */
  border-radius: 20px;
`
const TextInputSt = styled.TextInput`
  background-color: ${ConstantsRecipe.white};
  width: 100%;
  height: 50px;
  padding-left: 20px;
  border-radius: 20px;
`
const IconSt = styled(Icon)`
  display: flex;
  position: absolute;
  top: 8px;
  right: 15px;
  align-self: center;
  font-size: 30px;
  color: ${ConstantsRecipe.green};
`

const SearchField = props => {
  const [focusedBool, setfocusedBool] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const searchFoodItem = newValue => {
    setInputValue(newValue)
    props.request(newValue)
  }

  return (
    <RowSt>
      <InputBox style={styles.customShadow} focusedSt={focusedBool}>
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
          autoCapitalize='none'
          autoCorrect={false}
          value={inputValue}
          onChangeText={newValue => searchFoodItem(newValue)}
        />
        <IconSt name='search' />
      </InputBox>
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

export default SearchField
