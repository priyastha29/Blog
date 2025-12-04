import React from 'react'

const SignUp = () => {
  return (
    <div className='form'>
      <form action="">
        <label htmlFor="name">Name:</label><br />
        <input type="text" name="name" id="name" placeholder='Enter Your Name' /><br /><br />
        <label htmlFor="userName">UserName</label><br />
        <input type="text"name='userName'id='name' /><br /><br />
        <label htmlFor="email">Email:</label><br />
        <input type="email"name='email' /><br /><br />
        <label htmlFor="password">Password</label><br />
        <input type="password"name='password'placeholder='Enter your password' /><br /><br />
      <br />
      <button type='submit'>Signup</button>
      </form>
      

    </div>
  )
}

export default SignUp
