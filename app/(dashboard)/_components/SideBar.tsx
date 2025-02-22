import React from 'react'
import Logo from './logo'
import SidebarRoutes from './sidebar-routes'
const SideBar = () => {
  return (
    <div className='h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm'>
        <div className='p-6'>
            <Logo></Logo>
        </div>
        <div className='flex flex-col w-full'>
            <SidebarRoutes></SidebarRoutes>
        </div>
      
    </div>
  )
} 

export default SideBar
