import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <>
      <menu id='menu' className='bg-[#001628] text-white w-[250px] h-[calc(100vh-64px)] flex flex-col'>
        <NavLink and to="/admin" className="px-3 py-4 hover:bg-slate-700 transition-all">Dashboard</NavLink>
        <NavLink and to="/admin/category" className="px-3 py-4 hover:bg-slate-700 transition-all">Category</NavLink>
        <NavLink and to="/admin/product" className="px-3 py-4 hover:bg-slate-700 transition-all">Product</NavLink>
        
      </menu>
    </>
  )
}
