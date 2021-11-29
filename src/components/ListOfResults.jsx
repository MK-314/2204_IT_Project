// CONTEXT
import React, { useEffect, useState, useContext } from 'react'
import RecipeContext from '../context/RecipeContext.jsx'
//
import PTRView from 'react-native-pull-to-refresh'
import { Pressable } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import FoodCard from './FoodCard'
import { FetchApi } from '../../datahandler'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { sortByHeartsNumber } from '../../heartSorting.js'
import NoPosts from './foodCategory/NoPosts'

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
      try {
        // if a user is searching:
        if (search) {
          let searchRes = itemsByUser.filter(it =>
            it.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          )
          setSingleMode(searchRes.length)
          setItemsByUser(sortByHeartsNumber(searchRes))
          // if a user clicked on Recipes:
        } else if (modeUserRecipes) {
          let user_id = await AsyncStorage.getItem('user_id')
          let itemsInUseEffect = await FetchApi.getPostByUserId(user_id)
          setSingleMode(itemsInUseEffect.length)
          setItemsByUser(sortByHeartsNumber(itemsInUseEffect))
          // if a user clicked on Favorites / Icon:
        } else {
          let allPosts = await FetchApi.getAllPosts()
          setSingleMode(allPosts.length)
          setItemsByUser(sortByHeartsNumber(allPosts))
        }
        setFirstUseEffectDone(true)
      } catch (error) {
        console.log(error)
      }
    }
  }, [search, startUseEffectChain])

  const handleRefresh = () => {
    return new Promise(async res => {
      setFirstUseEffectDone(true)
      setStartUseEffectChain(false)
      setTimeout(() => {
        setFirstUseEffectDone(false)
        setStartUseEffectChain(true)
        setSearch('')
        res()
      }, 500)
    })
  }

  return (
    <PTRView onRefresh={handleRefresh}>
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
                  likes={item.likes}
                />
              </Pressable>
            )
          }}
        />
      )}
      {singleMode == 0 && <NoPosts />}
    </PTRView>
  )
}

export default ListOfResults
