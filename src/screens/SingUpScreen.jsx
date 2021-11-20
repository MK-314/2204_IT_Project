// REACT:
import React, { useState } from 'react'
import { Text, Image, Button } from 'react-native'
import {
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native-gesture-handler'
// FIRE_BASE:
import { FireBaseAuthSystem, FireBaseImageHandler } from '../../firebase'
import { pickImage } from '../../imagePicker'
// STYLED:
import styled from 'styled-components/native'
// SESSION STORAGE:
import AsyncStorage from '@react-native-async-storage/async-storage'
import { FetchApi } from '../../datahandler'

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
const TextInputSt = styled.TextInput`
  display: flex;
  margin-top: 15px;
  background-color: #fff;
  width: ${props => (props.focusedSt ? '90%' : '80%')};
  height: 50px;
  border-radius: 100px;
`
const CustomText = styled.Text`
  font-size: 50px;
`

const SingUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <ContainerSt>
      <RowSt>
        <CustomText>Sign Up</CustomText>
      </RowSt>
      <RowSt>
        <TextInputSt placeholder='Name' />
      </RowSt>
      <RowSt>
        <TextInputSt placeholder='Email' />
      </RowSt>
      <RowSt>
        <TextInputSt placeholder='Password' />
      </RowSt>
      <RowSt>
        <Button
          onPress={()=>{}}
          title='Register'
          color='#841584'
          accessibilityLabel='Learn more about this purple button'
        />
      </RowSt>
      <RowSt>
        <Text>Have an Account? Sing In</Text>
      </RowSt>
    </ContainerSt>
  )
}
export default SingUpScreen
