// REACT:
import React, { useEffect, useState } from 'react'
import { Text, Image, Modal, StyleSheet, Pressable } from 'react-native'
// STYLED:
import styled from 'styled-components/native'
// SESSION STORAGE:
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ContainerDefault } from '../components/small_elements/ContainerDefault'
import { RowOfElements } from '../components/small_elements/RowOfElements'
// ICONS:
import { default as BackIcon } from 'react-native-vector-icons/AntDesign'
//
import { Dimensions } from 'react-native'
import { ConstantsRecipe, HightUnit, WidthUnit } from '../../constants'
import SmallDefaultBtn from './small_elements/SmallDefaultBtn'
import {
  TextInputSt,
  TextInputStShadow
} from './small_elements/TextInputDefault'
import { H1Text } from './small_elements/H1Text'
const { width, height } = Dimensions.get('window')

const ModalContainer = styled(ContainerDefault)`
  justify-content: center;
  background-color: #000000c7;
`
const RowOfElementsCustom = styled(RowOfElements)`
  /* margin-top: 250px; */
`
const ModalRow = styled(RowOfElements)`
  flex-direction: column;
  width: 90%;
  height: ${height * HightUnit * 450}px;
  background-color: #ccccccbc;
  border-radius: 20px;
`
const HeaderModalText = styled(H1Text)`
  margin-top: ${height * HightUnit * 10}px;
  margin-bottom: ${height * HightUnit * 10}px;
  font-size: ${height * HightUnit * 35}px;
`
const IconBack = styled(BackIcon)`
  padding: ${height * HightUnit * 10}px ${width * WidthUnit * 10}px;
  font-size: ${height * HightUnit * 40}px;
  color: ${ConstantsRecipe.green};
  font-weight: bold;
  text-shadow: 1px 1px 1px #000000;
`
const IconBox = styled.View`
  position: absolute;
  top: 0px;
  right: 0px;
  width: ${width * WidthUnit * 60}px;
  height: ${height * HightUnit * 65}px;
`
const CustomInput = styled(TextInputSt)`
  padding-top: 20px;
  height: ${height * HightUnit * 250}px;
  border-radius: 10px;
  width: 95%;
`
const CustomShadow = styled(TextInputStShadow)`
  height: ${height * HightUnit * 250}px;
  border-radius: 10px;
  width: 95%;
`

const ModalCard2 = props => {
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
      <ModalContainer>
        <RowOfElementsCustom>
          <ModalRow style={styles.modalView}>
            <IconBox>
              <IconBack name='closecircle' onPress={() => props.hideModal()} />
            </IconBox>
            <HeaderModalText>{props.modalText}</HeaderModalText>
            <CustomShadow>
              <CustomInput
                style={{ textAlignVertical: 'top' }}
                value={inputValue}
                multiline={true}
                autoCapitalize='none'
                onChangeText={newValue => setInputValue(newValue)}
                placeholder={
                  props.modalText == 'Recipe name:'
                    ? 'Enter name of your recipe ...'
                    : 'Put your text here ...'
                }
              />
            </CustomShadow>
            <Pressable onPress={storeInput}>
              <RowOfElements>
                <SmallDefaultBtn
                  text={props.btnText}
                  marginSt={30}
                  width={75}
                />
              </RowOfElements>
            </Pressable>
          </ModalRow>
        </RowOfElementsCustom>
      </ModalContainer>
    </Modal>
  )
}
const styles = StyleSheet.create({
  modalView: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24
  }
})
export default ModalCard2
