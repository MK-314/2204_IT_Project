import React, { useState } from 'react'

const RecipeContext = React.createContext()

export const RecipeProvider = ({ children }) => {
  const [updateScreen, setUpdateScreen] = useState(0)

  return (
    <RecipeContext.Provider value={{ updateScreen, setUpdateScreen }}>
      {children}
    </RecipeContext.Provider>
  )
}
export default RecipeContext
