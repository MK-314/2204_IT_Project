import React, { useEffect, useState } from 'react'
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
import AsyncStorage from '@react-native-async-storage/async-storage'
import { FooterDefault } from '../components/small_elements/FooterDefault'

const HomeScreen = ({ navigation }) => {
  const [footerHidden, setfooterHidden] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    AsyncStorage.getItem('user_id')
      .then(id => {
        if (!id) {
          navigation.navigate('LogInScreen')
        }
      })
      .catch(e => {
        navigation.navigate('LogInScreen')
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
          request={searchRequest => {
            setSearch(searchRequest)
          }}
          hidden={() => {
            setfooterHidden(true)
          }}
        />
        <ListOfResults
          search={search}
          toFoodCategoryById={item => {
            console.log(item + ' this iddddd')
            navigation.navigate('FoodCategory', {
              item: item
            })
          }}
        />
        <FooterDefault hidden={footerHidden}>
          <NavIcons
            iconName='recipes'
            toProfileScreen={() => {
              navigation.navigate('ProfileScreen')
            }}
          />
        </FooterDefault>
      </ContainerDefault>
    </TouchableWithoutFeedback>
  )
}

export default HomeScreen
