import axios from 'axios';
import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import App from './App'
import ClassComponent from './ClassComponent';
import ComponentInteraction from './component/ComponentInteraction';
import CustomHook from './component/CustomHook';
import Dashboard from './component/Dashboard';
import Details from './component/Details';
import Edit from './component/Edit';
import EditProfile from './component/EditProfile';
import Fetch from './component/Fetch';
import FormikYup from './component/FormikYup';
import ForSocket from './component/ForSocket';
import GetPost from './component/GetPost';
import HandlingInput from './component/HandlingInput'
import Login from './component/Login';
import Main from './component/Main';
import MainComponent from './component/MainComponent';
import Navbar from './component/Navbar';
import NewPost from './component/NewPost';
import Profile from './component/Profile';
import Question from './component/Question';
import Signin from './component/Signin';
import Signup from './component/Signup';
import State from './component/State'
import UserGuard from './guards/userGuard';

axios.interceptors.request.use((value)=>{
    value.headers = {
        'Authorization':localStorage.token
    }
    return value;
})

const MainRouter = () => {
  return (

    //   <ComponentInteraction/>
    //   <Fetch/>
    //   <ApiAss/>
    //   <CustomHook/>
    //    <NewPost/> 
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/state' element={<State/>}/>
            <Route path='/register' element={<Details/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/formik' element={<FormikYup/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/input' element={<HandlingInput/>}/>
            <Route path='/component' element={<ComponentInteraction/>}/>
            <Route path='/newpost' element={<NewPost/>}/>
            <Route path='/getpost' element={<GetPost/>}/>
            <Route path='/fetch' element={<Fetch/>}/>
            <Route path='/hooks' element={<CustomHook/>}/>
            <Route path='/edit' element={<Edit/>}/>
            <Route path='/class' element={<ClassComponent/>}/>
            <Route path='/learn-socket' element={<ForSocket/>}/>
            <Route path='/question/:number' element={<Question/>}/>
            <Route path='/user' element={<UserGuard/>} children={[
                <Route path='dashboard' element={<Dashboard/>}/>,
                <Route path='profile/:username' element={<Profile/>}/>,
                <Route path='edit-profile' element={<EditProfile/>}/>
            ]}/>
            <Route path='/user' element={<MainComponent/>} children={[
                <Route path='main' element={<Main/>}/>
            ]}/>
            <Route path='*' element={
                <div>Looks like you are lost <Link to='/user/dashboard' style={{textDecoration:'none',color:'blue'}}>Go to Dashboard</   Link>
                </div>
            }/>
        </Routes>
    </BrowserRouter>
  )
}

export default MainRouter