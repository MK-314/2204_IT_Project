// CONTEXT
import React, { useEffect, useState, useContext } from 'react'
import RecipeContext from '../context/RecipeContext.jsx'
//
import { Text, StyleSheet, View, Keyboard, Pressable } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import SearchField from './../components/SearchField'
import ListOfResults from './../components/ListOfResults'
import NavIcons from './../components/NavIcons'
import { ContainerDefault } from '../components/small_elements/ContainerDefault'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { FooterDefault } from '../components/small_elements/FooterDefault'
import ListOfResultsFav from '../components/ListOfResultsFav.jsx'
import { RowOfElements } from '../components/small_elements/RowOfElements.jsx'
import { H1Text } from '../components/small_elements/H1Text.jsx'
import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { ConstantsRecipe, HightUnit, WidthUnit } from '../../constants.js'
const { width, height } = Dimensions.get('window')

const H1MainText = styled(H1Text)`
  margin-top: ${height * HightUnit * 20}px;
  margin-bottom: ${height * HightUnit * 30}px;
  font-size: ${height * HightUnit * 40}px;
  color: #774747;
  font-weight: bold;
`
const Favorites = ({ navigation }) => {
  // USECONTEXT
  const { startUseEffectChainFav, setStartUseEffectChainFav } = useContext(
    RecipeContext
  )
  const { firstUseEffectDoneFav, setFirstUseEffectDoneFav } = useContext(
    RecipeContext
  )
  // LOCAL STATES:
  const [footerHidden, setfooterHidden] = useState(false)

  useEffect(async () => {
    const unsubscribe = navigation.addListener('didFocus', () => {
      console.log('focussed fav page')
      setFirstUseEffectDoneFav(false)
      setStartUseEffectChainFav(true)
    })
    return unsubscribe
  }, [navigation])

  useEffect(() => {
    const unsubscribe = navigation.addListener('willBlur', () => {
      console.log('unfocussed fav page')
      setFirstUseEffectDoneFav(true)
      setStartUseEffectChainFav(false)
    })
    return unsubscribe
  }, [navigation])

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
        <RowOfElements>
          <H1MainText>Your Favorites:</H1MainText>
        </RowOfElements>
        <ListOfResultsFav
          toFoodCategoryById={item => {
            navigation.navigate('FoodCategory', {
              item: item
            })
          }}
        />
        <FooterDefault hidden={footerHidden}>
          <NavIcons
            iconName='favorites'
            toScreen={screen => {
              navigation.navigate(screen)
            }}
          />
        </FooterDefault>
      </ContainerDefault>
    </TouchableWithoutFeedback>
  )
}

export default Favorites
