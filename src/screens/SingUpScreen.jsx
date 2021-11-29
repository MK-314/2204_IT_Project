// REACT:
import React, { useState, useEffect } from 'react'
import { Text, Image, Button, StyleSheet, Keyboard } from 'react-native'
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
import {
  TextInputSt,
  TextInputStShadow
} from '../components/small_elements/TextInputDefault'
import { H1Text } from '../components/small_elements/H1Text'
import { SmalAnnotation } from '../components/small_elements/SmalAnnotation'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
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
const DontHaveTextRow = styled(RowOfElements)`
  position: absolute;
  bottom: ${height * HightUnit * 25}px;
  width: ${props => (props.hidden ? 0 : 100)}%;
`
const SingUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [miniTextHidden, setMiniTextHidden] = useState(false)

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
          })
          .catch(e => {
            alert('User was not created')
          })
        navigation.navigate('Home')
      })
      .catch(e => {
        alert("Check email correctness\nPassword must be min 6 caracters")
      })
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
        <RowOfElements>
          <H1Text>Sign Up</H1Text>
        </RowOfElements>
        <RowEmailInput>
          <TextInputStShadow style={styles.customShadow}>
            <TextInputSt
              onFocus={() => {
                setMiniTextHidden(true)
              }}
              value={name}
              onChangeText={newValue => setName(newValue)}
              placeholder={'Enter your name ...'}
            />
          </TextInputStShadow>
        </RowEmailInput>
        <RowPassword>
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
        </RowPassword>
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

        <RowOfElements>
          <Pressable onPress={handleSingUp}>
            <SmallDefaultBtn text={'Sign Up'} marginSt={40} width={80} />
          </Pressable>
        </RowOfElements>

        <DontHaveTextRow hidden={miniTextHidden}>
          <Pressable
            onPress={() => {
              navigation.navigate('LogInScreen')
            }}
          >
            <DontHaveText>Have an Account? Sing In</DontHaveText>
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
export default SingUpScreen
