import React from 'react'

const Class = () => {
    const verified = false;
    const number= [0,1,2,3,4,5,6,7,8,9]
    const myName='Peace Afolabi'
    const user={
        name:myName,
        school:'SQI',
        dept:'Software Engineering'
    }
  const users=[
    {name:'Peace',school:'SQI'},
    {name:'Favour',school:'SQI'},
    {name:'Blessiong',school:'BFS'}
  ]
  return (
    <>
        <div className='bg-success text-center text-white col-6 mx-auto'>
            <div>{user.name}</div>
            <div>{user.school}</div>
            <div>{user.dept}</div>
            {
            number.filter((each, i)=>i <=6).map((each,i)=>(
            <span key={i} className='`p-2 shadow m-2 ${if(i==2 ? bg-red :bg-dark")}`'>{each}</span>
            ))
            }<br/><br/>
            {
                users.map((each,i)=>(
                    <span className='p-3 shadow 4m-3'>{each.name} {each.school}</span>
                ))
            }
        </div>
        
    </>
  )
}

export default Class