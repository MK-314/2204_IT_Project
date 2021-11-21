import React, { useState } from 'react'
import { Text, StyleSheet, View, Keyboard } from 'react-native'
import {
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import SearchField from './../components/SearchField'
import ListOfResults from './../components/ListOfResults'
import NavIcons from './../components/NavIcons'
import { ContainerDefault } from '../components/small_elements/ContainerDefault'

const FooterSt = styled.View`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: ${props => (props.hidden ? '0%' : '100%')};
  position: absolute;
  left: 0;
  bottom: 30px;
  min-height: 100px;
  z-index: 1;
`

const HomeScreen = ({ navigation }) => {
  const [footerHidden, setfooterHidden] = useState(false)

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
        setTimeout(() => {
          setfooterHidden(false)
        }, 200)
      }}
    >
      <ContainerDefault>
        <SearchField
          hidden={() => {
            setfooterHidden(true)
          }}
        />
        <ListOfResults toFoodCategory={()=>{navigation.navigate('FoodCategory')}}/>
        <FooterSt hidden={footerHidden}>
          <NavIcons />
        </FooterSt>
      </ContainerDefault>
    </TouchableWithoutFeedback>
  )
}

export default HomeScreen
export  {FooterSt}