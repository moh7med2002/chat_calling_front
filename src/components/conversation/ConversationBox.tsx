import React from 'react'
import ConversationHeader from './ConversationHeader'
import ConversationBody from './ConversationBody'
import SendMeesage from './SendMeesage'

function ConversationBox() {
  return (
    <div>
      <ConversationHeader/>
      <ConversationBody/>
      <SendMeesage/>
    </div>
  )
}

export default ConversationBox