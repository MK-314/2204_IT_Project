import React, { useContext, useState } from 'react'
import { Text, StyleSheet, View, Keyboard, Dimensions } from 'react-native'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { RowOfElements } from './small_elements/RowOfElements'
import { ConstantsRecipe } from '../../constants'
import { AsyncStorage } from '@react-native-async-storage/async-storage'
import RecipeContext from '../context/RecipeContext'
const { width, height } = Dimensions.get('window')

const RowSt = styled(RowOfElements)`
  min-height: ${height * 0.090125}px;
  margin-top: 7%;
  /*  */
  background-color: ${ConstantsRecipe.green};
`
const InputBox = styled(RowOfElements)`
  position: absolute;
  background-color: ${ConstantsRecipe.white};
  width: ${props => (props.focusedSt ? '90%' : '80%')};
  height: ${height * 0.064375}px;
  border-radius: 20px;
`
const TextInputSt = styled.TextInput`
  background-color: ${ConstantsRecipe.white};
  width: 100%;
  height: ${height * 0.064375}px;
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
  const { search, setSearch } = useContext(RecipeContext)

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
          value={search}
          onChangeText={newValue => setSearch(newValue)}
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
