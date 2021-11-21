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
import { ContainerDefault } from '../components/small_elements/ContainerDefault'
import { RowOfElements } from '../components/small_elements/RowOfElements'
import { ConstantsRecipe } from '../../constants'

const ContainerSt = styled(ContainerDefault)`
  background-color: ${ConstantsRecipe.blue};
`
const RowSt = styled(RowOfElements)`
  background-color: ${ConstantsRecipe.lightBlue};
`
const TextInputSt = styled.TextInput`
  display: flex;
  margin-top: 15px;
  background-color: ${ConstantsRecipe.white};
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
  const [name, setName] = useState('')

  const handleSingUp = async () => {
    let data = await FetchApi.createUser({
      name: '1',
      email: '2',
      avatar: 'ok ok'
    })
  }

  return (
    <ContainerSt>
      <RowSt>
        <CustomText>Sign Up</CustomText>
      </RowSt>
      <RowSt>
        <TextInputSt
          value={name}
          onChangeText={newValue => setName(newValue)}
          placeholder={'Enter your name ...'}
        />
      </RowSt>
      <RowSt>
        <TextInputSt
          value={email}
          onChangeText={newValue => setEmail(newValue)}
          placeholder={'Enter your name ...'}
        />
      </RowSt>
      <RowSt>
        <TextInputSt
          value={password}
          onChangeText={newValue => setPassword(newValue)}
          placeholder={'Enter your password ...'}
        />
      </RowSt>
      <RowSt>
        <Button
          onPress={handleSingUp}
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
