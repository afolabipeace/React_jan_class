import React from 'react'
import { Navigate } from 'react-router-dom';
import Main from '../component/Main';
import Mains from '../component/Mains';

const UserGuard = () => {
    const isLoggedIn = true;
    if(isLoggedIn){
        return <Mains/>
    }else{
      return <Navigate to='/login'/>
    }
  return (
    <div>userGuard</div>
  )
}

export default UserGuard