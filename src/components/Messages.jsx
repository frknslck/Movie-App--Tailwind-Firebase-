import React from 'react';
import {auth} from '../auth/firebase'

const Message = ({ message }) => {

  const messageClass = (uid) => {
    if (uid === auth.currentUser.uid) {
      return "bg-red-700 text-white flex-row-reverse text-end rounded-bl-full";
    } else {
      return "bg-[#e5e5ea] text-black rounded-br-full";
    }
  };

  return (
    <div>
      <div className={`flex w-fit items-center shadow-xl my-7 py-2 px-3 rounded-tl-full rounded-tr-full ${messageClass(message.uid)}`}> 
        <div className='flex gap-2 absolute mt-[-4rem] '>
            <p className=" dark:text-white text-xs">{message.name}</p>
            <img className='w-5 h-5 rounded-full' src={message.photoURL} alt="" />
        </div>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;