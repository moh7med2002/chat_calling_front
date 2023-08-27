import React from 'react'
import {MdOutlineLogout} from 'react-icons/md'
import { motion } from "framer-motion"

type Props = {
    color:string
}

function LogoutButton({color}:Props) {
  return (
    <motion.button
    style={{color}}
    className='text-[22px]' whileTap={{scale:1.2}} whileHover={{scale:0.9}}>
        <MdOutlineLogout/>
    </motion.button>
  )
}

export default LogoutButton