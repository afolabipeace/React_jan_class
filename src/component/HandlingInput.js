import React,{useState}from 'react'

const HandlingInput = () => {
    const [user, setUser] = useState({
        firstname:'',
        lastname:'',
        age:''
    })
    const [array,setarray]=useState([])
    const inputIsChanging=(e)=>{
        const {value,name} = e.target
        setUser({...user, [name]:value})
    }

    const submitUser=() => {
        console.log(user)
        setarray([...array,user])
    }
  return (
    <>
        <h1>HandlingInput</h1>
         <div className='text-center shadow mx-auto col-4 p-3 m-3'>
                <div>
                    <input name='firstname' value={user.firstname} onChange={inputIsChanging} className='border rounded outline-green p-2 m-2' placeholder='Firstname'/>
                    <input name='lastname' value={user.lastname} onChange={inputIsChanging} className='border rounded outline-green p-2 m-2' placeholder='lastname'/>
                    <input name='age' value={user.age} onChange={inputIsChanging} className='border rounded outline-green p-2 m-2' placeholder='Age'/><br></br>
                    <button className='bg-blue-400 btn btn-success m-2 p-2 text-white rounded mb-2 w-50' onClick={submitUser}>Add</button><br></br>
                </div>
                <div className='shadow mx-auto col-8 m-3 p-5'>
                    {
                    array.map((each,i)=>(
                        <span key={i} >
                            <div>FIRSTNAME: {each.firstname} </div>
                            <div> LASTNAME: {each.lastname} </div>
                            <div> AGE: {each.age}</div>
                        <br></br></span>
                    ))
                }
                </div>
            </div>
    </>
  )
}

export default HandlingInput