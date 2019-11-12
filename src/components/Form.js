import React, { useState, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
// import FormField from './FormField';
import SubmitBtn from './SubmitBtn';
import useForm from 'react-hook-form';

import stopReducer from '../reducers/stops';

const Form = () => {

    const [stops, dispatch] = useReducer(stopReducer, [])
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')

    const addStop = (e) => {
        e.preventDefault()
        dispatch({
            type: 'ADD_STOP',
            name,
            address
        })
        // setStops([
        //     ...stops,
        //     { name, address }
        // ])
        setName('')
        setAddress('')
    }

    // filters through name to see if it matches and if so, deletes name
    // so that it might not delete another stop name
    const removeStop = (name) => {
        dispatch({
            type: 'REMOVE_STOP',
            name
        })
        // setStops(stops.filter((stop) => stop.name !== name ))
    }

    // const { register, handleSubmit, errors } = useForm();

    // useEffect(() => {
	// 	setErrors({
	// 		name: validateName(name),
	// 		address: validateAddress(address),
    //     });
    //     // only run function when name and address changes
	// }, [name, address]);

    return (
      <div className="container">
        <form onSubmit={addStop}>
          <label>Stop Name:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <label>Stop Address:</label>
          <input value={address} onChange={(e) => setAddress(e.target.value)} />
          {/* react hook form error message for specific situations, name is required */}
          {/* {errors.stopName && errors.stopName.type === "required" && (<p>Stop Name required!</p>)} */}

          {/* <label>Stop Address:</label>
                <input name="stopAddress"/> */}
          {/* address must be at least 3 characters long to complete form */}
          {/* {errors.stopAddress && errors.stopAddress.type === "minLength" && (<p>Minimum length of 3 characters required!</p>)} */}

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

          <SubmitBtn buttonText="Add Stop" />
        </form>
        {/* loop through all of the stops added create a div that displays added info with a button to remove */}
        {stops.map(stop => (
          <div key={stop.name}>
            <h3>{stop.name}</h3>
            <p>{stop.address}</p>
            <button onClick={() => removeStop(stop.name)}>Remove Stop</button>
          </div>
        ))}
      </div>
    );
}

export default Form;