import React,{useState,useEffect} from 'react'

const ComponentInteraction = () => {
    const [count, setcount] = useState(0)

    const increase = () =>{
        setcount(count+1)
    }
    const decrease = () =>{
        count > 0 && setcount(count - 1)
    }

    const firstname = 'Peace'
    const user = {
        name:'Peace Afolabi',
        dept:'Software Engineering',
        school:'SQI'
    }

    const log = () =>{
        console.log('Im A function My function is to log to the console');
    }

    useEffect(() => {
        console.log('useEffect is working');
    }, [count])
    
  return (
    <>
        <div>
            <Child1 firstname={firstname} lastname={'Afolabi'} user={user} log={log} increase={increase} decrease={decrease}/>
            <h3>{count}</h3>
        </div>
    </>
  )
}

const   Child1 = ({firstname,lastname,user,log,decrease,increase}) =>{
    return(
        <>
            <div>
                I'm the first child, my name is {firstname} {lastname} 
               <h2>{user.name} {user.school} {user.dept}</h2> 
               <button className=' btn btn-primary p-2 m-2' onClick={log}>I will call on a function in my parent function</button><br/>
               <button className=' btn btn-primary p-2 m-2' onClick={increase}>Increase</button>
               <button className=' btn btn-danger p-2 m-2' onClick={decrease}>Decrease</button>
            </div>
        </>
    )
}

export default ComponentInteraction