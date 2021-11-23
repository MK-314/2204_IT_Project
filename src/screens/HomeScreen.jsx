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

const HomeScreen = ({ navigation }) => {
  const [footerHidden, setfooterHidden] = useState(false)
  const [search, setSearch] = useState('')
  const { trigger, changeTrigger } = useContext(RecipeContext)

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
        <Pressable
          onPress={() => {
            console.log(trigger)
            changeTrigger(trigger + 1)
          }}
        >
          <Text style={{ fontSize: 25, color: '#000' }}>{trigger}</Text>
        </Pressable>

        <SearchField
          request={searchRequest => {
            setSearch(searchRequest)
          }}
          hidden={() => {
            setfooterHidden(true)
          }}
        />
        <ListOfResults
          trigger={trigger}
          search={search}
          toFoodCategoryById={item => {
            navigation.navigate('FoodCategory', {
              item: item
            })
          }}
        />
        <FooterDefault hidden={footerHidden}>
          <NavIcons
            iconName='recipes'
            toScreen={screen => {
              navigation.navigate(screen)
            }}
          />
        </FooterDefault>
      </ContainerDefault>
    </TouchableWithoutFeedback>
  )
}

export default HomeScreen
