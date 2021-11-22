import React, { useState, useEffect } from 'react'
import {
  Text,
  StyleSheet,
  View,
  Keyboard,
  Image,
  Pressable
} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import NavIcons from './../components/NavIcons'
import { FooterSt } from './HomeScreen'
import SmallFoodCard from './../components/foodCategory/SmallFoodCard'
import Ingredients from './../components/foodCategory/Ingredients'
import IngredientsList from './../components/foodCategory/IngredientsList'
import { ContainerDefault } from '../components/small_elements/ContainerDefault'
import { RowOfElements } from '../components/small_elements/RowOfElements'
import { ConstantsRecipe } from '../../constants'

const ContainerSt = styled(ContainerDefault)`
  background-color: ${ConstantsRecipe.blue};
`
const RowSt = styled(RowOfElements)`
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 30px;
  height: 1260px;
  overflow: hidden;
`
const MainText = styled.Text`
  font-size: 17px;
  font-style: italic;
  line-height: 23px;
`
const IngredientContainer = styled.View`
  max-height: 220px;
  overflow: hidden;
  background-color: #ccc;
  border-radius: 20px;
`

const FoodCategory = ({ navigation }) => {
  const item = navigation.getParam('item')
  const [arrOfIngredients, setArrOfIngredients] = useState([])
  useEffect(() => {
    setArrOfIngredients(item.ingredients.split('\n'))
  }, [])
  return (
    <ContainerSt>
      <SmallFoodCard
        item={item}
        toHomeScreen={() => {
          navigation.navigate('Home')
        }}
      />
      <Ingredients />
      <RowSt>
        <IngredientContainer>
          <FlatList
            vertical
            data={arrOfIngredients}
            keyExtractor={item => Math.random()}
            renderItem={({ item }) => {
              return <MainText>{item}</MainText>
            }}
          />
        </IngredientContainer>
        {/* <MainText>{item.ingredients}</MainText> */}
      </RowSt>
      <FooterSt>
        <NavIcons />
      </FooterSt>
    </ContainerSt>
  )
}

export default FoodCategory
