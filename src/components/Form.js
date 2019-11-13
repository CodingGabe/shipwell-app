import React, { useState, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
// import FormField from './FormField';
import SubmitBtn from './SubmitBtn';
// import useForm from 'react-hook-form';
import axios from 'axios';

import stopReducer from '../reducers/stops';

const Form = () => {

    const [stops, dispatch] = useReducer(stopReducer, [])
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    // const [errors, setErrors] = useState({ name: '', address: '' });
    // const [showErrors, setShowErrors] = useState(false);

    const addStop = (e) => {
        e.preventDefault()
        // sets errors to true after submission
        // setShowErrors(true);
        // if (hasErrors(errors)) return false;
        // try {
        //     const validAddress = await getValidAddress(address);
        //     onSubmit(name, validAddress);
        //     if (clearForm) {
        //         setName('');
        //         setAddress('');
        //         setShowErrors(false);
        //     }
        // } catch (err) {
        //     // console.log(err);
        //     setErrors({ ...errors, address: 'Please enter a valid address!' });
        //     return false;
        // }

        dispatch({
            type: 'ADD_STOP',
            name,
            address
        })
        setName('');
        setAddress('');
        // setStops([
        //     ...stops,
        //     { name, address }
        // ])
        
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
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Dunder Mifflin"
          />
          <label>Stop Address:</label>
          <input
            value={address}
            onChange={e => setAddress(e.target.value)}
            placeholder="1725 Slough Avenue, Scranton, PA"
          />
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
          <section key={stop.name} className="itenerary">
            <div className="stop-wrapper">
                <h3>{stop.name}</h3>
                <p>{stop.address}</p>
            </div>
            <button onClick={() => removeStop(stop.name)} className="remove-btn">Remove Stop</button>
          </section>
        ))}
      </div>
    );
}

// Validates that a name is entered
// const validateName = (name) => (name.trim() === '' ? 'Stop name required 😎' : '');
// // Validates if there is at least 3 character for address
// const validateAddress = (address) => {
// 	if (address.trim() === '') return 'Address required! 🔥 ';
// 	else if (address.trim().length < 3) return 'Address must be at least 3 characters long!'; // checks if address is under 3 char's
// 	return '';
// };

// after a ton of research I decided to use Axios to async and await data from Shipwell's API
// its sublime, fast and perfect for making rest api calls
const getValidAddress = async (address) => {
    let res = await axios.post('https://dev-api.shipwell.com/v2/locations/addresses/validate/', {
        formatted_address: address,
    });
    console.log('${formatted_address}');
    return res.data.geocoded_address.formatted_address;
};

export default Form;