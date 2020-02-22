import React, { useState } from 'react'
import { connect } from 'react-redux'

import { signUpStart } from '../../redux/user/user.actions'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { SignUpContainer, SignUpTitle, SignUpSubtitle } from './sign-up.styles.jsx'


const SignUp = ({ signUpStart }) => {

  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const { displayName, email, password, confirmPassword } = userCredentials
  
  const handleSubmit = async e => {
    e.preventDefault()
    
    if (password !== confirmPassword)  {
     alert("Password don't match")
     return
    }

    signUpStart({ displayName, email, password })
  }

  const handleOnChange = e => {
    const { name, value } = e.target
    setUserCredentials({ ...userCredentials,  [name] : value })
  }

  return (
    <SignUpContainer>
      <SignUpTitle className='title'>I do not have a account</SignUpTitle>
      <SignUpSubtitle style={{ }}>Sign up with your email and password</SignUpSubtitle> 
      <form onSubmit={handleSubmit} className='sign-up-form'>
        <label><h5>Dispaly Name</h5></label>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleOnChange}
          label='Dispaly Name'
          required
        />

        <label><h5>Email</h5></label>
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleOnChange}
          label='Email'
          required
        />

        <label><h5>Password</h5></label>
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleOnChange}
          label='Password'
          required
        />

        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleOnChange}
          label='Confirm password'
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  )
}


const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})


export default connect(null, mapDispatchToProps)(SignUp)
