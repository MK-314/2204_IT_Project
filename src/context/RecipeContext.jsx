import React from 'react'
const RecipeContext = React.createContext()
export const RecipeProvider = ({ children }) => {
  return <RecipeContext.Provider>{children}</RecipeContext.Provider>
}
