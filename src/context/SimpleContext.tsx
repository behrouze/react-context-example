import { createContext, FC, ReactNode, useContext, useState } from 'react'
import { contextValue } from 'interfaces/context'

const SimpleContext = createContext<contextValue | undefined>(undefined)
const initData = { name: 'Behrouze', age: 50 }

export const SimpleContextProvider: FC<ReactNode> = ({ children }) => {
  const [appData, setAppData] = useState(initData)
  const editAge = (val: number) => {
    setAppData({ ...appData, age: val })
  }

  const contextValue: contextValue = {
    appData,
    editAge,
  }

  return (
    <SimpleContext.Provider value={contextValue}>
      {children}
    </SimpleContext.Provider>
  )
}

export const useSimpleContext = () => {
  const context = useContext(SimpleContext)

  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }

  return context
}
