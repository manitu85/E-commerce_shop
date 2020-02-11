import React, { Component } from 'react'
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
        <h2>I already have an account</h2>
        <span>Sign in with your email</span>

        <form onSubmit={this.handleSubmit} >
          <label>Email</label>
          <FormInput 
            type='email' 
            name='email'
            value={this.state.email}
            handleChange={this.handleChange} 
            label='email'
            required
            />
          <label>Password</label>
          <FormInput 
            type='password' 
            name='password'
            value={this.state.password}
            handleChange={this.handleChange} 
            label='password'
            required
            />

          <CustomButton type='submit'>Sign in</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn
