import React, { Component } from 'react'

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundary.styles'

class ErrorBoundary extends Component {
  
  state = {
    hasError: false 
  }

  static getDerivedStateFromError(error) {
    // process the error
    return { hasError: true }
  }
  // catch the error
  componentDidCatch(error) {
    console.log(error)
  }

  render() {
    if(this.state.hasError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/A040Lxr.png'  />
          <ErrorImageText> Sorry this page is broken </ErrorImageText>
        </ErrorImageOverlay>
      )
    }
      
    return this.props.children
  }
}

export default ErrorBoundary