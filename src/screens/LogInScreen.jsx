// REACT:
import React, { useState } from 'react'
import { Text, Image } from 'react-native'
import {
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native-gesture-handler'
// FIRE_BASE:
import { appSignUp, uploadImageToFireBase } from '../../firebase'
import { pickImage } from '../../imagePicker'
// STYLED:
import styled from 'styled-components/native'

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
    let emailRes = await appSignUp(email, password)
    alert(emailRes)
    // let res = await pickImage()
    // setImage(res.uri)
    // let snapshot = await uploadImageToFireBase(res.uri)
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
