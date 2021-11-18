// REACT:
import React, { useState } from 'react'
import { Text, Image } from 'react-native'
import {
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native-gesture-handler'
// FIRE_BASE:
import {
  appSignUp,
  appSignIn,
  resetPassword,
  uploadImageToFireBase,
  getUrlByName,
  deleteImageFromFireBase
} from '../../firebase'
import { pickImage } from '../../imagePicker'
// STYLED:
import styled from 'styled-components/native'
// SESSION STORAGE:
import AsyncStorage from '@react-native-async-storage/async-storage';


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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /*  */
  background-color: #78a5c4;
`
const TextInputSt = styled.TextInput`
  display: flex;
  margin-top: 15px;
  background-color: #fff;
  width: ${props => (props.focusedSt ? '90%' : '80%')};
  height: 50px;
  border-radius: 100px;
`
const Btn = styled.Button`
  color: aliceblue;
  padding-top: 15px;
`

const LogInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [image, setImage] = useState(null)
  const [fileNameFromFb, setfileName] = useState('')

  const handleSignUpUI = async () => {
    // getUrlByName('1.png')
    // setImage(res.uri)
    let emailResult = await appSignUp(email, password)
    alert(emailResult)
  }
  const handleSignInUI = async () => {
    let emailResult = await appSignIn(email, password)
    alert(emailResult)
  }
  const resetPasswordUI = async () => {
    resetPassword(email)
      .then(res => {
        alert(res)
      })
      .catch(err => {
        alert(err)
      })
  }
  // Upload Image:
  const uploadImageUI = async () => {
    let pickedImage = await pickImage()
    let snapshot = await uploadImageToFireBase(pickedImage.uri)
    alert(snapshot.metadata.fullPath)
    setfileName(snapshot.metadata.fullPath)
  }
  const getImageUrlFirebaseUI = async () => {
    let fbImageUrl = await getUrlByName(fileNameFromFb)
    setImage(fbImageUrl)
  }
  const deleteImageUI = async () => {
    let deleteRes = await deleteImageFromFireBase(fileNameFromFb)
    alert(deleteRes)
  }

  return (
    <ContainerSt>
      <RowSt>
        <Text>Email</Text>
        <TextInputSt
          onChangeText={text => {
            setEmail(text)
          }}
          value={email}
        />
        <Text>Password</Text>
        <TextInputSt
          onChangeText={text => {
            setPassword(text)
          }}
          value={password}
        />
        <Btn onPress={handleSignUpUI} title='handleSignUpUI' />
        <Btn onPress={handleSignInUI} title='handleSignInUI' />
        <Btn onPress={resetPasswordUI} title='resetPasswordUI' />
        {/*  */}
        <Btn onPress={uploadImageUI} title='uploadImageUI' />
        <Btn onPress={getImageUrlFirebaseUI} title='getImageUrlFirebaseUI' />
        <Btn onPress={deleteImageUI} title='deleteImageUI' />
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
      </RowSt>
    </ContainerSt>
  )
}
export default LogInScreen
