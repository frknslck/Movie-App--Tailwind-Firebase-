import React from 'react'

const Spinner = () => {
  return (
    <div className="flex justify-center mt-10 h-screen dark:bg-[#23242a]">
        <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white dark:bg-[#23242a] rounded-full border-none"></div>
        </div>
        <div className='text-3xl dark:text-white ml-5 mt-6'>Gathering requested content...</div>
    </div>
  )
}

export default Spinner