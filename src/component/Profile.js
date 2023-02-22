import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Profile = () => {
  const name = useSelector((state)=>state.profile)
  console.log(name)
    const {username} = useParams()
  return (
    <>
      Profile page for user {username}<br></br>
      <b>Fistname: {name.firstname}</b><br></br>
      <b>Lastname: {name.lastname}</b>
      <p>Email: {name.email}</p>
    </>
  )
}

export default Profile