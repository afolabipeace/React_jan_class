import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { useStorage } from './useStorage'
const CustomHook = () => {
    // const url = 'https://placebear.com/200/300';\
    const [facts, setfacts] = useState([])
    const [isloading, setIsloading] = useState(false)
    useEffect(()=>{
    const url = 'https://cat-fact.herokuapp.com/facts';
    setIsloading(true)
        axios.get(url).then((res)=>{
            setfacts(res.data)
            setIsloading(false)
        }).catch(err=>{
            console.log(err);
            setIsloading(false)
        })
    },[])
    const [data, setdata] = useState([])
    const {getIt,setIt} = useStorage()
    useEffect(()=>{
        if(localStorage.data){
            setdata(getIt('data'))
        }
    },[getIt])

    const setttt = () =>{
        setIt('data',data)
    }
  return (
    <>
       {isloading ? "Loading":
            facts.map((each,i)=>(
                <div>
                    <h2>{each.text}</h2>
                </div>
            ))
       }
    </>
  )
}

export default CustomHook