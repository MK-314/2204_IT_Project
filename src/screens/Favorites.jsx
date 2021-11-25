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
    navigation.addListener('didFocus', () => {
      console.log('focussed favorites')
      setFirstUseEffectDoneFav(false)
      setStartUseEffectChainFav(true)
    })
    navigation.addListener('willBlur', () => {
      console.log('unfocussed favorites')
      setFirstUseEffectDoneFav(true)
      setStartUseEffectChainFav(false)
    })
  }, [])
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
