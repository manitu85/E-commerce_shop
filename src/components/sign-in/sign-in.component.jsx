import React, { Component } from 'react'

import { auth, signInWithGoogle } from '../../firebase/firebase.init'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { 
  SignInContainer, 
  SignInTitle, 
  SignInSubtitle, 
  ButtonsContainer 
} from './sign-in.styles'

export class SignIn extends Component {

  state = {
    email: '',
    password: ''
  }

  handleSubmit = async e => {
    e.preventDefault()
    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({
        email: '',
        password: ''
      })

    } catch(error) {
      console.log(error)
    }

  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name] : value })
  } 

  render() {
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <SignInSubtitle>Sign in with your email</SignInSubtitle>

        <form onSubmit={this.handleSubmit} >
          <label><h5>Email</h5></label>
          <FormInput 
            type='email' 
            name='email'
            value={this.state.email}
            handleChange={this.handleChange} 
            label='email'
            required
            />
          <label><h5>Password</h5></label>
          <FormInput 
            type='password' 
            name='password'
            value={this.state.password}
            handleChange={this.handleChange} 
            label='password'
            required
          />

          <ButtonsContainer>
            <CustomButton type='submit'>Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn  >
              {' '} Sign in with Google {' '}
            </CustomButton>
          </ButtonsContainer>

        </form>
      </SignInContainer>
    )
  }
}

export default SignIn
