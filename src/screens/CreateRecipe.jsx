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
import Icon from 'react-native-vector-icons/Entypo'
import { Text } from 'react-native'

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
  border-radius: 20px;
  margin-top: 50px;
  margin-bottom: 40px;
  overflow: hidden;
  /*  */
  background-color: ${ConstantsRecipe.gray2};
`

const CustomText = styled.Text`
  font-size: 25px;
  padding: 40px 0px;
  /*  */
  /* background-color: red; */
`
const ViewArrowAndText = styled(RowSt)`
  justify-content: space-evenly;
  /* background-color: aqua; */
`
const IconArr = styled(Icon)`
  font-size: 100px;
  color: ${ConstantsRecipe.green};
  font-weight: bold;
  text-shadow: ${ConstantsRecipe.text_shadow};
`
const SmallTitleBox = styled(TitleBox)`
  min-width: 42%;
  margin-top: 0px;
  margin-bottom: 0px;
`
const TextOfSmallBox = styled.Text`
  font-size: 20px;
  padding: 25px 10px;
`

const CreateRecipe = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <ContainerSt>
      <ModalCard
        visibleModal={modalVisible}
        visibleModalUp={() => {
          setModalVisible(false)
        }}
      />
      <RowSt>
        <TitleBox style={styles.elementShadow}>
          <CustomText>Name of Your Recipe</CustomText>
        </TitleBox>
      </RowSt>
      <ViewArrowAndText>
        <IconArr name={'arrow-long-right'} onPress={() => {}} />
        <SmallTitleBox style={styles.elementShadow}>
          <TextOfSmallBox>Ingredients</TextOfSmallBox>
        </SmallTitleBox>
      </ViewArrowAndText>
      <ViewArrowAndText>
        <IconArr name={'arrow-long-right'} onPress={() => {}} />
        <SmallTitleBox style={styles.elementShadow}>
          <TextOfSmallBox>Directions</TextOfSmallBox>
        </SmallTitleBox>
      </ViewArrowAndText>
      <ViewArrowAndText>
        <IconArr name={'arrow-long-right'} onPress={() => {}} />
        <SmallTitleBox style={styles.elementShadow}>
          <TextOfSmallBox>Image</TextOfSmallBox>
        </SmallTitleBox>
      </ViewArrowAndText>
      <RowSt>
        {/* <Pressable onPress={() => setModalVisible(true)}>
          <CustomText>Directions</CustomText>
        </Pressable> */}
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
