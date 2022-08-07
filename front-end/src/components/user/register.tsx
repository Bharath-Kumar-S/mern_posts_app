import React from 'react';
import fetch from 'node-fetch';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const Register = () => {

    const fetchUser = () => axios.post('http://localhost:5000/users')

    const { isLoading, data, error, isError, refetch, isFetching } = useQuery(
        ["users"],
        fetchUser,
        {
            // cacheTime: 1000 * 60 * 5, // by default 5 mins
            // staleTime: 30 * 1000 // by default 0 secs
            // refetchOnMount: false // by default true
            // refetchOnWindowFocus: true // by default true
            // refetchInterval: 2000 // by default false
            // refetchIntervalInBackground: true // by default false
            // enabled: false, // for refetch // for click refetch
        }
    );

    const handeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={(e)=>handeSubmit(e)}>
            <div className='center'>
                <h3>Register</h3>
                <label>User</label>
                <input placeholder='user' />
                <label>Password</label>
                <input placeholder='password' type='password'/>
                <label>First Name</label>
                <input placeholder='first name' />
                <label>Last Name</label>
                <input placeholder='last name' />
                <label>Last Name</label>
                <input placeholder='last name' />
                <label>Phone Number</label>
                <input placeholder='phone number' />
                <label>City</label>
                <input placeholder='city' />
                <label>Zip Code</label>
                <input placeholder='city code' />
                <button>Register</button>
            </div>
        </form>
    )
}

export default Register

function fetchUser(arg0: string, fetchUser: any, arg2: {}): { isLoading: any; data: any; error: any; isError: any; refetch: any; isFetching: any; } {
    throw new Error('Function not implemented.');
}
