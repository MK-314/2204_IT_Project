// REACT:
import React, { useState, useEffect } from 'react'
import { Text, Image, Button } from 'react-native'
// STYLED:
import styled from 'styled-components/native'
// SESSION STORAGE:
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ContainerDefault } from '../components/small_elements/ContainerDefault'
import { RowOfElements } from '../components/small_elements/RowOfElements'
import { ConstantsRecipe, HightUnit } from '../../constants'
import { FireBaseAuthSystem } from '../../firebase'
import { FetchApi } from '../../datahandler'
import { Pressable } from 'react-native'
import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

const ContainerSt = styled(ContainerDefault)`
  background-color: ${ConstantsRecipe.blue};
`
const RowSt = styled(RowOfElements)`
  background-color: ${ConstantsRecipe.lightBlue};
`
const TextInputSt = styled.TextInput`
  display: flex;
  margin-top: ${height * HightUnit * 15}px;
  background-color: ${ConstantsRecipe.white};
  width: ${props => (props.focusedSt ? '90%' : '80%')};
  height: ${height * HightUnit * 50}px;
  border-radius: 100px;
`
const CustomText = styled.Text`
  font-size: ${height * HightUnit * 50}px;
`

const LogInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    AsyncStorage.getItem('user_id')
      .then(id => {
        if (id) {
          navigation.navigate('Home')
        }
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

  const handleSingIn = async () => {
    FireBaseAuthSystem.appSignIn(email, password)
      .then(async res => {
        let user = await FetchApi.getUserByEmail(res)
        let user_id = user[0].id
        await AsyncStorage.setItem('user_id', `${user_id}`)
        navigation.navigate('Home')
      })
      .catch(e => {
        'Wrong credentials. Try again or reset password. Error: ' + e
      })
  }

  return (
    <ContainerSt>
      <RowSt>
        <CustomText>Sign In</CustomText>
      </RowSt>
      <RowSt>
        <TextInputSt
          value={email}
          onChangeText={newValue => setEmail(newValue)}
          placeholder={'Enter your email ...'}
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

      <Pressable
        onPress={() => {
          navigation.navigate('SingUpScreen')
        }}
      >
        <RowSt>
          <Text>Don't have an Account? Sing up</Text>
        </RowSt>
      </Pressable>
    </ContainerSt>
  )
}
export default LogInScreen
