import React from 'react'
import {IoMdSend} from 'react-icons/io'
import { useForm, SubmitHandler } from "react-hook-form"

type FormValues = {
  message: string
}

function SendMeesage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues:{
      message:""
    }
  })
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)
  return (
    <div className='bg-white h-[50px] shadow flex items-center justify-between px-5 gap-2'>
        <input type="text" placeholder='Type a message' autoComplete='off' className='flex-1 h-[40px] px-3 outline-none' {...register("message")}/>
        {
          watch('message').length>0&&
          <button className=' text-[26px] text-Primary'>
            <IoMdSend/>
          </button>
        }
    </div>
  )
}

export default SendMeesage