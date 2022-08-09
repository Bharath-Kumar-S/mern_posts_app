import { FormEvent, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Register = () => {
    type User = {
        user: string
        password: string
        first_name: string
        last_name: string
        date_of_birth: string
        phone_number: number
        city: string
        zip_code: number
    }

    const [user, setUser] = useState<User | {}>({})

    const fetchUser = () => axios.post('http://localhost:5000/users', user)

    const {
    //     // isLoading, data, error, isError, refetch, isFetching, 
       refetch: queryCall } = useQuery(
        ["users"],
        fetchUser,
        {
            // cacheTime: 1000 * 60 * 5, // by default 5 mins
            // staleTime: 30 * 1000 // by default 0 secs
            // refetchOnMount: false // by default true
            // refetchOnWindowFocus: true // by default true
            // refetchInterval: 2000 // by default false
            // refetchIntervalInBackground: true // by default false
            enabled: false, // for refetch // for click refetch
        }
    );

    const handleChange = (event: any) => {
        setUser((prev) => {
            return { ...prev, [event.target.name]: event.target.value }
        })
    }

    const handeSubmit = (e: FormEvent<HTMLFormElement>) => {
        queryCall();
        e.preventDefault()
        console.log(user)
    }

    return (
        <form onSubmit={(e) => handeSubmit(e)}>
            <div className='center'>
                <h3>Register</h3>
                <label>User</label>
                <input placeholder='user' type={'text'} name='user' onChange={handleChange} />
                <label>Password</label>
                <input placeholder='password' type={'password'} name='password' onChange={handleChange} />
                <label>First Name</label>
                <input placeholder='first name' type={'text'} name='first_name' onChange={handleChange} />
                <label>Last Name</label>
                <input placeholder='last name' type={'text'} name='last_name' onChange={handleChange} />
                <label>Date of Birth</label>
                <input placeholder='date of birth' type={'date'} name='date_of_birth' onChange={handleChange} />
                <label>Phone Number</label>
                <input placeholder='phone number' type={'number'} name='phone_number' onChange={handleChange} />
                <label>City</label>
                <input placeholder='city' type={'text'} name='city' onChange={handleChange} />
                <label>Zip Code</label>
                <input placeholder='city code' type={'number'} name='zip_code' onChange={handleChange} />
                <button>Register</button>
            </div>
        </form>
    )
}

export default Register
