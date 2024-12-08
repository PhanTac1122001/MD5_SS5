import React from 'react'
import Header from './Header'
import Menu from './Menu'
import { Outlet } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <>
        <Header/>
        <div className='flex'>
        <Menu/>
        <div className='bg-blue-300 flex-1'>
        <h3>
          <Outlet/>
        </h3>
        </div>
        </div>
        
       
    </>
  )
}
