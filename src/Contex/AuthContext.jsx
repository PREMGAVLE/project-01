import React, { createContext, useState } from 'react'


export const AuthContextProvider = createContext()



const AuthContext = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false)
    const [ Token,setToken]=useState(null)
console.log(isAuth)
    const Login = (token) => {
        setIsAuth(true)
        setToken(token)
    }
   
    console.log( Token)
    return (
        <div>
            <AuthContextProvider.Provider value={{isAuth,Login,Token}} >
                {children}
            </AuthContextProvider.Provider>
        </div>
    )
}

export default AuthContext
