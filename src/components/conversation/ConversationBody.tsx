import React from 'react'
import Message from './Message'

function ConversationBody() {
  return (
    <div className='h-[calc(100vh-130px)] p-3 overflow-y-auto bg-slate-100'>
        {
            [1,2,3,4,5,6,7,8,9,10].map(item=>{
                return <Message key={item} you={item%2==0}/>
            })
        }
    </div>
  )
}

export default ConversationBody