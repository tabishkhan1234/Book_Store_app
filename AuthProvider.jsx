import React, { createContext, useContext, useState } from 'react'



const AuthContext=createContext()
export default function AuthProvider({children}) {

   const initialAuthUser=localStorage.getItem("Users")
   const [authUser,SetAuthUser]=useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
   
    )
   return(
     <AuthContext.Provider value={[authUser,SetAuthUser]}>
        {children}
     </AuthContext.Provider>
   )
  
}
export const useAuth=()=>useContext(AuthContext)
