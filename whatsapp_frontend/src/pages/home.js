import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'

function home() {
  return (
    <div className="min-h-screen dark:bg-dark_bg_1 flex items-center justify-center py-[19px] overflow-hidden">
       {/*container*/}
       <div className="container min-h-screen flex">
        {/*Sidebar*/}
        <Sidebar />
      </div>
    </div>
  )
}

export default home
