import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import questions from '../questions'
import QuestionButton from './QuestionButton';
// const question = questions
const Question = () => {
  const navigate = useNavigate()
  const { number } = useParams();
  let eachQuestion = questions.find((_, i) => i = number - 1)

  const DATA = [
    {value:'optionA', Option:'A', mainOption: eachQuestion.A, checked: false},
    {value:'optionB', Option:'B', mainOption: eachQuestion.B, checked: false},
    {value:'optionC', Option:'C', mainOption: eachQuestion.C, checked: false},
    {value:'optionD', Option:'D', mainOption: eachQuestion.D, checked: false},
  ]
  const options = DATA.map((item,i)=>(
    <div>
      {/* <QuestionAnswer value={item.value} option={item.Option} mainOption={item.mainOption} checked={item.checked}/> */}
    </div>
  ))

  return (
    <><h1>QUESTION</h1>
      <h1 className='text-center'>CBT EXAM</h1>
      <strong>{number}.</strong>
      <div className='shadow col-4 mx-auto'>
        {eachQuestion.question}
        <div className='h5'>
          <input type='radio' className='form-check-input' name='exampleRadios' value='option2' id
            ='exampleRadio2' />
          <label>A. {eachQuestion.A}</label>
        </div>
        <div className='h5'>
          <input type='radio' className='form-check-input' name='exampleRadios' value='option2' id
            ='exampleRadio2' />
          <label>B. {eachQuestion.B}</label>
        </div>
        <div className='form-check'>
          <input type='radio' className='form-check-input' name='exampleRadios' value='option2' id
            ='exampleRadio2' />
          <label>C. {eachQuestion.C}</label>
        </div>
        <div className='h5'>
          <input type='radio' className='form-check-input' name='exampleRadios' value='option2' id
            ='exampleRadio2' />
          <label>D. {eachQuestion.D}</label>
        </div>
        {/* <button className='btn btn-primary' onClick={() => { navigate(`/question/${Number(number) + 1}`) }}>Next</button>
        <button className='btn btn-warning' onClick={() => { navigate(`/question/${Number(number) + -1}`)}}>Previous</button> */}
        <QuestionButton number={number}/>
        {/* <div className='bg-green-500 text-center h4'>Ans. {ques.answer}</div> */}
      </div>
    </>
  )
}

export default Question