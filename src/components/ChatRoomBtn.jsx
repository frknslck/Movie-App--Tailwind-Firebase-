import React from 'react'

const ChatRoomBtn = () => {
  return (
    <button
        type="button"
        title="Toggle dark/light mode"
        className="flex items-center p-2 mr-2 text-xs font-medium text-gray-700 bg-white rounded-lg border border-gray-200 toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
          <svg xmlns="http://www.w3.org/2000/svg" version="1.0" className='w-4 h-4' viewBox="0 0 256 256" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
            <path d="M640 2240 l0 -110 745 0 745 0 0 -530 0 -530 110 0 110 0 0 536 c0 361 -4 550 -11 579 -7 27 -28 63 -51 90 -68 78 -37 75 -895 75 l-753 0 0 -110z"/>
            <path d="M345 1901 c-49 -22 -93 -65 -114 -111 -14 -31 -16 -127 -19 -860 l-2 -825 212 212 213 212 566 3 566 3 48 30 c36 22 57 45 77 84 l28 53 0 515 c0 379 -3 527 -12 557 -16 53 -81 118 -134 134 -31 9 -210 12 -715 12 -632 0 -676 -2 -714 -19z m1363 -673 l2 -478 -577 0 -577 0 -63 -62 -63 -62 0 542 0 542 638 -2 637 -3 3 -477z"/>
            </g>
            </svg>       
      </button>
  )
}

export default ChatRoomBtn