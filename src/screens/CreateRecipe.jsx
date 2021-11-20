// REACT:
import React, { useState } from 'react'
import {
  Alert,
  Modal,
  StyleSheet,
  Pressable,
  View,
  Text,
  Image
} from 'react-native'
import {
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native-gesture-handler'
// STYLED:
import styled from 'styled-components/native'
// SESSION STORAGE:
import AsyncStorage from '@react-native-async-storage/async-storage'
import ModalCard from '../components/ModalCard'
import SmallDefaultBtn from '../components/small_elements/SmallDefaultBtn'

const ContainerSt = styled.View`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  /*  */
  background-color: #f1f1f4;
`
const RowSt = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  /*  */
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
