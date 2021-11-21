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
          onPress={() => {}}
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
