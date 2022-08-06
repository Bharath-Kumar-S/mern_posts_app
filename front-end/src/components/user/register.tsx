import React from 'react'

const Register = () => {

    const handeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={(e)=>handeSubmit(e)}>
            <div className='center'>
                <p>Register</p>
                <label>User</label>
                <input placeholder='user' />
                <label>Password</label>
                <input placeholder='password' />
                <button>Register</button>
            </div>
        </form>
    )
}

export default Register