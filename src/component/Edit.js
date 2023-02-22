import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { setProfile } from '../slices/userSlice'

const Edit = () => {
  const state = useSelector((state)=>state.profile)
  const [details, setdetails] = useState(state)
    const handleChange =(e)=>{
      setdetails({...details,[e.target.name]:e.target.value})
    }
    const dispatch = useDispatch();
    const edit = () =>{
     dispatch(setProfile(details))
    }
  return (
    <>
        <div className='shadow mx-auto col-6 p-4 m-2'>
            <input className='form-control'name='firstname' onChange={handleChange} value={details.firstname}/>
            <input className='form-control'name='lastname'  onChange={handleChange}  value={details.lastname}/>
            <input className='form-control'name='email' onChange={handleChange}  value={details.email}/>
            <button className='btn btn-success' onClick={edit}>Update</button>
        </div>
    </>
  )
}

export default Edit