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
import SmallFoodCard from './../components/foodCategory/SmallFoodCard'
import Ingredients from './../components/foodCategory/Ingredients'
import IngredientsList from './../components/foodCategory/IngredientsList'
import { ContainerDefault } from '../components/small_elements/ContainerDefault'
import { RowOfElements } from '../components/small_elements/RowOfElements'
import { ConstantsRecipe } from '../../constants'
import { FooterDefault } from '../components/small_elements/FooterDefault'

const ContainerSt = styled(ContainerDefault)`
  background-color: ${ConstantsRecipe.blue};
`
const RowSt = styled(RowOfElements)`
  min-height: 200px;
`
const Box = styled.View`
  width: 350px;
  height: 250px;
  overflow: hidden;
  border-color: ${ConstantsRecipe.green};;
  border-left-width: 3px;
  border-right-width: 3px;
`
const MainText = styled.Text`
  font-size: 17px;
  font-style: italic;
  line-height: 23px;
  background-color: ${ConstantsRecipe.blue};
  padding-left: 10px;
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
        <Box >
          <FlatList
            vertical
            data={arrOfIngredients}
            keyExtractor={item => Math.random()}
            renderItem={({ item }) => {
              return <MainText>{item}</MainText>
            }}
          />
        </Box>
      </RowSt>
      <FooterDefault>
          <NavIcons
            iconName='recipes'
            toScreen={(screen) => {
              navigation.navigate(screen)
            }}
          />
        </FooterDefault>
    </ContainerSt>
  )
}


export default FoodCategory
