import React, { useState } from 'react'
import { Text, StyleSheet, View, Keyboard, Image } from 'react-native'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/AntDesign'
import { FlatList } from 'react-native-gesture-handler'
import { Shadow } from 'react-native-shadow-2'
import FoodCard from './FoodCard';
import { RowOfElements } from './small_elements/RowOfElements'

const RowSt = styled(RowOfElements)`
  min-height: 400px;
  overflow: hidden;
`

const ListOfResults = (props) => {
  const images = [
    {
      url:
        'https://detoxinista.com/wp-content/uploads/2020/10/ginger-tea-recipe.jpg',
        number: 17,
      textFood: 'Ginger tea'
    },
    {
      url: 'https://images.mktw.net/im-398488?width=1280&size=1',
      number: 21,
      textFood: 'Burger'
    }
  ]
  return (
    <RowSt>
      <FlatList
        horizontal
        data={images}
        keyExtractor={item => item.url}
        renderItem={({ item }) => {
          return (
            <FoodCard
              number={item.number} 
              textFood={item.textFood}
              url={item.url}
              toFoodCategory={()=>{props.toFoodCategory()}}
            />
          )
        }}
      />
    </RowSt>
  )
}

export default ListOfResults
