import React, {useContext} from 'react'
import { IoMdChatbubbles  } from 'react-icons/io'
import toast from "react-hot-toast"
import { AuthContext } from '../context/AuthContextProvider'

const ChatRoomBtn = () => {
  const {currentUser} = useContext(AuthContext)
  const handleNavigate = () => {
    if (!currentUser) {
      toast.error("Please log in for enter chat room!")
    }
  }
  return (
    <button
        type="button"
        title="Chat Room"
        onClick={handleNavigate}
        className="flex items-center p-2 mr-2 text-xs font-medium text-gray-700 bg-white rounded-lg border border-gray-200 toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
          <IoMdChatbubbles className='text-xl dark:text-white'/> 
      </button>
  )
}

export default ChatRoomBtn