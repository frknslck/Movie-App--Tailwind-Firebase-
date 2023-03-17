import React, {useState, useEffect, useRef} from 'react'
import { onSnapshot, query, collection, orderBy } from 'firebase/firestore'
import { db } from "../auth/firebase"
import Messages from '../components/Messages'
import SendMessage from '../components/SendMessage'
import { auth } from '../auth/firebase'

const ChatRoom = () => {
  const [messages, setMessages] = useState([])
  const scrollRef = useRef(null)

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

  useEffect(() => {
    // Scroll to the bottom of the chat room when new messages are received
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  return (
    <>
      <div className='max-w-[728px] mx-auto text-center'>
        <h1 className='dark:text-white text-4xl pb-3'>Welcome to chat room {auth.currentUser.displayName}</h1>
        <div ref={scrollRef} className='flex-col p-[10px] relative shadow-md shadow-red-main max-h-[665px] overflow-scroll overflow-x-hidden'>
          {messages && messages.map((message) => {
            return <Messages key={message.id} message={message}/>
          })}
        </div>
        <span className='h-14'></span>
        <SendMessage />
      </div>
    </>
  )
}

export default ChatRoom
