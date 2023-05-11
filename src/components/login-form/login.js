import React from "react"
import styled from "styled-components"

import Error from "../error/error";
import useForm from "../../hooks/useForm";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../slices/user-slice";

const LoginForm = () => {
    const init = {
        username: '', 
        password: ''
    }
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const validation = (state) => {
        const errors = {};
        
        if (!state.username) {
            errors.username = 'username is required'
        }
        
        if (!state.password) {
            errors.password = 'password is required'
        }
        return errors;
    }
    
    const onSubmit = (values) => {
        localStorage.setItem('user_nc', JSON.stringify(values));
        
        // dispatch(login(values));
        setTimeout(() => setSubmitting(false), 1000);
        setTimeout(() => dispatch(login(values)), 2500);
        setTimeout(() => navigate('/table'), 2500);
        
    }
    
    const { values, errors, blured, submitting, setSubmitting, handleSubmit, handleBlured, handleChange} = useForm({init, validation, onSubmit});
    
    return <LoginFormWrapper>
        <h3>Login</h3>
        
        <div className="log-form">
            <label htmlFor="username">
                    <span>Username</span>
                    <input 
                        name="username" 
                        value={values.username}
                        onBlur={handleBlured}
                        onChange={handleChange} 
                    />
                </label>
                {errors.username && blured.username && <Error message={errors.username}/>}
                
                <label htmlFor="password">
                    <span>Password</span>
                    <input 
                        name="password" 
                        value={values.password}
                        onBlur={handleBlured}
                        onChange={handleChange} 
                    />
                </label>
                {errors.password && blured.password && <Error message={errors.password}/>}
                
                <div className="btn-wrapper">
                <button disabled={submitting} onClick={handleSubmit}>Login</button>
            </div>
        </div>
    </LoginFormWrapper>
};

const LoginFormWrapper = styled.div`
    .log-form {
        display: flex;
        flex-direction: column;
        gap: 10px
    }
`;

export default LoginForm;