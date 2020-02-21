import React, { Component } from 'react'
import { connect } from 'react-redux'

import { signUpStart } from '../../redux/user/user.actions'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { SignUpContainer, SignUpTitle, SignUpSubtitle } from './sign-up.styles.jsx'

export class SignUp extends Component {

  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  handleSubmit = async e => {
    e.preventDefault()
    
    const { signUpStart } = this.props
    const { displayName, email, password, confirmPassword } = this.state

    if (password !== confirmPassword)  {
     alert("Password don't match")
     return
    }

    signUpStart({ displayName, email, password })
  }

  handleOnChange = e => {
    const { name, value } = e.target
    this.setState({ [name] : value })
  }

  render() {

    const { displayName, email, password, confirmPassword } = this.state
    return (
      <SignUpContainer>
        <SignUpTitle className='title'>I do not have a account</SignUpTitle>
        <SignUpSubtitle style={{ }}>Sign up with your email and password</SignUpSubtitle> 
        <form onSubmit={this.handleSubmit} className='sign-up-form'>
          <label><h5>Dispaly Name</h5></label>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleOnChange}
            label='Dispaly Name'
            required
          />
          <label><h5>Email</h5></label>
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleOnChange}
            label='Email'
            required
          />
          <label><h5>Password</h5></label>
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleOnChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleOnChange}
            label='Confirm password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </SignUpContainer>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})


export default connect(null, mapDispatchToProps)(SignUp)
