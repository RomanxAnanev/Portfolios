import React, { createContext, useState } from 'react'

export const CustomContext = createContext()


export const CustomContextProvider  = ({children}) => {

    const [user, setUser] = useState(null)


  return (
  <CustomContext.Provider value={{user, setUser:(v) => setUser(v)}}>
        {children}
  </CustomContext.Provider>
  )
}
