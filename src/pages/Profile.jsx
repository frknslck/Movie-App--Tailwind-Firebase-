import React, { useContext } from 'react'
import { AuthContext } from "../context/AuthContextProvider";
import avatar from "../assets/icons/avatar.png"

const Profile = () => {
    const {currentUser} = useContext(AuthContext)
    const {displayName, photoURL, email} = currentUser
  return (
    <div>
    <div className="overflow-hidden flex-1 h-screen justify-center items-center bg-[#23242a]">
    <div className={`form-container mt-[10vh] w-[380px] h-[500px]`}>
      <div>
        <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
          Profile
        </h2>
        <div className="photo-wrapper p-2">
            <img
            className="w-40 h-40 rounded-full mx-auto"
            src={photoURL || avatar }
            />
        </div>
        <div className="relative z-0 w-full my-auto group">
          <input
            type="text"
            className="peer text-center"
            placeholder=" "
            required
            contentEditable="false"
            value={displayName}
          />
          <label htmlFor="floating_email">User Name:</label>
        </div>
        <div className="relative z-0 w-full my-auto group">
          <input
            type="text"
            className="peer text-center"
            placeholder=" "
            required
            contentEditable="false"
            value={email}
          />
          <label htmlFor="floating_email">E-mail:</label>
        </div>
      </div>
    </div>
  </div>
    </div>
    
  )
}

export default Profile