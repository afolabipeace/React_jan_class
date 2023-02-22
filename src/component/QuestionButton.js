import React from 'react'
import { useNavigate } from 'react-router-dom'

const QuestionButton = ({number}) => {
    const navigate = useNavigate()
  return (
    <>
        <button className='btn btn-primary' onClick={()=>{navigate(`/question/${Number(number)+ 1}`)}}>Next</button>
        <button className='btn btn-warning' onClick={()=>{navigate(`/question/${Number(number)+ -1}`)}}>Previous</button>
    </>
  )
}

export default QuestionButton