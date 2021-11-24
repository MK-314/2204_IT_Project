import React, { useState, useEffect, useContext } from 'react'
import RecipeContext from '../context/RecipeContext.jsx'
// 
import { FlatList } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import NavIcons from './../components/NavIcons'
import SmallFoodCard from './../components/foodCategory/SmallFoodCard'
import Ingredients from './../components/foodCategory/Ingredients'
import { ContainerDefault } from '../components/small_elements/ContainerDefault'
import { RowOfElements } from '../components/small_elements/RowOfElements'
import { ConstantsRecipe, HightUnit, WidthUnit } from '../../constants'
import { FooterDefault } from '../components/small_elements/FooterDefault'
import { Dimensions, ScrollView } from 'react-native'
const { width, height } = Dimensions.get('window')

const ContainerSt = styled(ContainerDefault)`
  background-color: ${ConstantsRecipe.blue};
`
const RowSt = styled(RowOfElements)`
  min-height: ${height * HightUnit * 200}px;
`
const Box = styled.View`
  width: ${width * WidthUnit * 350}px;
  height: ${height * HightUnit * 250}px;
  overflow: hidden;
  border-color: ${ConstantsRecipe.green};
  border-left-width: 3px;
  border-right-width: 3px;
`
const MainText = styled.Text`
  font-size: ${height * HightUnit * 17}px;
  font-style: italic;
  line-height: ${height * HightUnit * 23}px;
  background-color: ${ConstantsRecipe.blue};
  padding-left: ${width * WidthUnit * 10}px;
`
const FoodCategory = ({ navigation }) => {
  const { updateScreen, setUpdateScreen } = useContext(RecipeContext)
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
          setUpdateScreen(updateScreen+1)
          navigation.navigate('Home')
        }}
      />
      <Ingredients />
      <RowSt>
        <Box>
          <FlatList
            vertical
            data={arrOfIngredients}
            keyExtractor={item => Math.random()}
            renderItem={({ item }) => {
              return <MainText>{item}</MainText>
            }}
            contentContainerStyle={{ paddingBottom: 200 }}
          />
        </Box>
      </RowSt>
      <FooterDefault>
        <NavIcons
          iconName='recipes'
          toScreen={screen => {
            setUpdateScreen(updateScreen+1)
            navigation.navigate(screen)
          }}
        />
      </FooterDefault>
    </ContainerSt>
  )
}

export default FoodCategory
