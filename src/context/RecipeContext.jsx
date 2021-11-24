import React, { useState } from 'react'

const RecipeContext = React.createContext()

export const RecipeProvider = ({ children }) => {
  const [updateScreen, setUpdateScreen] = useState(false)
  //SearchField, ListOfResults:
  const [search, setSearch] = useState('')
  // ProfileScreen
  const [modeUserRecipes, setModeUserRecipes] = useState(false)

  return (
    <RecipeContext.Provider
      value={{
        updateScreen,
        setUpdateScreen,
        search,
        setSearch,
        modeUserRecipes,
        setModeUserRecipes
      }}
    >
      {children}
    </RecipeContext.Provider>
  )
}
export default RecipeContext
