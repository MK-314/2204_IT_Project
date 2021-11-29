import React, { useState, useEffect, useContext } from 'react'
import RecipeContext from '../context/RecipeContext.jsx'
//
import { FlatList } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import NavIcons from './../components/NavIcons'
import SmallFoodCard from './../components/foodCategory/SmallFoodCard'
import { ContainerDefault } from '../components/small_elements/ContainerDefault'
import { RowOfElements } from '../components/small_elements/RowOfElements'
import { ConstantsRecipe, HightUnit, WidthUnit } from '../../constants'
import { FooterDefault } from '../components/small_elements/FooterDefault'
import { default as SwitchIcon } from 'react-native-vector-icons/AntDesign'
import { Dimensions, ScrollView } from 'react-native'
import WhiteInBlackText from './../components/foodCategory/WhiteInBlackText'
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
  border-left-width: ${width * WidthUnit * 3}px;
  border-right-width: ${width * WidthUnit * 3}px;
`
const MainText = styled.Text`
  font-size: ${height * HightUnit * 17}px;
  font-style: italic;
  line-height: ${height * HightUnit * 23}px;
  background-color: ${ConstantsRecipe.blue};
  padding-left: ${width * WidthUnit * 25}px;
`
const IconSwitch = styled(SwitchIcon)`
  position: absolute;
  top: ${height * HightUnit * 400}px;
  right: ${width * WidthUnit * 5}px;
  font-size: ${height * HightUnit * 150}px;
  color: #24995313;
  font-style: italic;
  text-shadow: 1px 1px 1px #000000;
  z-index: 1;
`

const FoodCategory = ({ navigation }) => {
  var item = navigation.getParam('item')
  const [arrOfIngredients, setArrOfIngredients] = useState([])
  const [arrOfDirections, setArrOfDirections] = useState([])
  const [trigger, setTrigger] = useState(0)
  const [ingredientsMode, setIngredientsMode] = useState(true)
  const [directionMode, setDirectionMode] = useState(false)

  useEffect(async () => {
    const unsubscribe = navigation.addListener('didFocus', async () => {
      item = navigation.getParam('item')
      setArrOfIngredients(item.ingredients.split('\n'))
      setArrOfDirections(item.directions.split('\n'))
      setTrigger(trigger + 1)
    })
    return unsubscribe
  }, [navigation])

  return (
    <ContainerSt>
      <SmallFoodCard
        trigger={trigger}
        item={item}
        toHomeScreen={() => {
          navigation.navigate('Home')
        }}
        toUserRecipes={() => {
          navigation.navigate('ProfileScreen')
        }}
        editThisItem={propsItem => {
          navigation.navigate('EditRecipe', {
            propsItem: propsItem
          })
        }}
      />
      <IconSwitch name='right'onPress={()=>setIngredientsMode(!ingredientsMode)}/>
      {ingredientsMode ? (
        <>
          <WhiteInBlackText text='Ingredients:' />
          <RowSt>
            <Box>
              <FlatList
                vertical
                data={arrOfIngredients}
                keyExtractor={item => Math.random()}
                renderItem={({ item }) => {
                  return <MainText>{item}</MainText>
                }}
                contentContainerStyle={{ paddingBottom: 200, paddingTop: 10 }}
              />
            </Box>
          </RowSt>
        </>
      ) : (
        <>
          <WhiteInBlackText text='Directions:' />
          <RowSt>
            <Box>
              <FlatList
                vertical
                data={arrOfDirections}
                keyExtractor={item => Math.random()}
                renderItem={({ item }) => {
                  return <MainText>{item}</MainText>
                }}
                contentContainerStyle={{ paddingBottom: 200, paddingTop: 10 }}
              />
            </Box>
          </RowSt>
        </>
      )}

      <FooterDefault>
        <NavIcons
          iconName='recipes'
          toScreen={screen => {
            navigation.navigate(screen)
          }}
        />
      </FooterDefault>
    </ContainerSt>
  )
}
export default FoodCategory
