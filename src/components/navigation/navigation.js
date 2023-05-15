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
        
        <div className="menu-wrapper">
            <Link to='/'>Home</Link>
            
            {user.value ? <>
                <Link to='/table'>Table</Link>
                <Link onClick={handleLogout}>Logout</Link>
            </> : <>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            
            </>}
        </div>
        
       <div className="components-wrapper">
        <Outlet />
       </div>
        
    </NavigationWrapper>
    
}

const NavigationWrapper = styled.div`
    border: 2px dashed red;
    display: flex;
    flex-direction: column;
    
    height: 100vh;
    overflow: scroll;
    
    .components-wrapper {
        overflow: scroll;
    }
    
    .menu-wrapper {
        padding: 10px;
        display: flex;
        gap: 10px;
    }

   @media (max-width: 576px) {
    .components-wrapper {
        border: 3px dashed darkolivegreen;
        padding: 10px;
    }
   }
`;

export default Navigation;