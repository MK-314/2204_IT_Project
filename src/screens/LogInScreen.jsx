// REACT:
import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, View, Keyboard, Button, Image } from 'react-native'
import {
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native-gesture-handler'
// FIRE_BASE:
import { appSignUp, getUrlByName, uploadImageToFireBase } from '../../firebase'
import { pickImage } from '../../imagePicker'
// STYLED:
import styled from 'styled-components/native'
import * as ImagePicker from 'expo-image-picker'

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

  const handleSignUp = async () => {
    // getUrlByName('1.png')
    // appSignUp(email, password)
    pickImage()
      .then(res => {
        setImage(res.uri)
        // alert(res.uri)
        uploadImageToFireBase(res.uri)
          .then(snapshot => {
            // alert(snapshot)
          })
          .catch(e => {
            alert(e)
          })
      })
      .catch(err => {
        alert(err)
      })
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
        <Btn onPress={handleSignUp} title='Submit' />
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
      </RowSt>
    </ContainerSt>
  )
}
export default LogInScreen
