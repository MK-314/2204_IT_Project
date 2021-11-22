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
  /*  */
  /* background-color: ${ConstantsRecipe.lightBlue}; */
`
const MainText = styled.Text`
  font-size: 17px;
  font-style: italic;
  line-height: 23px;
`
const View1 = styled.View`
  max-height: 250px;
`

const FoodCategory = ({ navigation }) => {
  const item = navigation.getParam('item')
  const [myArr, setmyArr] = useState([])
  useEffect(() => {
    const temp = []
    temp.push(item)
    setmyArr(temp)
    console.log(JSON.stringify(myArr))
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
        <FlatList
          vertical
          data={myArr}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <View1>
                <MainText>
                  {item.ingredients}
                  {item.ingredients}
                  {item.ingredients}
                </MainText>
              </View1>
            )
          }}
        />
        {/* <MainText>{item.ingredients}</MainText> */}
      </RowSt>
      <FooterSt>
        <NavIcons />
      </FooterSt>
    </ContainerSt>
  )
}

export default FoodCategory
