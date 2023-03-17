import React, { useState } from 'react';
import {auth, db} from '../auth/firebase'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import toast from "react-hot-toast"
const SendMessage = ({scroll}) => {
  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault()
    if (input === '') {
        toast.error('Please enter a valid message!')
        return
    }
    const {uid, displayName, photoURL} = auth.currentUser
    await addDoc(collection(db, 'chatroom'), {
        text: input,
        name: displayName,
        photoURL: photoURL,
        uid,
        timestamp: serverTimestamp()
    })
    setInput('')
    scroll.current.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <form onSubmit={sendMessage} className="h-14 w-full max-w-[728px] flex text-xl bottom-0">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full text-xl p-3 bg-gray-900 text-white outline-none border-none"
        type='text'
        placeholder='Message'
      />
      <button className="w-[20%] bg-red-main dark:text-white" type='submit'>
        Send
      </button>
    </form>
  );
};

export default SendMessage;