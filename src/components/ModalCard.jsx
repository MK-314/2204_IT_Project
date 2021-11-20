import React, { useState } from 'react'
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native'
import styled from 'styled-components/native'
import { ConstantsRecipe } from '../../constants'
import { RowOfElements } from './small_elements/RowOfElements'

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

const DefaultBtn = styled(RowOfElements)`
  background-color: ${ConstantsRecipe.green};
  margin-top: 20px;
  width: 40%;
  border-radius: 20px;
  padding: 10px;
`
const BtnText = styled.Text`
  color: #fff;
`
const DirectionText = styled.Text`
  font-size: 25px;
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
        <Pressable onPress={() => props.visibleModalUp()}>
          <RowOfElements>
            <DefaultBtn>
              <BtnText>Hide Modal</BtnText>
            </DefaultBtn>
          </RowOfElements>
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
