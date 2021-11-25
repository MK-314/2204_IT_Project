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
  // USECONTEXT:
  const { startUseEffectChain, setStartUseEffectChain } = useContext(
    RecipeContext
  )
  const { search, setSearch } = useContext(RecipeContext)
  const { modeUserRecipes, setModeUserRecipes } = useContext(RecipeContext)
  const { modeUserFavs, setModeUserFavs } = useContext(RecipeContext)
  const { firstUseEffectDone, setFirstUseEffectDone } = useContext(
    RecipeContext
  )
  // LOCAL STATES:
  const [itemsByUser, setItemsByUser] = useState([])
  useEffect(async () => {
    if (startUseEffectChain) {
      // if a user is searching:
      if (search) {
        let searchRes = itemsByUser.filter(it =>
          it.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
        setItemsByUser(searchRes)
        setFirstUseEffectDone(true)
        // if a user clicked on Recipes:
      } else if (modeUserRecipes) {
        let user_id = await AsyncStorage.getItem('user_id')
        let itemsInUseEffect = await FetchApi.getPostByUserId(user_id)
        setItemsByUser(itemsInUseEffect)
        setFirstUseEffectDone(true)
        // if a user clicked on Favorites / Icon:
      } else if (modeUserFavs) {
        let user_id = await AsyncStorage.getItem('user_id')
        // getting records from FAVS table:
        let favRecords = await FetchApi.getFavsByUserId(user_id)
        // for each favRecord above we are getting the posts from post table:
        let favPosts = await Promise.all(favRecords.map(async elem => {
          return await FetchApi.getPostByID(elem.post_id)
        }))
        setItemsByUser(favPosts)
        setFirstUseEffectDone(true)
        // if a user clicked on HomePage / Icon:
      } else {
        let allPosts = await FetchApi.getAllPosts()
        setItemsByUser(allPosts)
        setFirstUseEffectDone(true)
      }
    }
  }, [search, startUseEffectChain])

  return (
    <>
      {firstUseEffectDone && (
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
                  itemId={item.id}
                  textFood={item.name}
                  url={item.imageUrl}
                />
              </Pressable>
            )
          }}
        />
      )}
    </>
  )
}

export default ListOfResults
