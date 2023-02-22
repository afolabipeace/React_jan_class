import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import State from './component/State';
import Details from './component/Details';
import HandlingInput from './component/HandlingInput';
import ComponentInteraction from './component/ComponentInteraction';
import Fetch from './component/Fetch';
import ApiAss from './component/ApiAss';
import CustomHook from './component/CustomHook';
import NewPost from './component/NewPost';
import MainRouter from './MainRouter';
import { Provider } from 'react-redux';
import store from './store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <MainRouter/>
    </Provider>
  </React.StrictMode>
);

      //  <App /> 
      //  <State/> 
      //  <Details/> 
      //  <HandlingInput/> 
      //  <ComponentInteraction/> 
      //  <Fetch/> 
      //  <ApiAss/> 
      //  <CustomHook/> 
      //  <NewPost/> 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
