import React, { useContext } from 'react'
import { AuthContext } from "../context/AuthContextProvider";

const Profile = () => {
    const {photoURL, displayName} = useContext(AuthContext)
  return (
    <div>
    <div className="flex items-center justify-center">
        <div className="max-w-xs">
            <div className="bg-white shadow-xl rounded-lg py-3">
                <div className="photo-wrapper p-2">
                    <img
                    className="w-32 h-32 rounded-full mx-auto"
                    src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                    alt="John Doe"
                    />
                </div>
                <div className="p-2">
                <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                Joh Doe
                </h3>
                <div className="text-center text-gray-400 text-xs font-semibold">
                </div>
                <table className="text-xs my-3">
                <tbody>
                    <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                    <td className="px-2 py-2"></td>
                    </tr>
                    <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                    <td className="px-2 py-2"></td>
                    </tr>
                    <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                    <td className="px-2 py-2"></td>
                    </tr>
                </tbody>
                </table>
                <div className="text-center my-3">
                </div>
                </div>
            </div>
        </div>
    </div>
    <div className="overflow-hidden flex-1 h-screen justify-center items-center bg-[#23242a]">
    <div className={`form-container mt-[10vh] w-[380px] h-[500px]`}>
      <form >
        <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
          Profile
        </h2>
        <div className="photo-wrapper p-2">
            <img
            className="w-40 h-40 rounded-full mx-auto"
            src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
            alt="John Doe"
            />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            name="floating_email"
            type="email"
            className="peer"
            placeholder=" "
            required
          />
          <label htmlFor="floating_email">Email</label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            name="floating_password"
            type="password"
            className="peer"
            placeholder=" "
            required
          />
          <label htmlFor="floating_password">Password</label>
        </div>
        
      </form>
    </div>
  </div>
    </div>
    
  )
}

export default Profile