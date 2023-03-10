import React, { useReducer } from 'react'
import './SignUp.css'
import FormInput from './FormInput';

function Signup(props) {
    const initialVal = {
        name: '',
        email: '',
        password: '',
        date: '',
        gender: '',
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'textInput':
                return { ...state, [action.payload.key]: action.payload.value };
            case 'reset':
                return initialVal
            default:
                throw new Error(`Unknown action type: ${action.type}`);
        }
    };
    const [state, dispatch] = useReducer(reducer, initialVal);

    const submit = (event) => {
        event.preventDefault();
        const data = {
            "Name": state.name,
            "Email": state.email,
            "Gender": state.gender,
            "DOB": state.date,
            "password": state.password
        }
        const requestData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch(`http://127.0.0.1:8000/api/student/register`, requestData)
            .then(response => response.json())
            .then(data => { console.log(data); })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <div className='signupCal'>
            <div className='signupSubcal'>
                <h1 className='loginTitle signup-space'>Signup Form</h1>
                <form onSubmit={submit}>
                    <div className='signupEleCal'>
                        <FormInput state={state.name} onDispatch={dispatch} type={"name"} />
                        <FormInput state={state.email} onDispatch={dispatch} type={"email"} />
                    </div>
                    <div className='signupEleCal'>
                        <FormInput state={state.password} onDispatch={dispatch} type={"password"} />
                        <FormInput state={state.date} onDispatch={dispatch} type={"date"} />
                    </div>
                    <FormInput state={state.gender} onDispatch={dispatch} type={"gender"} />
                    {/* <FormInput state={state.profileImg} onDispatch={dispatch} type={"file"} /> */}
                    <button className='signup-btn'>Signup</button>
                </form>
            </div>
        </div>
    )
}


export default Signup