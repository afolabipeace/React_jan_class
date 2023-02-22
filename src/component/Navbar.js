import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const name = useSelector((state)=>state.profile)
  console.log(name)
  return (
    <div className='bg-slate-500 justify-end text-white p-2 space-x-5 flex'>
        <div>
            <Link to='/' style={{textDecoration:'none',color:'black'}}>Home</Link>&nbsp;
            <Link to='/register' style={{textDecoration:'none',color:'black'}}>Register</Link>&nbsp;
            <Link to='/user/edit-profile' style={{textDecoration:'none',color:'black'}}>Edit</Link>
        <b className='text-dark'>{name.firstname}</b>
        <b className='text-dark'>{name.lastname}</b>
        </div>
    </div>
  )
}

export default Navbar