import React, { useState } from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

import { 
  SignInContainer, 
  SignInTitle, 
  SignInSubtitle, 
  ButtonsContainer 
} from './sign-in.styles'

const SignIn = ({ googleSignInStart, emailSignInStart }) => {

const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: ''
  })

  // Destructuring rhe state 
  const { email, password } = userCredentials

  const handleSubmit = async e => {
    e.preventDefault()
    
    emailSignInStart(email, password)
  }

  const handleChange = e => {
    const { name, value } = e.target
    setUserCredentials({ ...userCredentials, [name] : value})
  } 

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <SignInSubtitle>Sign in with your email</SignInSubtitle>

      <form onSubmit={handleSubmit} >
        <label><h5>Email</h5></label>
        <FormInput 
          type='email' 
          name='email'
          value={email}
          handleChange={handleChange} 
          label='email'
          required
          />

        <label><h5>Password</h5></label>
        <FormInput 
          type='password' 
          name='password'
          value={password}
          handleChange={handleChange} 
          label='password'
          required
        />

        <ButtonsContainer>
          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton 
            type='button' 
            onClick={googleSignInStart} 
            isGoogleSignIn  
          >
            {' '} Sign in with Google {' '}
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})


export default connect(
  null, 
  mapDispatchToProps
)(SignIn)
