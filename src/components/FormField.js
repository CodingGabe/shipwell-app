import React from 'react';
import PropTypes from 'prop-types';

// Created a component for the form field so that it may take the users input
// have a placeholder, use built in Update method, and throw and error message if needed
const FormField = ({ value, placeholder, update, error, label }) => {
    const onChange = (e) => update(e.target.value);
    return (
        <div className="container">
            <label>
                {label}
            </label>
            <input value={value} placeholder={placeholder} onChange={onChange} type="text" />
            <div className="error">{error}</div>
        </div>
    );
};

// Checks types to prevent bugs and ensures that the field is updated
FormField.propTypes = {
	value: PropTypes.string,
	placeholder: PropTypes.string,
	update: PropTypes.func.isRequired,
	error: PropTypes.string,
	label: PropTypes.string,
};

export default FormField;