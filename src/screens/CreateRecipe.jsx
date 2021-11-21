// REACT:
import React, { useState } from 'react'
import { Pressable } from 'react-native'
// STYLED:
import styled from 'styled-components/native'
// SESSION STORAGE:
import AsyncStorage from '@react-native-async-storage/async-storage'
import ModalCard from '../components/ModalCard'
import SmallDefaultBtn from '../components/small_elements/SmallDefaultBtn'
import { ContainerDefault } from '../components/small_elements/ContainerDefault'
import { RowOfElements } from '../components/small_elements/RowOfElements'

const ContainerSt = styled(ContainerDefault)`
  background-color: #f1f1f4;
`
const RowSt = styled(RowOfElements)`
  background-color: #78a5c4;
`
const CustomText = styled.Text`
  margin-top: 40px;
  font-size: 40px;
`
const CreateRecipe = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <ContainerSt>
      <RowSt>
        <CustomText>Name of Your Recipe</CustomText>
      </RowSt>
      <RowSt>
        <CustomText>Ingredients</CustomText>
      </RowSt>
      <RowSt>
        <ModalCard
          visibleModal={modalVisible}
          visibleModalUp={() => {
            setModalVisible(false)
          }}
        />
        <Pressable onPress={() => setModalVisible(true)}>
          <CustomText>Directions</CustomText>
        </Pressable>
      </RowSt>
      <RowSt>
        <CustomText>Image</CustomText>
      </RowSt>
      <Pressable onPress={() => {}}>
        <SmallDefaultBtn text={'Save Post'} />
      </Pressable>
    </ContainerSt>
  )
}
export default CreateRecipe
