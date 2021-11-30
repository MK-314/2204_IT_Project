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
import { ConstantsRecipe, HightUnit, WidthUnit } from '../../constants'
// ICONS
import { default as Icon } from 'react-native-vector-icons/Entypo'
import { default as HandIcon } from 'react-native-vector-icons/FontAwesome5'
import { default as PhotoIcon } from 'react-native-vector-icons/Foundation'
//
import { Text } from 'react-native'
import { FireBaseImageHandler } from '../../firebase'
import { pickImage } from '../../imagePicker'
import { FetchApi } from '../../datahandler'
import { Dimensions } from 'react-native'
import { FooterDefault } from '../components/small_elements/FooterDefault'
import NavIcons from './../components/NavIcons'
import { useEffect } from 'react'
import { AvatarImg } from '../components/small_elements/AvatarImg'
import { AvatarBox } from '../components/small_elements/AvatarBox'
const { width, height } = Dimensions.get('window')

const TitleBox = styled(RowOfElements)`
  width: 85%;
  border-radius: 20px;
  margin-top: ${height * HightUnit * 30}px;
  margin-bottom: ${height * HightUnit * 20}px;
  /*  */
  background-color: ${props =>
    props.nameDone ? ConstantsRecipe.lightGreen : ConstantsRecipe.gray2};
`

const CustomText = styled.Text`
  font-size: ${height * HightUnit * 25}px;
  padding: ${height * HightUnit * 40}px 0px;
  /*  */
  /* background-color: red; */
`
const ViewArrowAndText = styled(RowOfElements)`
  justify-content: space-evenly;
  /* background-color: aqua; */
`
const IconArr = styled(Icon)`
  font-size: ${height * HightUnit * 100}px;
  color: ${ConstantsRecipe.green};
  font-weight: bold;
  text-shadow: ${ConstantsRecipe.text_shadow};
`
const IconHand = styled(HandIcon)`
  font-size: ${height * HightUnit * 35}px;
  color: ${ConstantsRecipe.green};
  font-weight: bold;
  text-shadow: ${ConstantsRecipe.text_shadow};
`
const IconPhoto = styled(PhotoIcon)`
  font-size: ${height * HightUnit * 85}px;
  color: ${ConstantsRecipe.green};
  font-weight: bold;
  text-shadow: ${ConstantsRecipe.text_shadow};
  margin-right: ${width * WidthUnit * 17}px;
  margin-left: ${width * WidthUnit * 5}px;
`
const IconCheck = styled(Icon)`
  font-size: ${height * HightUnit * 35}px;
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
  font-size: ${height * HightUnit * 20}px;
  padding: ${height * HightUnit * 25}px ${width * WidthUnit * 10}px;
`
const ImageRow = styled(ViewArrowAndText)`
  margin-top: ${height * HightUnit * 12}px;
`

const AvatarBoxCustomized = styled(AvatarBox)`
  width: ${width * WidthUnit * 100}px;
  height: ${height * HightUnit * 100}px;
`
const AvatarImgCustomized = styled(AvatarImg)`
  width: ${width * WidthUnit * 100}px;
  height: ${height * HightUnit * 100}px;
`

const CreateRecipe = ({ navigation }) => {
  //
  const [modalVisible, setModalVisible] = useState(false)
  const [modalText, setModalText] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [recipeName, setRecipeName] = useState('Name of Your Recipe')
  const [ingredients, setIngredients] = useState('')
  const [directions, setDirections] = useState('')
  //
  const [nameDone, setNameDone] = useState(false)
  const [ingredientsDone, setIngredientsDone] = useState(false)
  const [directionsDone, setDirectionsDone] = useState(false)
  const [imageDone, setImageDone] = useState(false)
  //
  const [mode, setMode] = useState('')
  const [trigger, setTrigger] = useState(0)

  useEffect(async () => {
    const unsubscribe = navigation.addListener('didFocus', async () => {
      await AsyncStorage.setItem('recipeName', '')
      await AsyncStorage.setItem('Ingredients', '')
      await AsyncStorage.setItem('Directions', '')
      await AsyncStorage.setItem('PostPhoto', '')
    })
    return unsubscribe
  }, [navigation])

  const dataFromModal = async () => {
    setModalVisible(false)

    switch (mode) {
      case 'recipeName':
        let nameOfRecipe = await AsyncStorage.getItem('recipeName')
        if (nameOfRecipe.length > 3) {
          setRecipeName(nameOfRecipe)
          setNameDone(true)
        }
        break
      case 'Ingredients':
        let listOfIngredients = await AsyncStorage.getItem('Ingredients')
        if (listOfIngredients && listOfIngredients.length > 5) {
          setIngredients(listOfIngredients)
          setIngredientsDone(true)
        }
        break
      case 'Directions':
        let listOfDirections = await AsyncStorage.getItem('Directions')
        if (listOfDirections && listOfDirections.length > 5) {
          setDirections(listOfDirections)
          setDirectionsDone(true)
        }
        break
    }
  }
  const uploadImageToFireBase = async () => {
    try {
      let pickedImage = await pickImage()
      let snapshot = await FireBaseImageHandler.uploadImageToFireBase(
        pickedImage.uri
      )
      let url = await FireBaseImageHandler.getUrlOfImageFireBase(
        snapshot.metadata.fullPath
      )
      setImageUrl(url)
      AsyncStorage.setItem('PostPhoto', url)
      setImageDone(true)
    } catch (error) {
      alert('Please try to pich the image again')
    }
  }
  const saveNewPost = async () => {
    let user_id = await AsyncStorage.getItem('user_id')
    if (nameDone && imageDone && ingredientsDone && directionsDone) {
      let data = await FetchApi.createPost({
        name: recipeName,
        imageUrl: imageUrl,
        directions: directions,
        ingredients: ingredients,
        user_id: user_id
      })
      navigation.navigate('FoodCategory', {
        item: data
      })
    } else {
      alert('Not all fealds are completed')
    }
  }

  return (
    <ContainerDefault>
      <ModalCard
        trigger={trigger}
        btnText={'Save'}
        visibleModal={modalVisible}
        modalText={modalText}
        mode={mode}
        visibleModalUp={dataFromModal}
        hideModal={() => {
          setModalVisible(false)
        }}
      />
      {/* NAME STARTS */}
      <Pressable
        onPress={() => {
          setModalText('Recipe name:')
          setMode('recipeName')
          setTrigger(trigger + 1)
          setModalVisible(true)
        }}
      >
        <RowOfElements>
          <TitleBox style={styles.elementShadow} nameDone={nameDone}>
            <CustomText>{recipeName}</CustomText>
          </TitleBox>
        </RowOfElements>
      </Pressable>
      {/* NAME ENDS */}
      {/* INGREDIENTS START */}
      <Pressable
        onPress={() => {
          setModalText('Ingredients')
          setMode('Ingredients')
          setTrigger(trigger + 1)
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
          setTrigger(trigger + 1)
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
          {!imageDone && <IconPhoto name={'photo'} onPress={() => {}} />}
          {imageDone && (
            <AvatarBoxCustomized style={styles.elementShadow}>
              <AvatarImgCustomized source={{ uri: imageUrl }} />
            </AvatarBoxCustomized>
          )}
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
        <SmallDefaultBtn text={'Check it out ->'} marginSt={30} />
      </Pressable>
      {/* BUTTON ENDS */}
      <FooterDefault>
        <NavIcons
          iconName='profile'
          toScreen={screen => {
            navigation.navigate(screen)
          }}
        />
      </FooterDefault>
    </ContainerDefault>
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
