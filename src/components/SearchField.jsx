import React, { useState } from 'react'
import { Text, StyleSheet, View, Keyboard } from 'react-native'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { RowOfElements } from './small_elements/RowOfElements'
import { ConstantsRecipe } from '../../constants'
import { AsyncStorage } from '@react-native-async-storage/async-storage';

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
  const [inputValue, setInputValue] = useState('')

  // const searchFoodItem = async (newValue) => {
  //   setInputValue(newValue)
  //   let timer = null
  //   clearTimeout(timer)
  //   timer = setTimeout(() => {
  //     console.log(JSON.stringify(props.itemsByUser[0].name)+" ITEMS")
  //     let searchRes = props.itemsByUser.filter(it => it.name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()))
  //     props.sendingFilteredResult(searchRes)
  //   }, 500)
  const searchFoodItem = (newValue) => {
    setInputValue(newValue)
    props.request(newValue)
  }

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
        autoCapitalize='none'
        autoCorrect={false}
        value={inputValue}
        onChangeText={newValue => searchFoodItem(newValue)}
      />
      <IconSt name='search' />
    </RowSt>
  )
}

export default SearchField
