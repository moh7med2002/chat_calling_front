import React from 'react'

type Props = {
    you:boolean
}

function Message({you}:Props) {
  return (
    <div className={`max-w-[400px] ${you?" bg-Primary text-white ms-auto":" bg-slate-200 text-black"} mb-2 py-2 px-3 rounded-md`}>
        <p className=' text-justify text-base'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis sapiente in, hic fuga accusamus nam porro voluptates aliquam sequi dolore ipsa, itaque, corporis libero provident laudantium. Fuga ea excepturi accusantium nemo laborum.
        </p>
        <span className='block text-end mt-2 text-[12px] font-[500]'>10:40am</span>
    </div>
  )
}

export default Message