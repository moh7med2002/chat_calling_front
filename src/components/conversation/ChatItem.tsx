import React from 'react'
import { NavLink } from 'react-router-dom';

type Props = {
    id:number
}

function ChatItem({id}:Props) {
    const image ="https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=600";
    const name = "mia";
  return (
    <NavLink to={`/conversation/${id}`}
    style={({ isActive }) => {
        return {
          backgroundColor: isActive ? "#cbd5e1" : "#f1f5f9",
        };
      }}
      className={"flex items-center gap-3 p-2  rounded mb-2 me-1"}
    >
        <img src={image} alt="" className='w-[60px] h-[60px] rounded-full object-cover'/>
        <h5 className='capitalize font-[400] text-[18px]'>{name}</h5>
    </NavLink>
  )
}

export default ChatItem