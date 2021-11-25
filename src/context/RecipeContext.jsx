import React, { useState } from 'react'

const RecipeContext = React.createContext()

export const RecipeProvider = ({ children }) => {
  const [updateScreen, setUpdateScreen] = useState(false)
  const [search, setSearch] = useState('')
  const [modeUserRecipes, setModeUserRecipes] = useState(false)
  const [modeUserFavs, setModeUserFavs] = useState(false)
  const [startUseEffectChain, setStartUseEffectChain] = useState(false)
  const [firstUseEffectDone, setFirstUseEffectDone] = useState(true)

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
        setModeUserFavs,
        startUseEffectChain,
        setStartUseEffectChain,
        firstUseEffectDone,
        setFirstUseEffectDone
      }}
    >
      {children}
    </RecipeContext.Provider>
  )
}
export default RecipeContext
