// REACT:
import React, { useState } from 'react'
import { Pressable, StyleSheet } from 'react-native'
// STYLED:
import styled from 'styled-components/native'
// SESSION STORAGE:
import AsyncStorage from '@react-native-async-storage/async-storage'
import ModalCard from '../components/ModalCard'
import SmallDefaultBtn from '../components/small_elements/SmallDefaultBtn'
import { ContainerDefault } from '../components/small_elements/ContainerDefault'
import { RowOfElements } from '../components/small_elements/RowOfElements'
import { ConstantsRecipe } from '../../constants'

const ContainerSt = styled(ContainerDefault)`
  /*  */
  /* background-color: #425c5c; */
`

const RowSt = styled(RowOfElements)`
/*  */
  /* background-color: #ccc; */
`

const TitleBox = styled.View`
  display: flex;
  flex-direction: row;
  min-width: 85%;
  align-items: center;
  justify-content: center;
  /* border: 1px solid; */
  border-radius: 20px;
  margin-top: 30px;
  overflow: hidden;
  /*  */
  background-color: #aff1c9;
`

const CustomText = styled.Text`
  font-size: 25px;
  padding: 40px 0px;
  /*  */
  /* background-color: red; */
`

const CreateRecipe = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <ContainerSt>
      <RowSt>
        <TitleBox style={styles.elementShadow}>
          <CustomText>Name of Your Recipe</CustomText>
        </TitleBox>
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
const styles = StyleSheet.create({
  elementShadow: {
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
export default CreateRecipe
