import React from 'react'

const Login = () => {
  return (
      <form>
          <div className='center'>
              <p>Login</p>
              <label>User</label>
              <input placeholder='user' />
              <label>Password</label>
              <input placeholder='password' />
              <button>Register</button>
          </div>
      </form>
  )
}

export default Login