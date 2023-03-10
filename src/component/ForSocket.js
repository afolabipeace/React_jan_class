import React, { useEffect, useRef, useState } from 'react'
import { socket } from './baseUrl'

const ForSocket = () => {
  const [chats, setchats] = useState([])
  // const _id = '989797897897'
  useEffect(() => {
    // socket.emit('joint-socket',{_id})
    socket.emit('user-active', 'One user is active')
    socket.on('message-sent', (chat) => {
      // const exist = chats.find(each=>each.id === chat.id);
      // if(!exist)
      setchats((chats) => [...chats, chat]);
    })
    socket.on('msg-sent-to-group',(chat)=>{
      setchats((chats) => [...chats, chat]);
    })
  }, [])

  const message = useRef();
  const forReact = useRef();
  const forVue = useRef();
  const forAngular = useRef();

  const sendMessage = () => {
    const chat = {
      id: Math.floor(Math.random() * 100000),
      text: message.current.value,
      time: new Date().toLocaleTimeString()
    }
    message.current.value = ''
    setchats([...chats, chat])
    socket.emit('send-message', chat)
  }

  const joinGroup = (group) => {
    socket.emit('join-group', group)
  }

  const msgToGroup = (group, message, e) =>{
    e.preventDefault()
    const chat = {
      id: Math.floor(Math.random() * 100000),
      text: message,
      time: new Date().toLocaleTimeString()
    }
    setchats([...chats,chat])
    socket.emit('send-msg-to-group', {group, message})
  }
  return (
    <>
      <div className='mx-auto mt-40 max-w-sm shadow p-5 rounded'>
        <div className='max-h-[100px] overflow-auto'>
          {
            chats.map(({ text, time }) => (
              <div className='fw-bold border-p-2 my-2 rounded'>{text}</div>
            ))
          }
        </div>
        <input placeholder='Message Here' ref={message} className='w-full rounded p-1 my-2 border outline-none' />
        <button onClick={sendMessage} className='w-full my-2 bg-gray-900 text-white p-1 rounded'>Send Message</button>
        <div className='grid grid-cols-3 gap-3'>
          <div>
            <form onSubmit={(e)=>msgToGroup('react', forReact.current.value, e)}>
              <input ref={forReact} className='w-full focus:border-gray-400 transition border outline-none rounded p-1 text-sm' />
            </form>
            <button onClick={() => joinGroup("react")} className='w-full my-2 bg-gray-900 text-white p-1 rounded'>+ReactJS</button>
          </div>
          <div>
            <form onSubmit={(e)=>msgToGroup('vue', forVue.current.value,e)}>
              <input ref={forVue} className='w-full focus:border-gray-400 transition border outline-none rounded p-1 text-sm' />
            </form>
            <button onClick={() => joinGroup("vue")} className='w-full my-2 bg-gray-900 text-white p-1 rounded'>+Vue </button>
          </div>
          <div>
            <form onSubmit={(e)=>msgToGroup('angular', forAngular.current.value,e)}>
              <input ref={forAngular} className='w-full focus:border-gray-400 transition border outline-none rounded p-1 text-sm' />
            </form>
            <button onClick={() => joinGroup("angular")} className='w-full my-2 bg-gray-900 text-white p-1 rounded'>+Angular</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default ForSocket