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
          console.log(user);
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
      const values = {register, login, logout, uid: auth?.currentUser?.uid, photoURL: "https://external-preview.redd.it/t9Yn_RtUr4uwS5b9JHRfGKUZqkVh2caE9dPF01UDPIM.jpg?auto=webp&v=enabled&s=f7f3c67e218e0b88347ffc5ec15675212926106a", displayName: "Furkan"}
      console.log(values.currentUser);
  return (
    <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider