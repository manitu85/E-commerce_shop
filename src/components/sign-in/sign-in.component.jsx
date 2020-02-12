import React, { Component } from 'react'
import { signInWithGoogle } from '../../firebase/firebase.init';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import './sign-in.style.scss'


export class SignIn extends Component {

  state = {
    email: '',
    password: ''
  }

  handleSubmit = e => {
    e.preventDefault()

    this.setState({
      email: '',
      password: ''
    })
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name] : value
    })
  } 

  render() {
    return (
      <div className='sign-in' >
        <h2 className='title'>I already have an account</h2>
        <h4 style={{ color: '#7c7c7c',fontWeight: 300, marginBottom: '2rem'}} >Sign in with your email</h4>

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

          <div className='buttons'>
            <CustomButton type='submit'>Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn  >
              {' '} Sign in with Google {' '}
            </CustomButton>
          </div>

        </form>
      </div>
    )
  }
}

export default SignIn
