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
  const { search, setSearch } = useContext(RecipeContext)

  useEffect(async () => {
    if (search) {
      let searchRes = itemsByUser.filter(it =>
        it.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
      setItemsByUser(searchRes)
    } else {
      let user_id = await AsyncStorage.getItem('user_id')
      let itemsInUseEffect = await FetchApi.getPostByUserId(`${user_id}`)
      setItemsByUser(itemsInUseEffect)
    }
  }, [search, updateScreen])

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
