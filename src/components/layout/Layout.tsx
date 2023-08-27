import React from 'react'
import Navbar from './Navbar'

type Proos = {
    children : React.ReactNode
}

function Layout({children}:Proos) {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default Layout