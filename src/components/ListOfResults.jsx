// CONTEXT
import React, { useEffect, useState, useContext } from 'react'
import RecipeContext from '../context/RecipeContext.jsx'
//
import { Pressable } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import FoodCard from './FoodCard'
import { FetchApi } from '../../datahandler'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { sortByHeartsNumber } from '../../heartSorting.js'

const ListOfResults = props => {
  // USECONTEXT:
  const { startUseEffectChain, setStartUseEffectChain } = useContext(
    RecipeContext
  )
  const { search, setSearch } = useContext(RecipeContext)
  const { modeUserRecipes, setModeUserRecipes } = useContext(RecipeContext)
  const { singleMode, setSingleMode } = useContext(RecipeContext)
  const { firstUseEffectDone, setFirstUseEffectDone } = useContext(
    RecipeContext
  )
  // LOCAL STATES:
  const [itemsByUser, setItemsByUser] = useState([])
  //
  useEffect(async () => {
    if (startUseEffectChain) {
      // if a user is searching:
      if (search) {
        let searchRes = itemsByUser.filter(it =>
          it.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
        setSingleMode(searchRes.length)
        setItemsByUser(searchRes)
        setFirstUseEffectDone(true)
        // if a user clicked on Recipes:
      } else if (modeUserRecipes) {
        let user_id = await AsyncStorage.getItem('user_id')
        let itemsInUseEffect = await FetchApi.getPostByUserId(user_id)
        setSingleMode(itemsInUseEffect.length)
        setItemsByUser(itemsInUseEffect)
        setFirstUseEffectDone(true)
        // if a user clicked on Favorites / Icon:
      } else {
        let allPosts = await FetchApi.getAllPosts()
        setSingleMode(allPosts.length)
        setItemsByUser(await sortByHeartsNumber(allPosts))
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
