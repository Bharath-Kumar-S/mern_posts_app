import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    const handeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={(e) => handeSubmit(e)}>
          <div className='center'>
              <h3>Login</h3>
              <label>User</label>
              <input placeholder='user' />
              <label>Password</label>
              <input placeholder='password' type='password'/>
              <Link to={''}>forgot password</Link>
              <button>Login</button>
          </div>
      </form>
  )
}

export default Login