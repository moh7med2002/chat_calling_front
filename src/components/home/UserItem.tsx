import React from 'react'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {motion} from 'framer-motion'

function UserItem() {
    const image ="https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=600";
    const name = "mia";
    
  return (
    <div className=' bg-white shadow px-3 py-6 rounded-md border border-Primary flex flex-col items-center gap-3 
    cursor-pointer'>
        <img src={image} alt="" className='w-[80px] h-[80px] rounded-full object-cover'/>
        <div className='flex items-center gap-2'>
        <h4 className=' capitalize text-[20px]'>{name}</h4>
          <motion.button whileHover={{scale:0.9}} whileTap={{scale:1.2}}  className=' text-Primary text-[20px]'>
            <BsFillChatDotsFill/>
          </motion.button>
        </div>
    </div>
  )
}

export default UserItem