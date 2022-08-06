import React from 'react'

const Register = () => {

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