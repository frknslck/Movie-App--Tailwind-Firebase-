import React, { createContext, useState, useEffect } from 'react'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, updateProfile } from "firebase/auth"
import toast from "react-hot-toast";
import { auth } from '../auth/firebase';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext()
// export const { Provider } = createContext()

// export const userAuthContext = () => {
//     return useContext(AuthContext)
// }

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
      userObserver();
    }, []);  

    const register = async (email, password, displayName, photoURL) => {
        try {
          const {user} = await createUserWithEmailAndPassword(auth, email, password)
          await updateProfile(auth.currentUser, {
            displayName: displayName,
            photoURL: photoURL
          });
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

      const userObserver = () => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const { email, displayName, photoURL } = user
            setCurrentUser({email, displayName, photoURL})
          } else {
            setCurrentUser(false)
          }
        });
      }

      const signUpProvider = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then(() => {
          toast.success("Succesfully logged in!")
          navigate("/")
        }).catch((error) => {
          toast.error(error)
        });
       }

      // const sendPasswordResetEmail(auth, email)
      //   .then(() => {
      //     toast.success("Password reset email sent!")
      //   })
      //   .catch((error) => {
      //     toast.error(error.message)
      // });

      const values = {register, login, logout, signUpProvider, currentUser}
      console.log(currentUser);
  return (
    <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider