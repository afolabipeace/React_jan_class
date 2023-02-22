import React,{useState} from 'react'
import { useSelector } from 'react-redux/es/exports'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { decrease, increase } from '../slices/counterSlice'
import { setProfile } from '../slices/userSlice'

const Dashboard = () => {
  const {counter,profile} = useSelector((state)=>state)
  const [user, setuser] = useState(profile)
  const dispatch = useDispatch();
  const click = () =>{
    dispatch(increase())
  }
  const clickDecrease = () =>{
    dispatch(decrease())
  }

  const handleChange=(e)=>{
    const {name,value}= e.target
    setuser({...user,[name]:value})
    dispatch(setProfile(user))
  }

  const update = () =>{
    dispatch(setProfile(user))

  }

  return (
    <div className='col-5 mx-auto shadow p-4 m-4'>
      User dashboard <br></br>
      <b> {counter.count}</b><br></br>
      <button className='btn btn-primary ' onClick={click}>Increase</button>
      <button className='btn btn-primary' onClick={clickDecrease}>Decrease</button>
      <input name='firstname' value={user.firstname} onChange={handleChange}  className='form-control'/>
      <input name='lastname' value={user.lastname} onChange={handleChange}  className='form-control'/>
      <input name='email' value={user.email} onChange={handleChange}  className='form-control'/>
      <button className='btn btn-primary'onClick={update} >Update</button>
    </div>
  )
}

export default Dashboard