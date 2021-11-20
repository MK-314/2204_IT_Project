import React, { useState } from 'react'
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native'
import styled from 'styled-components/native'

const CustomView = styled.View`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 20px;
  padding: 35px;
  margin-top: 100px;
  margin-left:20px;
  margin-right:20px;
  min-height: 500px;
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
        <Text s>Hello World!</Text>
        <Pressable
          onPress={() => props.visibleModalUp()}
        >
          <Text>Hide Modal</Text>
        </Pressable>
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
  },
})

export default ModalCard
