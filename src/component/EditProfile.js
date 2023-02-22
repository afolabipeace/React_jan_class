import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const EditProfile = () => {
    const state = useSelector((state)=>state.profile)
  return (
    <>
        <div className='shadow col-4 mx-auto p-3 m-2'>
            <b>Firstname: {state.firstname}</b><br></br>
            <b>Lastname: {state.lastname}</b>
            <p>Email: {state.email}</p>
            <Link to='/edit'><button className='btn btn-primary'>Edit</button></Link>
        </div>
        <input value={state.Firstname} className='form-control'/>
    </>
  )
}

export default EditProfile