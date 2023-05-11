import React from "react"
import { useNavigate  } from "react-router-dom";
import styled from "styled-components"
import { useDispatch } from "react-redux";
import { login } from "../../slices/user-slice";
import useForm from "../../hooks/useForm";
import Error from "../error/error";

const RegisterForm = () => {
    const init = {
        username: '',
        password: '', 
        password2: '',
        gender: '',
        skills: [],
        country: '',
        coments: ''
    }
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const validation = (state) => {
        const errors = {};
        
        if (!state.username) {
            errors.username = 'username is required'
        }
        
        if (!state.password) {
            errors.password = 'password is required'
        }
        
        if (!state.password2) {
            errors.password2 = 'password required'
        } else if (state.password !== state.password2) {
            errors.password2 = 'password is not the same'
        }
        
        return errors;
    }
    
    const onSubmit = (val) => {
        console.log(val);
        
        setTimeout(() => setSubmitting(false), 1000);
        
        localStorage.setItem('user_nc', JSON.stringify(values));
        dispatch(login(values));
        
        navigate('/');
    }
    
    const { values, errors, blured, submitting, setSubmitting, handleChange, handleCheckboxChange, handleBlured, handleSubmit } = useForm({ init, validation, onSubmit });
    
    return <RegisterFormWrapper>
        <h3>Register</h3>
        
        <div className="reg-form">
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
            
            <label htmlFor="password2">
                <span>Repeat Password</span>
                <input 
                    name="password2" 
                    value={values.password2}
                    onBlur={handleBlured}
                    onChange={handleChange} 
                />
            </label>
            {errors.password2 && blured.password2 && <Error message={errors.password2}/>}
            
            <label htmlFor="gender">
                <span>man</span>
                <input type="radio" name="gender" value='man' checked={values.gender === 'man'} onChange={handleChange}/>
                
                <span>woman</span>
                <input type="radio" name="gender" value='woman' checked={values.gender === 'woman'} onChange={handleChange}/>
            </label>
            
            <div className="skills">
                <label htmlFor="javascript">
                    <span>JavaScript</span>
                    <input type="checkbox" name="javascript" value='javascript' onChange={(e) => handleCheckboxChange(e, {field: 'skills'})}/>
                </label>
                
                <label htmlFor="javascript">
                    <span>React</span>
                    <input type="checkbox" name="react" value='react' onChange={(e) => handleCheckboxChange(e, {field: 'skills'})}/>
                </label>
                
                <label htmlFor="javascript">
                    <span>Lwc</span>
                    <input type="checkbox" name="lwc" value='lwc' onChange={(e) => handleCheckboxChange(e, {field: 'skills'})}/>
                </label>
            </div>
            
            <div className="btn-wrapper">
                <button disabled={submitting} onClick={handleSubmit}>Register</button>
            </div>
        </div>
        
    </RegisterFormWrapper>
};

const RegisterFormWrapper = styled.div`
    .reg-form {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`;

export default RegisterForm;