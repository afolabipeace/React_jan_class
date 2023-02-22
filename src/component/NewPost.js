import axios from 'axios'
import React, { useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import baseUrl from './baseUrl'

const NewPost = () => {
    const navigate = useNavigate
    const title = useRef()
    const category = useRef()
    const more = useRef()
    const date = useRef()
    const picture = useRef()

    const [isloading, setisloading] = useState(false)

    const submitForm = () =>{
            let form= new FormData();
            form.append('title', title.current.value);
            form.append('category', category.current.value);
            form.append('more', more.current.value);
            form.append('date', date.current.value);
            form.append('picture', picture.current.files[0])
          //  const data = {
          //   title: title.current.value,
          //   category: category.current.value,
          //   more: more.current.value,
          //   date: date.current.value,
          //   picture: picture.current.files[0]
          //  }
        // {title,category,more,date,file
        setisloading(true)
        const url = 'http://localhost:4000/new-post'
        axios.post(baseUrl+'/new-post',form).then((res)=>{
            console.log(res)
            setisloading(false)
            navigate('/getpost')
        }).catch((err)=>{
            console.log(err)
            setisloading(false)
        })
    }


  return (
    <>  
       <div className='col-4 mx-auto p-3'>
        <input className='form-control' name='title' ref={title} placeholder='Title'/>
        <input className='form-control ' name='category' ref={category} placeholder='Category'/>
        <input className='form-control ' name='more' ref={more} placeholder='More'/>
        <input type='date' className='form-control ' name='date' ref={date} placeholder='Date'/>
        <input type='file' className='form-control ' name='picture' ref={picture} placeholder='File'/>
        <button disabled={isloading} className='btn btn-primary' onClick={submitForm}>{isloading?'Saving Post...':'Submit'}</button>
       </div>
    
    </>
  )
}

export default NewPost