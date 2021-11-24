import React, { useState } from 'react'

const RecipeContext = React.createContext()

export const RecipeProvider = ({ children }) => {
  const [trigger, setTrigger] = useState(0)

  const changeTrigger = thisValue => {
    setTrigger(thisValue)
  }

  return (
    <RecipeContext.Provider value={{ trigger: trigger, changeTrigger }}>
      {children}
    </RecipeContext.Provider>
  )
}
export default RecipeContext
