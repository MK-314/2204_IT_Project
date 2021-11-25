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
  const { updateScreen, setUpdateScreen } = useContext(RecipeContext)
  const { search, setSearch } = useContext(RecipeContext)
  const { modeUserRecipes, setModeUserRecipes } = useContext(RecipeContext)
  const { modeUserFavs, setModeUserFavs } = useContext(RecipeContext)
  // LOCAL STATES:
  const [itemsByUser, setItemsByUser] = useState([])
  const [firstUseEffectDone, setFirstUseEffectDone] = useState(false)

  useEffect(async () => {
    console.log('firts');
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
      let itemsInUseEffect = await FetchApi.getPostByUserId(`${user_id}`)
      setItemsByUser(itemsInUseEffect)
      setFirstUseEffectDone(true)
      // if a user clicked on Favorites / Icon:
    } else if (modeUserFavs) {
      let user_id = await AsyncStorage.getItem('user_id')
      let favPosts = await FetchApi.getFavsByUserId(user_id)
      setItemsByUser(favPosts)
      setFirstUseEffectDone(true)
      // if a user clicked on HomePage / Icon:
    } else {
      let allPosts = await FetchApi.getAllPosts()
      setItemsByUser(allPosts)
      setFirstUseEffectDone(true)
    }
  }, [search, updateScreen])

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
                  firstUseEffectDone={firstUseEffectDone}
                  itemId={item.id}
                  textFood={item.name}
                  url={item.imageUrl}
                />
              </Pressable>
            )
          }}
        />
      )}
      {/* {setFirstUseEffectDone(false)} */}
    </>
  )
}

export default ListOfResults
