import React, { useState } from 'react'

const RecipeContext = React.createContext()

export const RecipeProvider = ({ children }) => {
  const [updateScreen, setUpdateScreen] = useState(false)
  const [search, setSearch] = useState('')
  const [modeUserRecipes, setModeUserRecipes] = useState(false)
  //
  const [startUseEffectChain, setStartUseEffectChain] = useState(false)
  const [firstUseEffectDone, setFirstUseEffectDone] = useState(true)
  //
  const [startUseEffectChainFav, setStartUseEffectChainFav] = useState(false)
  const [firstUseEffectDoneFav, setFirstUseEffectDoneFav] = useState(true)
  const [singleMode, setSingleMode] = useState(true)

  return (
    <RecipeContext.Provider
      value={{
        updateScreen,
        setUpdateScreen,
        search,
        setSearch,
        modeUserRecipes,
        setModeUserRecipes,
        startUseEffectChain,
        setStartUseEffectChain,
        firstUseEffectDone,
        setFirstUseEffectDone,
        startUseEffectChainFav,
        setStartUseEffectChainFav,
        firstUseEffectDoneFav,
        setFirstUseEffectDoneFav,
        singleMode,
        setSingleMode
      }}
    >
      {children}
    </RecipeContext.Provider>
  )
}
export default RecipeContext
