import React, {useEffect, useState}from 'react'
import axios from 'axios'

const Fetch = () => {
    // const [data, setdata] = useState([])
    const [info, setinfo] = useState([])
    // const api = "https://api.github.com/users"
    // const url = "https://jsonplaceholder.typicode.com/users"
    // const getData = () =>{
    //     axios.get(url).then((res)=>{
    //         setdata(res.data)
    //         console.log(data)
    //         console.log(res.data)
    // }).catch((err)=>{
    //     console.log(err)
    // })
    // }
    // const apiFetch = () =>{
    //     axios.get(api).then((res)=>{
    //         setinfo(res.data)
    //         console.log(info)
    //         console.log(res.data)
    // }).catch((err)=>{
    //     console.log(err)
    // })
    // }

    useEffect(()=>{
    //    apiFetch()
    },[])
    const [city, setcity] = useState('Lagos')
    const changeInput = (e)=>{
        setcity(e.target.value)
    }
    const getDetails = () =>{
        // const api = `https://api.openweatherapp.org/data/2.5/weather?q=${city}&appid=${apikey}`;
        // axios.get(api).then((res)=>{
        //     console.log(res)
        // }).catch((err)=>{
        //     console.log(err)
        // })
    }
  return (
    <>
   
         {/* <button className='btn btn-primary rounded bg-blue-700' onClick={getData}>Get Data</button>
         <button className='btn btn-primary rounded bg-blue-700' onClick={apiFetch}>Get Data</button>
        {
        data.length==0?<h1>Isloading</h1>:
            data.map((each,i)=>(
            <div key={i} className='shadow mx-auto p-2'>
                <h1 className='text-center fw-bold display-6'>S/N: {each.id}</h1>
                <h1 className='text-center fw-bold display-6'>Name: {each.name}</h1>
                <h3 className='text-center  display-6'>Email: {each.email}</h3>
                <h3 className='text-center  display-6'>Username: {each.username}</h3>
                <h3 className='text-center  display-6'>Website: {each.website}</h3>
                <h3 className='text-center  display-6'>Phone: {each.phone}</h3>
            </div>
            ))
        }

        {
            info.length==0?<h1>Isloading.........</h1>:
            info.map((user,index)=>(
                <div key={index} className='shadow mx-auto p-2'>
                    <img src={user.avatar_url} className='img'alt=''/>
                    <h1 className='text-center display-6'>S/N: {user.id}</h1>
                    <h1 className='text-center fw-bold display-6'>Name: {user.login}</h1>
                </div>
            ))
        } */}
        
      
        <input className='form-control' onChange={changeInput} />
         <button className='btn btn-primary rounded bg-blue-700' onClick={getDetails}>Fetch Data</button>
       
    </>
  )
}

export default Fetch