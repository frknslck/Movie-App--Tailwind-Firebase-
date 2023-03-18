import React from 'react';
import {auth} from '../auth/firebase'

const Message = ({ message }) => {
  const{name, photoURL, timestamp, uid, text} = message
  const messageClass = (uid) => {
    if (uid === auth.currentUser.uid) {
      return "bg-red-700 dark:text-white flex-row-reverse text-end ml-auto rounded-bl-full";
    } else {
      return "bg-[#e5e5ea] text-black mr-auto rounded-br-full";
    }
  };
  let hour = (new Date(timestamp.seconds*1000).getHours().toString().padStart(2, '0'))
  let min = (new Date(timestamp.seconds*1000).getMinutes().toString().padStart(2, '0'))
  return (
    <div>
      <div className={`flex w-fit items-center shadow-xl my-10 py-2 px-3 rounded-tl-full rounded-tr-full ${messageClass(uid)}`}> 
        <div className='flex gap-2 absolute mt-[-4.5rem] '>
            <p className=" dark:text-white text-xs">{name}</p>
            <img className='w-6 h-6 rounded-full' src={photoURL} alt="" />
        </div>
        <p>{text}<span className='pl-3 text-[0.75rem]'>{`${hour}:${min}`}</span></p>
      </div>
    </div>
  );
};

export default Message;