import React, { useState } from 'react'

const RecipeContext = React.createContext()

export const RecipeProvider = ({ children }) => {
  const [trigger, setTrigger] = useState('5')
  const changeTrigger = thisValue => {
    setTrigger(thisValue)
  }

  return (
    <RecipeContext.Provider value={{ data: trigger, changeTrigger }}>
      {children}
    </RecipeContext.Provider>
  )
}
export default RecipeContext
