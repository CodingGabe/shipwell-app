import React from 'react';
import PropTypes from 'prop-types';
import FormField from './FormField';

const Form = () => {
    return (
        <form>
            <FormField
                label={'Stop Name'}
            />
            {/* <SubmitBtn /> */}
        </form>
    )
}

export default Form;