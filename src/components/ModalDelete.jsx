// REACT:
import React, { useEffect, useState } from 'react'
import { Text, Image, Modal, StyleSheet, Pressable } from 'react-native'
// STYLED:
import styled from 'styled-components/native'
// SESSION STORAGE:
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ContainerDefault } from './small_elements/ContainerDefault'
import { RowOfElements } from './small_elements/RowOfElements'
// ICONS:
import { default as BackIcon } from 'react-native-vector-icons/AntDesign'
//
import { Dimensions } from 'react-native'
import { ConstantsRecipe, HightUnit, WidthUnit } from '../../constants'
import SmallDefaultBtn from './small_elements/SmallDefaultBtn'
import { H1Text } from './small_elements/H1Text'
const { width, height } = Dimensions.get('window')

const ModalContainer = styled(ContainerDefault)`
  justify-content: center;
  background-color: #000000c7;
`
const RowOfElementsCustom = styled(RowOfElements)`
  /* background-color: aqua; */
`
const ModalRow = styled(RowOfElements)`
  flex-direction: column;
  width: 80%;
  height: ${height * HightUnit * 300}px;
  background-color: #ccccccbc;
  border-radius: 20px;
`
const Confirm = styled(H1Text)`
  margin-top: ${height * HightUnit * 10}px;
  margin-bottom: ${height * HightUnit * 10}px;
  font-size: ${height * HightUnit * 35}px;
  color: #774747;
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
  width: ${width * WidthUnit * 65}px;
  height: ${height * HightUnit * 60}px;
`

const ModalDelete = props => {
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {}}
    >
      <ModalContainer>
        <RowOfElementsCustom>
          <ModalRow style={styles.modalView}>
            <IconBox>
              <IconBack name='closecircle' onPress={() => props.hideModal()} />
            </IconBox>
            <Confirm>Shall I delete Recipe?</Confirm>
            <Pressable
              onPress={() => {
                props.deleteRecipe()
                props.hideModal()
              }}
            >
              <RowOfElements>
                <SmallDefaultBtn
                  text={'Destroy It!'}
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
export default ModalDelete
