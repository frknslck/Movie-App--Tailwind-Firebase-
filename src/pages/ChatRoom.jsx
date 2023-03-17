import React, {useState, useEffect, useRef} from 'react'
import { onSnapshot, query, collection, orderBy } from 'firebase/firestore'
import { db } from "../auth/firebase"
import Messages from '../components/Messages'
import SendMessage from '../components/SendMessage'
import { auth } from '../auth/firebase'

const ChatRoom = () => {
const [messages, setMessages] = useState([])
const scroll = useRef()

useEffect(() => {
  const q = query(collection(db, `chatroom`), orderBy(`timestamp`))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let messages = []
        querySnapshot.forEach((doc) => {
            messages.push({...doc.data(), id: doc.id})
        })
        setMessages(messages)
    })
    return () => unsubscribe()
}, [])

console.log(messages);
  return (
    <>
    <div className='max-w-[728px] mx-auto text-center'>
        <h1 className='dark:text-white text-4xl pb-3 border-b-2 border-red-main'>Welcome to chat room {auth.currentUser.displayName}</h1>
        <div className='flex-col p-[10px] relative'>
            {messages && messages.map((message) => {
                return <Messages key={message.id} message={message}/>
            })}
        </div>
        <SendMessage ref={scroll}/>
        <span ref={scroll}></span>
    </div>
    </>
  )
}

export default ChatRoom