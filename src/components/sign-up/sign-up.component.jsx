import React, { Component } from 'react'

import { auth, createUserProfileDocument } from '../../firebase/firebase.init'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import './sign-up.styles.scss'



export class SignUp extends Component {

  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  handleSubmit = async e => {
    e.preventDefault()
    const { displayName, email, password, confirmPassword } = this.state

    if (password !== confirmPassword)  {
     alert("password don't match")
     return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, { displayName })
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })

    } catch (error) {
      console.log(error)
    }
  }

  handleOnChange = e => {
    const { name, value } = e.target
    this.setState({ [name] : value })
  }

  render() {

    const { displayName, email, password, confirmPassword } = this.state
    return (
      <div className='sign-up' >
        <h2 className='title'>I do not have a account</h2>
        <h4 style={{ color: '#7c7c7c', fontWeight: 300, marginBottom: '2rem' }}>Sign up with your email and password</h4>

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
      </div>
    )
  }
}

export default SignUp
