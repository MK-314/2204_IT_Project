import React, { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import NavIcons from './../components/NavIcons'
import { FooterSt } from './HomeScreen'
import SmallFoodCard from './../components/foodCategory/SmallFoodCard'
import Ingredients from './../components/foodCategory/Ingredients'
import IngredientsList from './../components/foodCategory/IngredientsList'
import { ContainerDefault } from '../components/small_elements/ContainerDefault'
import { RowOfElements } from '../components/small_elements/RowOfElements'

const ContainerSt = styled(ContainerDefault)`
  background-color: #f1f1f4;
`
const RowSt = styled(RowOfElements)`
  justify-content: flex-start;
  height: 260px;
  margin-top: 10px;
  overflow: hidden;
  /*  */
  /* background-color: #78a5c4; */
`

const FoodCategory = ({ navigation }) => {
  const ingreds = [
    { number: 1, name: '1 pound ground lean beef' },
    { number: 2, name: '1 large egg' },
    { number: 3, name: '½ cup minced onion' },
    { number: 4, name: '¼ cup fine dried bread crumbs' },
    { number: 5, name: '1 tablespoon Worcestershire' },
    { number: 6, name: '1 or 2 cloves garlic, peeled and minced' },
    { number: 7, name: 'About 1/2 teaspoon salt' },
    { number: 8, name: 'About 1/4 teaspoon pepper' },
    { number: 9, name: '4 hamburger buns (4 in. wide), split' },
    { number: 10, name: 'About 1/4 cup mayonnaise' },
    { number: 11, name: 'About 1/4 cup ketchup' }
  ]
  return (
    <ContainerSt>
      <SmallFoodCard toHomeScreen={()=>{navigation.navigate('Home')}}/>
      <Ingredients />
      <RowSt>
        <FlatList
          vertical
          data={ingreds}
          keyExtractor={item => item.number}
          renderItem={({ item }) => {
            return <IngredientsList number={item.number} name={item.name} />
          }}
        />
      </RowSt>
      <FooterSt>
        <NavIcons />
      </FooterSt>
    </ContainerSt>
  )
}

export default FoodCategory
