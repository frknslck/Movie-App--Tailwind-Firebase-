import React, { useContext, useState } from 'react'
import { AuthContext } from "../context/AuthContextProvider";

const Profile = () => {
    const [edit, setEdit] = useState(true)
    const {currentUser, setCurrentUser, profileChange} = useContext(AuthContext)
    const {displayName, photoURL, email} = currentUser

    const saveProfile = (e) => {
      e.preventDefault()
      profileChange(displayName, photoURL)
      setEdit(true)
    }

  return (
    <div>
    <div className="overflow-hidden flex-1 h-screen justify-center items-center dark:bg-[#23242a]">
    <div className={`form-container mt-[10vh] w-[380px] h-[570px]`}>
      <form onSubmit={saveProfile}>
        <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
          Profile
        </h2>
        <div className="photo-wrapper p-2 ">
            <img
            className="w-40 h-40 rounded-full mx-auto border-2 border-[#b91c1c]"
            src={photoURL || "https://i.ibb.co/GTgY47j/avatar.png"}
            />
        </div>
        <div className="relative z-0 w-full my-6 group">
          <input
            type="text"
            className="peer text-center"
            required
            value={displayName || "User"}
            onChange={(e) => setCurrentUser({...currentUser, displayName: e.target.value})}
            disabled={edit}
          />
          <label>User Name</label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            className="peer text-center"
            required
            value={email}
            disabled="true"
          />
          <label>E-mail</label>
        </div>
        <div className="relative z-0 w-full mb-2 group">
          <input
            type="text"
            className="peer text-center"
            required
            value={photoURL}
            onChange={(e) => setCurrentUser({...currentUser, photoURL: e.target.value})}
            disabled={edit}
          />
          <label>Profile Picture URL</label>
        </div>
        <div className='flex'>
          <button className={edit ? "btn-danger" : "btn-secondary cursor-default"} type="button" disabled={edit ? false : true} onClick={() => setEdit(false)}>
            Edit Profile
          </button>
          <button className={!edit ? "btn-danger" : "btn-secondary cursor-default"} type="submit" disabled={!edit ? false : true}>
            Save Profile
          </button>
        </div>
      </form>
    </div>
  </div>
    </div>
    
  )
}

export default Profile