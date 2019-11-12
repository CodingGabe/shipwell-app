import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import FormField from './FormField';
import SubmitBtn from './SubmitBtn';
import useForm from 'react-hook-form';

const Form = () => {

    const [stops, setStops] = useState([])
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')

    const addStop = (e) => {
        e.preventDefault()
        setStops([
            ...stops,
            { name, address }
        ])
        setName('')
        setAddress('')
    }

    const removeNote = (name) => {
        setNotes(stops.filter((stop) => stop.name !== name ))
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
        {stops.map(stop => (
          <div key={stop.name}>
            <h3>{stop.name}</h3>
            <p>{stop.address}</p>
            <button onClick={() => removeNote(stop.name)}>Remove Stop</button>
          </div>
        ))}
      </div>
    );
}

export default Form;