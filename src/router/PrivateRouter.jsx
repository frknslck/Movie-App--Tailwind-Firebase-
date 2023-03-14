import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { auth } from '../auth/firebase'

const PrivateRouter = () => {
  return  (
    auth?.currentUser ? (
        <Outlet/>
    ) :  (
       <Navigate to="/login"  />)
  )
}

export default PrivateRouter
