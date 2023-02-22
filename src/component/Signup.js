import React, {useState}from 'react'
import { useNavigate } from 'react-router-dom'
import baseUrl from './baseUrl'
import axios from 'axios'

const Signup = () => {
    const detail={
        firstname:'',
        lastname:'',
        email:'',
        password:''
    }
    const navigate = useNavigate('')
    const [user, setUser] = useState(detail)
    const handlingInputs = (e)=>{
        const {name,value}= e.target
        setUser({...user,[name]:value})
    }

    const signup = ()=>{
        axios.post(baseUrl+'/register',user).then((res)=>{
            console.log(res)
            navigate('/signin')
        }).catch(err=>{
            console.log(err)
        })
    }
  return (
    <>
        <div className='shadow mx-auto col-5 p-3 m-2'>
            <input name='firstname' value={user.firstname} placeholder='firstname' onChange={handlingInputs} className='border rounded outline-green p-2 m-2' />
            <input name='lastname' value={user.lastname} placeholder='lastname' onChange={handlingInputs} className='border rounded outline-green p-2 m-2' />
            <input name='email' value={user.email} placeholder='Email' onChange={handlingInputs} className='border rounded outline-none p-2 m-2' /><br></br>
            <input name='password'value={user.password} placeholder='Password' onChange={handlingInputs}  type='password'className='border rounded outline-none p-2 m-2' /><br></br>
            <button className='bg-blue-400 btn btn-success m-2 p-2 text-white rounded' onClick={signup}>Signup</button>
        </div>
    </>
  )
}

export default Signup