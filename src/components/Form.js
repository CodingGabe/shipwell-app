import React from 'react';
import PropTypes from 'prop-types';
// import FormField from './FormField';
import SubmitBtn from './SubmitBtn';
import useForm from 'react-hook-form';

const Form = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => { console.log(data) };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <label>Stop Name:</label> 
            <input name="stopName" ref={register({ required:true })} />
            {/* react hook form error message for specific situations, name is required */}
            {errors.stopName && errors.stopName.type === "required" && (<p>Stop Name required!</p>)}

            <label>Stop Address:</label>
            <input name="stopAddress" ref={register({ required:true, minLength: 3 })} />
            {/* address must be at least 3 characters long to complete form */}
            {errors.stopAddress && errors.stopAddress.type === "minLength" && (<p>Minimum length of 3 characters required!</p>)}

            {/* <FormField
                name={'stopName'}
                label={'Stop Name'}
                ref={register({ required: true, minLength: 3 })}
            />
            <FormField
                name={'stopAddress'}
                label={'Stop Address'}
                ref={register({ required: true })}
            /> */}

            <SubmitBtn buttonText="Add Stop"/>
        </form>
    )
}

export default Form;