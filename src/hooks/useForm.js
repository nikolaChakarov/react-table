import { useState, useEffect } from "react";

const useForm = (props) => {
    const { init, validation, onSubmit } = props;
    
    const [values, setValues] = useState(init);
    const [errors, setErrors] = useState({});
    const [blured, setBlured] = useState({});
    const [submitting, setSubmitting] = useState(false);
    
    const handleChange = (e) => {
        if (blured[e.target.name]) {
            setBlured(prev => ({
                ...prev,
                [e.target.name]: false
            }))
        }
        
        setValues(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    
    const handleCheckboxChange = (e, props) => {
        const { field } = props;
        
        setValues(prev => {
            const fields = prev[field];
            
        })
    }
    
    const handleBlured = (e) => {
        setBlured(prev => ({
            ...prev,
            [e.target.name]: true
        }))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const isError = Object.values(errors).length;
        console.log('isError ', isError);
        if (isError) {
            setErrors(validation(values));
            setBlured(validation(values));
            return;
        }
        
        onSubmit(values);
        setSubmitting(true);
    }
    
    useEffect(() => {
        setErrors(validation(values));
    }, [ values ])
    
    return { values, errors, blured, submitting, setSubmitting, handleChange, handleCheckboxChange, handleBlured, handleSubmit };
};

export default useForm;