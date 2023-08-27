import React from 'react'
import LogoutButton from '../LogoutButton'
import ChatItem from './ChatItem';
import {AiOutlineHome} from 'react-icons/ai'
import { Link } from 'react-router-dom';

function ChatList() {
    const data=[1,2,3,4,5,6,7,8,9,10];
  return (
    <div className='p-5 pe-0 pb-0'>
        <div className='flex items-center justify-between pe-2 h-[40px]'>
            <h4 className='text-[22px] font-[500]'>Chats</h4>
            <div className=' flex gap-2'>
                <Link to="/"
                className='text-[22px]'>
                    <AiOutlineHome/>
                </Link>
                <LogoutButton color='black'/>
            </div>
        </div>
        <div className='mt-6 h-[calc(100vh-84px)] overflow-y-auto'>
            {
                data.map(item=>{
                    return <ChatItem key={item} id={item}/>
                })
            }
        </div>
    </div>
  )
}

export default ChatList