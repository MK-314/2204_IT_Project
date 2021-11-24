// CONTEXT
import React, { useEffect, useState, useContext } from 'react'
import RecipeContext from '../context/RecipeContext.jsx'
//
import { Pressable } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import FoodCard from './FoodCard'
import { FetchApi } from '../../datahandler'
import AsyncStorage from '@react-native-async-storage/async-storage'

const ListOfResults = props => {
  const [itemsByUser, setItemsByUser] = useState([])
  const { updateScreen, setUpdateScreen } = useContext(RecipeContext)


  useEffect(async () => {
    if (props.search == '' || props.search == ' ' || !props.search) {
      let user_id = await AsyncStorage.getItem('user_id')
      let itemsInUseEffect = await FetchApi.getPostByUserId(`${user_id}`)
      setItemsByUser(itemsInUseEffect)
    } else {
      let searchRes = itemsByUser.filter(it =>
        it.name.toLocaleLowerCase().includes(props.search.toLocaleLowerCase())
      )
      setItemsByUser(searchRes)
    }
  }, [props.search, updateScreen])

  return (
    <>
      <FlatList
        horizontal
        data={itemsByUser}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() => {
                props.toFoodCategoryById(item)
              }}
            >
              <FoodCard
                number={item.id}
                textFood={item.name}
                url={item.imageUrl}
              />
            </Pressable>
          )
        }}
      />
    </>
  )
}

export default ListOfResults
