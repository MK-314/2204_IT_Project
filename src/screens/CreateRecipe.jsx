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
// ICONS
import { default as Icon } from 'react-native-vector-icons/Entypo'
import { default as HandIcon } from 'react-native-vector-icons/FontAwesome5'
import { default as PhotoIcon } from 'react-native-vector-icons/Foundation'
//
import { Text } from 'react-native'
import { FireBaseImageHandler } from '../../firebase'
import { pickImage } from '../../imagePicker'
import { FetchApi } from '../../datahandler'

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
  background-color: ${props =>
    props.nameDone ? ConstantsRecipe.lightGreen : ConstantsRecipe.gray2};
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
const IconHand = styled(HandIcon)`
  font-size: 35px;
  color: ${ConstantsRecipe.green};
  font-weight: bold;
  text-shadow: ${ConstantsRecipe.text_shadow};
`
const IconPhoto = styled(PhotoIcon)`
  font-size: 85px;
  color: ${ConstantsRecipe.green};
  font-weight: bold;
  text-shadow: ${ConstantsRecipe.text_shadow};
  margin-right: 17px;
  margin-left: 5px;
`
const IconCheck = styled(Icon)`
  font-size: 35px;
  color: ${ConstantsRecipe.green};
  font-weight: bold;
  text-shadow: ${ConstantsRecipe.text_shadow};
`
const SmallTitleBox1 = styled(TitleBox)`
  min-width: 42%;
  max-width: 42%;
  margin-top: 0px;
  margin-bottom: 0px;
  justify-content: space-around;
  background-color: ${props =>
    props.ingredientsDone ? ConstantsRecipe.lightGreen : ConstantsRecipe.gray2};
`
const SmallTitleBox2 = styled(SmallTitleBox1)`
  background-color: ${props =>
    props.directionsDone ? ConstantsRecipe.lightGreen : ConstantsRecipe.gray2};
`
const SmallTitleBox3 = styled(SmallTitleBox1)`
  background-color: ${props =>
    props.imageDone ? ConstantsRecipe.lightGreen : ConstantsRecipe.gray2};
`

const TextOfSmallBox = styled.Text`
  font-size: 20px;
  padding: 25px 10px;
  /* margin-left: -20px; */
`
const ImageRow = styled(ViewArrowAndText)`
  margin-top: 12px;
`

const CreateRecipe = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [modalText, setModalText] = useState('')
  const [recipeName, setRecipeName] = useState('Name of Your Recipe')
  //
  const [nameDone, setNameDone] = useState(false)
  const [ingredientsDone, setIngredientsDone] = useState(false)
  const [directionsDone, setDirectionsDone] = useState(false)
  const [imageDone, setImageDone] = useState(false)
  //
  const [mode, setMode] = useState('')

  const dataFromModal = async () => {
    setModalVisible(false)

    switch (mode) {
      case 'recipeName':
        AsyncStorage.getItem('recipeName')
          .then(tempName => {
            if (tempName.length > 0) {
              setRecipeName(tempName)
              setNameDone(true)
            }
          })
          .catch(e => {})
        break
      case 'Ingredients':
        setIngredientsDone(true)
        break
      case 'Directions':
        setDirectionsDone(true)
        break
    }
  }
  const uploadImageToFireBase = async () => {
    let pickedImage = await pickImage()
    let snapshot = await FireBaseImageHandler.uploadImageToFireBase(
      pickedImage.uri
    )
    await AsyncStorage.setItem('PostPhoto', snapshot.metadata.fullPath)
    setImageDone(true)
  }
  const saveNewPost = async () => {
    let data = await FetchApi.createUser({
      name:"1",
      email:'2',
      avatar:"ok ok"
    })
  }

  return (
    <ContainerSt>
      <ModalCard
        visibleModal={modalVisible}
        modalText={modalText}
        mode={mode}
        visibleModalUp={dataFromModal}
      />
      {/* NAME STARTS */}
      <Pressable
        onPress={() => {
          setModalText('Recipe name:')
          setMode('recipeName')
          setModalVisible(true)
        }}
      >
        <RowSt>
          <TitleBox style={styles.elementShadow} nameDone={nameDone}>
            <CustomText>{recipeName}</CustomText>
          </TitleBox>
        </RowSt>
      </Pressable>
      {/* NAME ENDS */}
      {/* INGREDIENTS START */}
      <Pressable
        onPress={() => {
          setModalText('Ingredients')
          setMode('Ingredients')
          setModalVisible(true)
        }}
      >
        <ViewArrowAndText>
          <IconArr name={'arrow-long-right'} />
          <SmallTitleBox1
            style={styles.elementShadow}
            ingredientsDone={ingredientsDone}
          >
            <TextOfSmallBox>Ingredients</TextOfSmallBox>
            {!ingredientsDone && <IconHand name={'hand-pointer'} />}
            {ingredientsDone && <IconCheck name={'check'} />}
          </SmallTitleBox1>
        </ViewArrowAndText>
      </Pressable>
      {/* INGREDIENTS END */}
      {/* DIRECTIONS START */}
      <Pressable
        onPress={() => {
          setModalText('Directions')
          setMode('Directions')
          setModalVisible(true)
        }}
      >
        <ViewArrowAndText>
          <IconArr name={'arrow-long-right'} />
          <SmallTitleBox2
            style={styles.elementShadow}
            directionsDone={directionsDone}
          >
            <TextOfSmallBox>Directions</TextOfSmallBox>
            {!directionsDone && <IconHand name={'hand-pointer'} />}
            {directionsDone && <IconCheck name={'check'} />}
          </SmallTitleBox2>
        </ViewArrowAndText>
      </Pressable>
      {/* DIRECTIONS END */}
      {/* IMAGE START */}
      <Pressable onPress={uploadImageToFireBase}>
        <ImageRow>
          <IconPhoto name={'photo'} onPress={() => {}} />
          <SmallTitleBox3 style={styles.elementShadow} imageDone={imageDone}>
            <TextOfSmallBox>Image</TextOfSmallBox>
            {!imageDone && <IconHand name={'hand-pointer'} />}
            {imageDone && <IconCheck name={'check'} />}
          </SmallTitleBox3>
        </ImageRow>
      </Pressable>
      {/* IMAGE ENDS */}
      {/* BUTTON STARTS */}
      <Pressable onPress={saveNewPost}>
        <SmallDefaultBtn text={'Save Post'} marginSt={40} />
      </Pressable>
      {/* BUTTON ENDS */}
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
