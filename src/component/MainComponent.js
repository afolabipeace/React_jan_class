import React from 'react'
import { Outlet } from 'react-router-dom'

const MainComponent = () => {
  return (
    <div>
        Hellooo
        <Outlet/>
    </div>
  )
}

export default MainComponent