import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Authorized = ({ children }) => {
    
    const user = useSelector(state => state.user);
    
    if (!user.value) {
        return <Navigate to='/login'/>
    }
    
    return children;
    
}

export default Authorized;