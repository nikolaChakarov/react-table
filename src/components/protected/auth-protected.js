import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AuthProtected = ({ children }) => {
    const user = useSelector(state => state.user);
    
    if (user.value) {
        return <Navigate to='/' replace/>    
    }
    
    return children;
}

export default AuthProtected;