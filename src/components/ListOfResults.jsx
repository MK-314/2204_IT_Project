import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, Keyboard, Image } from 'react-native'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/AntDesign'
import { FlatList } from 'react-native-gesture-handler'
import FoodCard from './FoodCard'
import { RowOfElements } from './small_elements/RowOfElements'
import { FetchApi } from '../../datahandler'
import AsyncStorage from '@react-native-async-storage/async-storage'


const ListOfResults = props => {
  const [itemsByUser, setItemsByUser] = useState([])
  useEffect(async () => {
    let user_id = await AsyncStorage.getItem('user_id')
    if (props.search == '') {
      let itemsInUseEffect = await FetchApi.getPostByUserId(user_id)
      setItemsByUser(itemsInUseEffect)
    } else {
      let searchRes = itemsByUser.filter(it => it.name.toLocaleLowerCase().includes(props.search.toLocaleLowerCase()))
      setItemsByUser(searchRes)
    }
  }, [props.search])
  return (
    <>
      <FlatList
        horizontal
        data={itemsByUser}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <FoodCard
              number={item.id}
              textFood={item.name}
              url={item.imageUrl}
              toFoodCategory={() => {
                props.toFoodCategory()
              }}
            />
          )
        }}
      />
    </>
  )
}

export default ListOfResults
