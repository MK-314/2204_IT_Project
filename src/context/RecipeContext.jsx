import React, { useState } from 'react'

const RecipeContext = React.createContext()

export const RecipeProvider = ({ children }) => {

  const [updateScreen, setUpdateScreen] = useState(0)
  //SearchField, ListOfResults:
  const [search, setSearch] = useState('')

  return (
    <RecipeContext.Provider
      value={{
        updateScreen,
        setUpdateScreen,
        search,
        setSearch
      }}
    >
      {children}
    </RecipeContext.Provider>
  )
}
export default RecipeContext
