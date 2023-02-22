import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const handleLogin=()=>{
        navigate('/user/dashboard')
    }
  return (
    <div>
      <button onClick={handleLogin} className='bg-slate-600 rounded text-white p-2 p-3 w-32'>Login Here</button>
    </div>
  )
}

export default Login