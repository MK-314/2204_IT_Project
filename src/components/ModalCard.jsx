import React, { useState } from 'react'
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native'
import styled from 'styled-components/native'
import { ConstantsRecipe } from '../../constants'
import { RowOfElements } from './small_elements/RowOfElements'
import { Dimensions } from 'react-native'
import SmallDefaultBtn from './small_elements/SmallDefaultBtn'
import AsyncStorage from '@react-native-async-storage/async-storage'
const { width, height } = Dimensions.get('window')

const CustomView = styled.View`
  display: flex;
  flex-direction: column;
  background-color: ${ConstantsRecipe.white};
  border-radius: 20px;
  padding: ${height * 0.0012875 * 35}px ${width * 0.0025555 * 35}px;
  margin-top: ${height * 0.0012875 * 100}px;
  margin-left: ${width * 0.0025555 * 20}px;
  margin-right: ${width * 0.0025555 * 20}px;
  min-height: ${height * 0.0012875 * 500}px;
`

const DirectionText = styled.Text`
  font-size: ${height * 0.0012875 * 25}px;
`
const InputDirections = styled.TextInput`
  /* min-height: 300px; */
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: ${height * 0.0012875 * 12}px ${width * 0.0025555 * 12}px;
  border-width: 1px;
  padding: ${height * 0.0012875 * 10}px ${width * 0.0025555 * 10}px;
  justify-content: flex-start;
  height: ${height * 0.0012875 * 350}px;
`

const ModalCard = props => {
  const [inputValue, setInputValue] = useState('')

  const storeInput = async () => {
    if (inputValue.length > 0) {
      switch (props.mode) {
        case 'recipeName':
          await AsyncStorage.setItem('recipeName', inputValue)
          setInputValue('')
          break
        case 'Ingredients':
          await AsyncStorage.setItem('Ingredients', inputValue)
          setInputValue('')
          break
        case 'Directions':
          await AsyncStorage.setItem('Directions', inputValue)
          setInputValue('')
          break
      }
    }
    props.visibleModalUp()
  }

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={props.visibleModal}
      onRequestClose={() => {
        props.visibleModalUp()
      }}
    >
      <CustomView style={styles.modalView}>
        {/* INSIDE START*/}
        <RowOfElements>
          <DirectionText>{props.modalText}</DirectionText>
        </RowOfElements>
        <RowOfElements>
          <InputDirections
            style={{ textAlignVertical: 'top' }}
            placeholder={'Type here ...'}
            multiline={true}
            autoCapitalize='none'
            autoCorrect={false}
            value={inputValue}
            onChangeText={newValue => setInputValue(newValue)}
          />
        </RowOfElements>
        <Pressable onPress={storeInput}>
          <SmallDefaultBtn text={'Save'} />
        </Pressable>
        {/* INSIDE END */}
      </CustomView>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalView: {
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

export default ModalCard
