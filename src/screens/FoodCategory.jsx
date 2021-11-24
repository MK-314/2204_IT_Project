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
import { ConstantsRecipe } from '../../constants'
import { FooterDefault } from '../components/small_elements/FooterDefault'
import { Dimensions, ScrollView } from 'react-native'
const { width, height } = Dimensions.get('window')

const ContainerSt = styled(ContainerDefault)`
  background-color: ${ConstantsRecipe.blue};
`
const RowSt = styled(RowOfElements)`
  min-height: ${height * 0.0012875 * 200}px;
`
const Box = styled.View`
  width: ${width * 0.0025555 * 350}px;
  height: ${height * 0.0012875 * 250}px;
  overflow: hidden;
  border-color: ${ConstantsRecipe.green};
  border-left-width: 3px;
  border-right-width: 3px;
`
const MainText = styled.Text`
  font-size: ${height * 0.0012875 * 17}px;
  font-style: italic;
  line-height: ${height * 0.0012875 * 23}px;
  background-color: ${ConstantsRecipe.blue};
  padding-left: ${width * 0.0025555 * 10}px;
`
const FoodCategory = ({ navigation }) => {
  const { trigger, changeTrigger } = useContext(RecipeContext)
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
          changeTrigger(trigger+1)
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
            changeTrigger(trigger+1)
            navigation.navigate(screen)
          }}
        />
      </FooterDefault>
    </ContainerSt>
  )
}

export default FoodCategory
