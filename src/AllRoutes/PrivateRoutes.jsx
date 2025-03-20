// import React, { useContext } from 'react'
// import { AuthContextProvider } from '../Them/AuthContext'
// import { Navigate } from 'react-router-dom'

// const PrivateRouts = ({children}) => {
//     const {isAuth}=useContext(AuthContextProvider)
//     if(!isAuth){
//         return <Navigate to="/login"/>
//     }
//   return  children;
// }

// export default PrivateRouts

import React, { useContext } from 'react'
import { AuthContextProvider } from '../Contex/AuthContext'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
    const {isAuth}=useContext(AuthContextProvider)
    if(!isAuth){
        return <Navigate to="/login"/>
    }
  return  children;
}

export default PrivateRoutes



