import React, { createContext, useContext } from 'react'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut } from "firebase/auth"
import toast from "react-hot-toast";
import { auth } from '../auth/firebase';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext()
// export const { Provider } = createContext()

// export const userAuthContext = () => {
//     return useContext(AuthContext)
// }

const AuthContextProvider = ({ children }) => {
    const navigate = useNavigate()
    const register = async (email, password) => {
        try {
          const {user} = await createUserWithEmailAndPassword(auth, email, password)
          toast.success("Succesfully registered!")
          navigate("/")
          return user
        } catch (error) {
          toast.error(error.message)
        }
      }
      
    const login = async (email, password) => {
        try {
          const {user} = await signInWithEmailAndPassword(auth, email, password)
          toast.success("Succesfully logged in!")
          navigate("/")
          return user
        } catch (error) {
          toast.error(error.message)
        }
      }
      
    const logout = async () => {
        try {
          await signOut(auth)
          toast.success("Succesfully logged out!")
          navigate("/login")
          return true
        } catch (error) {
          toast.error(error.message)
        }
      }
      
      const values = {register, login, logout, currentUser: {displayName: "Furkan"} }
  return (
    <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider