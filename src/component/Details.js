import React, { useState,useRef,useEffect } from 'react'
import { useStorage } from './useStorage'

const Details = () => {
    
    const {getIt,setIt} = useStorage()


    const age = useRef(null)

    const userObj={firstname:'',
    lastname:'',
    email:'',
    age:'',
    password:''}
    const [details, setdetails] = useState(userObj)
    const [detailsArray, setDetailsArray] = useState([])
    const [editedindex, seteditedindex] = useState(null)
    // const [editedobj, seteditedobj] = useState({})
    const inputs = (e) => {
        if(editedindex==null){
            const {name,value}= e.target
            setdetails({...details,[e.target.name]:e.target.value})
        }else{
            setdetails({...details,[e.target.name]:e.target.value})
        }
    }

    const register = () => {
        if(editedindex===null){
            setDetailsArray([...detailsArray,details])
            
        setIt('set',([...detailsArray,details]))
            // localStorage.set=JSON.stringify([...detailsArray,details])
        }else{
            const newUsers = [...detailsArray];
            newUsers[editedindex]= details;
            setDetailsArray([...newUsers])
            // setDetailsArray(detailsArray.map((each,i)=>i==editedindex ? details : each));
            seteditedindex(null)
            
        setIt('set',newUsers)
            // localStorage.set=JSON.stringify([...newUsers])
        }
        setdetails(userObj)
        // setDetailsArray(details)
        // localStorage.set=JSON.stringify(details)
        // console.log(age.current.value)
        // const userObj = { firstname, lastname,age:age.current.value }
        // setDetailsArray([...detailsArray, userObj])
    }
    const delet = (i) =>{
        let index = i
        const newUsers = [...detailsArray];
        newUsers.splice(index,1)
        // let detail = [...detailsArray]
        setDetailsArray(newUsers)
        setIt('set',newUsers)
        // localStorage.set=JSON.stringify(newUsers)
    }
    const editUser =(i) =>{
        // let editIndex = i
        seteditedindex(i)
        var edit = detailsArray[i]
        setdetails(edit)
        // seteditedobj(detailsArray[editIndex]) 

    }

    // const [data, setdata] = useState([])
    useEffect(() => {
        if(localStorage.set){
            setDetailsArray(getIt('set'))
            // setDetailsArray(JSON.parse(localStorage.getItem("set")))
        }
    }, [])
    return (
        <>
        <h1>USER DETAILS</h1>
            <div className='text-center shadow mx-auto col-4 p-3 m-3 bg-primary'>
                <input name='firstname' value={details.firstname} placeholder='firstname' onChange={inputs} className='border rounded outline-green p-2 m-2' />
                <input name='lastname' value={details.lastname} placeholder='lastname' onChange={inputs} className='border rounded outline-green p-2 m-2' />
                <input name='email' value={details.email} placeholder='Email' onChange={inputs} className='border rounded outline-none p-2 m-2' /><br></br>
                <input name='age' value={details.age} placeholder='Age' onChange={inputs} className='border rounded outline-none p-2 m-2' /><br></br>
                <input name='password' type='password' value={details.password}  placeholder='Password' onChange={inputs} className='border rounded outline-none p-2 m-2' /><br></br>
                {/* <input ref={age} placeholder='Age' className='border rounded outline-none p-2 m-2' /><br></br> */}
                 <button className='bg-blue-400 btn btn-success m-2 p-2 text-white rounded' onClick={register}>{editedindex == null ? "Register" : "Update"}</button>
                    
                    
                 </div>
                 {detailsArray.length<1? <h3>No Registered user</h3>:
                            <table className='w-100 table table-dark text-light'>
                                <thead>
                                    <tr>
                                        <th>S/N</th>
                                        <th>Firstname</th>
                                        <th>Lastname</th>
                                        <th>Email</th>
                                        <th>Age</th>
                                        <th>Password</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                {detailsArray.map((each, i) =>(
                                <tbody>
                                    <tr>
                                        <td>{i+1}</td>
                                        <td>{each.firstname}</td>
                                        <td>{each.lastname}</td>
                                        <td>{each.email}</td>
                                        <td>{each.age}</td>
                                        <td>{each.password}</td>
                                        <td>
                                            <Action delet={()=>delet(i)}/>
                                            <button className='btn btn-primary 'onClick={()=>editUser(i)}>Edit</button>
                                            {/* <div><Delete delet={edit}/></div> */}
                                        </td>
                                    </tr>
                                </tbody>
                                ))}
                            </table>
                    }
                

            
        </>
    )
}


{/* <div> FIRSTNAME: {each.firstname}</div>
<div>LASTNAME: {each.lastname}</div> 
<div>EMAIL: {each.email}</div>
<div> AGE: {each.age}</div>
<div> PASSWORD: {each.password}</div>
<div><Delete delet={()=>delet(i)}edit={()=>edit(i)}/></div> */}
{/* <div><Delete delet={edit}/></div> */}



const Action = ({delet}) =>{
    return(
        <>
            <div>
            <button className='btn btn-danger'onClick={delet}>Delete</button>
            {/* <button className='btn btn-primary 'onClick={edit}>Edit</button> */}
            </div>
        </>
    )
}

export default Details

