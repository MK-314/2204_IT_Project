import React, { useState } from 'react'
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native'
import styled from 'styled-components/native'
import { ConstantsRecipe } from '../../constants'
import { RowOfElements } from './small_elements/RowOfElements'
import SmallDefaultBtn from './small_elements/SmallDefaultBtn'

const CustomView = styled.View`
  display: flex;
  flex-direction: column;
  background-color: #fff;
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
        {/* INSIDE */}
        <RowOfElements>
          <DirectionText>Put Directions here:</DirectionText>
        </RowOfElements>
        <RowOfElements>
          <InputDirections style={{ textAlignVertical: 'top',}}
            placeholder={'Recipe directions ...'}
            multiline={true}
            // numberOfLines={25}
          />
        </RowOfElements>
        <Pressable onPress={() => props.visibleModalUp()}>
          <SmallDefaultBtn text={'Hide Modal'} />
        </Pressable>
        {/* END INSIDE */}
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
