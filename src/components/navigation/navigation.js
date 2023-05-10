import React from "react";
import { Link, Outlet } from "react-router-dom"
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { logout } from "../../slices/user-slice";

const Navigation = () => {
    
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    
    const handleLogout = () => {
        localStorage.removeItem('user_nc');
        dispatch(logout());
    }
    
    return <NavigationWrapper>
        
        <Link to='/'>Home</Link>
        
        {user.value ? <>
            <Link to='/table'>Table</Link>
            <Link onClick={handleLogout}>Logout</Link>
        </> : <>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
        
        </>}
        
        <Outlet />
        
    </NavigationWrapper>
    
}

const NavigationWrapper = styled.div``;

export default Navigation;