import React from 'react'
import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({children}) => {

  const [user, setUser] = useState({name: "Ayomide"});
  const [loading, setLoading] = useState(false) 


  return (
    <AuthContext.Provider value = {{ user, loading }}>
    
    {children}

    </AuthContext.Provider>
  )
}


export const useAuth = () => {
  return useContext(AuthContext)
}