import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import baseUrl from '../component/baseUrl';
import Main from '../component/Main';
import MainComponent from '../component/MainComponent';
import Mains from '../component/Mains';

const UserGuard = () => {
  const isLoggedIn = true;
  const [component, setcomponent] = useState(<div>Loading...</div>)
  const navigate = useNavigate()
  useEffect(() => {
    axios.get(baseUrl + '/profile').then(res => {
      console.log(res)
      if(res.data.success){
        setcomponent(<Mains/>)
      }

    }).catch(err => {
      if(!err?.response.data.success){
        navigate('/signin')
      }

    })
  }, [navigate])

  //

  // if(isLoggedIn){
  //     return <Mains/>
  // }else{
  //   return <Navigate to='/login'/>
  // }
  return component
}

export default UserGuard