import React, { useState } from 'react'
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native'
import styled from 'styled-components/native'
import { ConstantsRecipe } from '../../constants'
import { RowOfElements } from './small_elements/RowOfElements'
import SmallDefaultBtn from './small_elements/SmallDefaultBtn'
import AsyncStorage from '@react-native-async-storage/async-storage'

const CustomView = styled.View`
  display: flex;
  flex-direction: column;
  background-color: ${ConstantsRecipe.white};
  border-radius: 20px;
  padding: 35px;
  margin-top: 100px;
  margin-left: 20px;
  margin-right: 20px;
  min-height: 500px;
`

const DirectionText = styled.Text`
  font-size: 25px;
`
const InputDirections = styled.TextInput`
  /* min-height: 300px; */
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 12px;
  border-width: 1px;
  padding: 10px;
  justify-content: flex-start;
  height: 350px;
`

const ModalCard = props => {
  const [inputValue, setInputValue] = useState('')

  const storeInput = async () => {
    if (inputValue.length > 0) {
      await AsyncStorage.setItem('recipeName', inputValue)
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
