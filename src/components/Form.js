import React from 'react';
import PropTypes from 'prop-types';
import FormField from './FormField';
import SubmitBtn from './SubmitBtn';
import useForm from 'react-hook-form';

const Form = () => {
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => { console.log(data) }

    console.log(watch('howzit'))

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormField
                label={'Stop Name'}
            />
            <FormField
                label={'Stop Address'}
            />
            <SubmitBtn buttonText="Add Stop"/>
        </form>
    )
}

export default Form;