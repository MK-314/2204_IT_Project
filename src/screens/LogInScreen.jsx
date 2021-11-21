// REACT:
import React, { useState } from 'react'
import { Text, Image, Button } from 'react-native'
// STYLED:
import styled from 'styled-components/native'
// SESSION STORAGE:
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ContainerDefault } from '../components/small_elements/ContainerDefault'
import { RowOfElements } from '../components/small_elements/RowOfElements'
import { ConstantsRecipe } from '../../constants'
import { FireBaseAuthSystem } from '../../firebase'
import { FetchApi } from '../../datahandler'

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

const LogInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSingIn = async () => {
    let resEmail = await FireBaseAuthSystem.appSignUp(email,password)
    navigation.navigate('CreateRecipe')
  }

  return (
    <ContainerSt>
      <RowSt>
        <CustomText>Sign In</CustomText>
      </RowSt>
      <RowSt>
        <TextInputSt placeholder='Email' />
      </RowSt>
      <RowSt>
        <TextInputSt placeholder='Password' />
      </RowSt>
      <RowSt>
        <Text>Forgot password?</Text>
      </RowSt>
      <RowSt>
        <Button
          onPress={handleSingIn}
          title='Log In'
          color='#841584'
          accessibilityLabel='Learn more about this purple button'
        />
      </RowSt>
      <RowSt>
        <Text>Don't have an Account? Sing up</Text>
      </RowSt>
    </ContainerSt>
  )
}
export default LogInScreen
