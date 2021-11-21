// REACT:
import React, { useState } from 'react'
import { Text, Image, Button } from 'react-native'
// STYLED:
import styled from 'styled-components/native'
// SESSION STORAGE:
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ContainerDefault } from '../components/small_elements/ContainerDefault'
import { RowOfElements } from '../components/small_elements/RowOfElements'

const ContainerSt = styled(ContainerDefault)`
  background-color: #f1f1f4;
`
const RowSt = styled(RowOfElements)`
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

const LogInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
          onPress={()=>{}}
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
