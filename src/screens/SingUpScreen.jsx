// REACT:
import React, { useState, useEffect } from 'react'
import { Text, Image, Button, Pressable } from 'react-native'
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
//
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
  margin-top: ${height * 0.0012875 * 15}px;
  background-color: ${ConstantsRecipe.white};
  width: ${props => (props.focusedSt ? '90%' : '80%')};
  height: ${height * 0.0012875 * 50}px;
  border-radius: 100px;
`
const CustomText = styled.Text`
  font-size: ${height * 0.0012875 * 50}px;
`
const SingUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

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

  const handleSingUp = async () => {
    FireBaseAuthSystem.appSignUp(email, password)
      .then(async resEmail => {
        FetchApi.createUser({
          name: name,
          email: resEmail,
          avatar: ''
        })
          .then(async user => {
            await AsyncStorage.setItem('user_id', `${user.id}`)
            alert('Welcome!')
          })
          .catch(e => {
            alert('User was not created')
          })
        navigation.navigate('Home')
      })
      .catch(e => {
        'Firebase sing up error: ' + e
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
        <Button
          onPress={handleSingUp}
          title='Register'
          color='#841584'
          accessibilityLabel='Learn more about this purple button'
        />
      </RowSt>
      <Pressable
        onPress={() => {
          navigation.navigate('LogInScreen')
        }}
      >
        <RowSt>
          <Text>Have an Account? Sing In</Text>
        </RowSt>
      </Pressable>
    </ContainerSt>
  )
}
export default SingUpScreen
