import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import Navigation from './components/navigation/navigation';
import Home from './home/home';
import RegisterForm from './components/register-form/register';
import LoginForm from './components/login-form/login';
import BasicTable from './components/table/basic-table';
import AuthProtected from './components/protected/auth-protected';
import Authorized from './components/protected/authorized';


const App = () => {
  return <div className='main'>
        
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route index element={<Home />}/>
                <Route path='/register' element={<AuthProtected><RegisterForm /></AuthProtected>}/>
                <Route path='/login' element={<AuthProtected><LoginForm /></AuthProtected>}/>
                <Route path='/table' element={<Authorized><BasicTable /></Authorized>}/>
            </Route>
        </Routes>
      
  </div>
}

export default App;