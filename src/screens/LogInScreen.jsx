// REACT:
import React, { useState, useEffect } from 'react'
import { Text, Image, Button, StyleSheet } from 'react-native'
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
import SmallDefaultBtn from '../components/small_elements/SmallDefaultBtn'
const { width, height } = Dimensions.get('window')

const ContainerSt = styled(ContainerDefault)`
  background-color: ${ConstantsRecipe.blue};
`
const RowEmailInput = styled(RowOfElements)`
  margin-top: 10px;
`
const RowPassword = styled(RowEmailInput)`
  margin-top: 5px;
`
const TextInputSt = styled.TextInput`
  position: absolute;
  padding-left: 20px;
  background-color: ${ConstantsRecipe.white};
  width: 100%;
  height: ${height * HightUnit * 50}px;
  border-radius: 100px;
`
const TextInputStShadow = styled(RowOfElements)`
  margin-top: ${height * HightUnit * 15}px;
  padding-left: 20px;
  width: 80%;
  height: ${height * HightUnit * 50}px;
  border-radius: 100px;
`
const CustomText = styled.Text`
  margin-top: ${height * HightUnit * 120}px;
  margin-bottom: ${height * HightUnit * 20}px;
  font-size: ${height * HightUnit * 50}px;
  color: ${ConstantsRecipe.green};
  text-shadow: ${ConstantsRecipe.text_shadow};
`
const ForgotPasswordText = styled(CustomText)`
  margin-top: ${height * HightUnit * 7}px;
  margin-bottom: 10px;
  margin-right: 55px;
  font-size: 12px;
  color: #774747;
`
const DontHaveText = styled(ForgotPasswordText)`
  margin-top: ${height * HightUnit * 70}px;
  margin-right: 0px;
`
const RowForgot = styled(RowOfElements)`
  justify-content: flex-end;
`
const DontHaveTextRow = styled(RowOfElements)`
  position: absolute;
  bottom: 25px;
`

const LogInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(async () => {
    try {
      let id = await AsyncStorage.getItem('user_id')
      if (id) navigation.navigate('Home')
    } catch (error) {
      console.log(error)
    }
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
      <RowOfElements>
        <CustomText>Sign In</CustomText>
      </RowOfElements>
      <RowEmailInput>
        <TextInputStShadow style={styles.customShadow}>
          <TextInputSt
            value={email}
            onChangeText={newValue => setEmail(newValue)}
            placeholder={'Enter your email ...'}
          />
        </TextInputStShadow>
      </RowEmailInput>
      <RowPassword>
        <TextInputStShadow style={styles.customShadow}>
          <TextInputSt
            value={password}
            onChangeText={newValue => setPassword(newValue)}
            placeholder={'Enter your password ...'}
          />
        </TextInputStShadow>
      </RowPassword>
      <RowForgot>
        <ForgotPasswordText>Forgot password?</ForgotPasswordText>
      </RowForgot>
      <RowOfElements>
        <Pressable onPress={handleSingIn}>
          <SmallDefaultBtn text={'Log In'} marginSt={0} />
        </Pressable>
      </RowOfElements>

      <DontHaveTextRow>
        <Pressable
          onPress={() => {
            navigation.navigate('SingUpScreen')
          }}
        >
          <DontHaveText>Don't have an Account? Sing up</DontHaveText>
        </Pressable>
      </DontHaveTextRow>
    </ContainerSt>
  )
}
const styles = StyleSheet.create({
  customShadow: {
    shadowColor: '#0000007d',
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 7
  }
})
export default LogInScreen
