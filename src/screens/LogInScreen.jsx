// REACT:
import React, { useState, useEffect } from 'react'
import { Text, Image, Button, StyleSheet, Modal } from 'react-native'
// STYLED:
import styled from 'styled-components/native'
// SESSION STORAGE:
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ContainerDefault } from '../components/small_elements/ContainerDefault'
import { RowOfElements } from '../components/small_elements/RowOfElements'
import { ConstantsRecipe, HightUnit, WidthUnit } from '../../constants'
import { FireBaseAuthSystem } from '../../firebase'
import { FetchApi } from '../../datahandler'
import { Pressable } from 'react-native'
import { Dimensions } from 'react-native'
import SmallDefaultBtn from '../components/small_elements/SmallDefaultBtn'
import { H1Text } from '../components/small_elements/H1Text'
import { SmalAnnotation } from '../components/small_elements/SmalAnnotation'
import {
  TextInputSt,
  TextInputStShadow
} from '../components/small_elements/TextInputDefault'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Keyboard } from 'react-native'
import ModalForgotPassword from '../components/ModalForgotPassword'
const { width, height } = Dimensions.get('window')

const ContainerSt = styled(ContainerDefault)`
  background-color: ${ConstantsRecipe.blue};
`
const RowEmailInput = styled(RowOfElements)`
  margin-top: ${height * HightUnit * 10}px;
`
const RowPassword = styled(RowEmailInput)`
  margin-top: ${height * HightUnit * 5}px;
`
const DontHaveText = styled(SmalAnnotation)`
  margin-top: ${height * HightUnit * 70}px;
  margin-right: ${width * WidthUnit * 0}px;
`
const RowForgot = styled(RowOfElements)`
  justify-content: flex-end;
`
const DontHaveTextRow = styled(RowOfElements)`
  position: absolute;
  bottom: ${height * HightUnit * 25}px;
  width: ${props => (props.hidden ? 0 : 100)}%;
`
const LogInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [miniTextHidden, setMiniTextHidden] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

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
  const handleForgotPassword = async () => {
    try {
      let result = await FireBaseAuthSystem.resetPassword(email)
      alert('Please check your email')
    } catch (error) {
      alert("We didn't find \nthis email in a system\nTry again")
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
        setTimeout(() => {
          setMiniTextHidden(false)
        }, 200)
      }}
    >
      <ContainerSt>
        <ModalForgotPassword modalVisible={modalVisible} />
        <RowOfElements>
          <H1Text>Sign In</H1Text>
        </RowOfElements>
        <RowEmailInput>
          <TextInputStShadow style={styles.customShadow}>
            <TextInputSt
              onFocus={() => {
                setMiniTextHidden(true)
              }}
              value={email}
              onChangeText={newValue => setEmail(newValue)}
              placeholder={'Enter your email ...'}
            />
          </TextInputStShadow>
        </RowEmailInput>
        <RowPassword>
          <TextInputStShadow style={styles.customShadow}>
            <TextInputSt
              onFocus={() => {
                setMiniTextHidden(true)
              }}
              value={password}
              onChangeText={newValue => setPassword(newValue)}
              placeholder={'Enter your password ...'}
            />
          </TextInputStShadow>
        </RowPassword>
        <Pressable
          onPress={() => {
            setModalVisible(true)
          }}
        >
          <RowForgot>
            <SmalAnnotation>Forgot password?</SmalAnnotation>
          </RowForgot>
        </Pressable>
        <RowOfElements>
          <Pressable onPress={handleSingIn}>
            <SmallDefaultBtn text={'Log In'} marginSt={40} width={80} />
          </Pressable>
        </RowOfElements>

        <DontHaveTextRow hidden={miniTextHidden}>
          <Pressable
            onPress={() => {
              navigation.navigate('SingUpScreen')
            }}
          >
            <DontHaveText>Don't have an Account? Sing up</DontHaveText>
          </Pressable>
        </DontHaveTextRow>
      </ContainerSt>
    </TouchableWithoutFeedback>
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
