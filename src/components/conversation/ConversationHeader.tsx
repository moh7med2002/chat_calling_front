import React from 'react'
import {MdCall , MdVideocam} from 'react-icons/md'
import { motion } from 'framer-motion';


function ConversationHeader() {
    const image ="https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=600";
    const name = "mia";
  return (
    <div className='h-[80px] bg-white py-4 px-5 flex items-center justify-between shadow'>
        <div className='flex items-center gap-5'>
            <img src={image} className='w-[50px] h-[50px] rounded-full object-cover'/>
            <h6 className='capitalize font-[400] text-[18px]'>{name}</h6>
        </div>
        <div className='flex gap-5'>
            <motion.button className='text-[24px]' whileTap={{scale:1.2}} whileHover={{scale:0.9}}>
                <MdCall/>
            </motion.button>
            <motion.button className='text-[24px]' whileTap={{scale:1.2}} whileHover={{scale:0.9}}>
                <MdVideocam/>
            </motion.button>
        </div>
    </div>
  )
}

export default ConversationHeader