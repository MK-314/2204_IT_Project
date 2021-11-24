import React, { useState } from 'react'

const RecipeContext = React.createContext()

export const RecipeProvider = ({ children }) => {
  const [updateScreen, setUpdateScreen] = useState(false)
  const [search, setSearch] = useState('')
  const [modeUserRecipes, setModeUserRecipes] = useState(false)
  const [modeUserFavs, setModeUserFavs] = useState(false)

  return (
    <RecipeContext.Provider
      value={{
        updateScreen,
        setUpdateScreen,
        search,
        setSearch,
        modeUserRecipes,
        setModeUserRecipes,
        modeUserFavs,
        setModeUserFavs
      }}
    >
      {children}
    </RecipeContext.Provider>
  )
}
export default RecipeContext
