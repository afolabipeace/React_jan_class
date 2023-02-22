import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const FormikYup = () => {

    const validationSchema = Yup.object({
        firstname:Yup.string().required(),
        lastname:Yup.string().required(),
        email:Yup.string().email().required(),
        password:Yup.string().min(8).required('Password field is required')
    })

    const initialValues = {
        firstname:'',
        lastname:'',
        email:'',
        password:''
    }
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit:(values)=>{
            console.log(values);
        }
    })
  return (
    <>
        <div className='flex justify-center items-center'>
            <form onClick={formik.handleSubmit} className='shadow p-3 rounded col-5'>
                <h3 className='text-slate-700 text-xl font-bold mb-2'>Sign Up</h3>
                <input onChange={formik.handleChange} value={formik.firstname} name='firstname' className='rounded border focus:border-sky-700 form-control p-2 text-sm transition my-2' placeholder='Firstname'/>
                {formik.errors.firstname}
                <input onChange={formik.handleChange} value={formik.lastname} name='lastname' className='rounded border focus:border-sky-700 form-control p-2 text-sm transition my-2' placeholder='Lastname'/>
                <input onChange={formik.handleChange} value={formik.email} name='email' className='rounded border focus:border-sky-700 form-control p-2 text-sm transition my-2' placeholder='Email'/>
                <input onChange={formik.handleChange} value={formik.password} name='password' className='rounded border focus:border-sky-700 form-control p-2 text-sm transition my-2' placeholder='Password'/>
                {formik.errors.password}
                {/* <input className='rounded border focus:border-sky-700 w-full p-2 text-sm transition my-2'/> */}
                <button disabled={!formik.isValid} type='submit' className='rounded transition bg-slate-900 text-white hover:bg-sky-700 w-full p-2' onClick={formik.handleSubmit}>SignUp</button>
            </form>
        </div>
    </>
  )
}

export default FormikYup