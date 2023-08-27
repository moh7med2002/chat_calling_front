import React from 'react'
import UserItem from './UserItem';

function UsersMap() {
    const data=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  return (
    <div className='container px-4 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-14'>
        {
            data.map(item=>{
                return <UserItem key={item}/>
            })
        }
    </div>
  )
}

export default UsersMap