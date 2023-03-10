import React, { useRef, useState } from 'react'
import baseUrl from './baseUrl'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
    const email = useRef()
    const password = useRef()

    const navigate = useNavigate()
    // const handlingInputs = (e)=>{
    //     const {name,value}= e.target
    //     setUser({...user,[name]:value})
    // }
    const signin = () => {
        if (email == '' || password == '') {
            alert('Kindly fill up the Empty field(s)')
        } else {
            const data = {
                email: email.current.value,
                password: password.current.value,
            }
            axios.post(baseUrl + '/login', data).then((res) => {
                console.log(res)
                if (res.data.success) {
                    localStorage.setItem('token', res.data.token)
                    navigate('/user/dashboard')
                }
            }).catch((err) => {
                console.log(err)
            })
        }
    }
    return (
        <>
            <div className='shadow mx-auto p-3 m-2 col-4'>
                <input name='email' ref={email} placeholder='Email' className='border rounded outline-none p-2 m-2' /><br></br>
                <input name='password' ref={password} placeholder='Password' type='password' className='border rounded outline-none p-2 m-2' /><br></br>
                <button className='bg-blue-400 btn btn-success m-2 p-2 text-white rounded' onClick={signin}>Signin</button>
            </div>
        </>
    )
}

export default Signin