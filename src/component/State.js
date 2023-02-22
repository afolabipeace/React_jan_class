// import { set } from 'immer/dist/internal'
import React, {useState} from 'react'

const State = () => {
    const [currentState, setCurrentState] = useState("Peace")
    const [count, setCount] = useState(0)

    const button = (something) => {
        console.log('Hello World Am PEACE by name')
        console.log(something);
        console.log(currentState)
    }
    const input = (e) =>{
        setCurrentState(e.target.value);
    }

    const increase = () =>{
        setCount(count + 1)
    }

    const decrease = () =>{
       count > 0 && setCount(count - 1)
    }

    const restart = () =>{
        setCount(0)
    }
    return (
        <>
            <h1>STATE</h1>
            <div className='text-center'>
                <input value={currentState} onChange={input} className='border rounded outline-green p-2 m-2' />
                <button className='bg-blue-400 m-2 p-2 text-white rounded' onClick={()=>button('fvgvvffcfc')}>I'm a button</button>
                
                <div>
                <b>{count}</b>
                <button className='bg-green-400 m-2 p-2 text-white rounded' onClick={increase}>Increase</button>
                <button className='bg-red-400 m-2 p-2 text-white rounded' onClick={decrease}>Decrease</button>
                <button className='bg-yellow-400 m-2 p-2 text-dark rounded' onClick={restart}>Restart</button>
                </div>
            </div>
        </>
    )
}

export default State