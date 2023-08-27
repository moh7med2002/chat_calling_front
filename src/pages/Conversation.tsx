import React from 'react'
import Layout from '../components/layout/Layout'
import ChatList from '../components/conversation/ChatList'
import ConversationBox from '../components/conversation/ConversationBox'

function Conversation() {
  return (
    <div className='grid grid-cols-12'>
      <div className=' col-span-3'>
        <ChatList/>
      </div>
      <div className=' col-span-9'>
        <ConversationBox/>
      </div>
    </div>
  )
}

export default Conversation