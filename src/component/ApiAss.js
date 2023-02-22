import axios from 'axios'
import React, {useState}from 'react'

const ApiAss = () => {
    const [fetch, setfetch] = useState([])
    const Fetch = ()=>{
       const url = "https://api.artic.edu/api/v1/artworks?limit=27"
        axios.get(url).then((res)=>{
            console.log(res.data.data)
            setfetch(res.data.data)
        }).catch((err)=>{
            console.log('error dey'+err)
        })
    }
  return (
    <>
        <button onClick={Fetch}>Fetch</button>
        {
            fetch.map((each,i)=>(
                <div key={i} className='shadow mx-auto p-2'>
                <h1 className='text-center fw-bold display-6'>S/N: {each.id}</h1>
                <img src={each.image_id} className='img'alt=''/>
                <h1 className='text-center fw-bold display-6'>Title: {each.title}</h1>
                <h3 className='text-center  display-6'>Email: {each.api_model}</h3>
                <h3 className='text-center  display-6'>Username: {each.classification_title}</h3>
                <h3 className='text-center  display-6'>Website: {each.title}</h3>
                <h3 className='text-center  display-6'>Phone: {each.phone}</h3>
            </div>
            ))
        }
    </>
  )
}

export default ApiAss