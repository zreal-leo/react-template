import React from 'react'

class ErrorCatch extends React.Component<{}, { error: boolean }> {
  constructor(props: {}) {
    super(props)
    this.state = {
      error: false
    }
  }

  static getDerivedStateFromError() {
    return { error: true }
  }

  componentDidCatch(error: any, errorInfo: any) {
    // error handler
  }

  render() {
    if (!this.state.error) {
      return this.props.children
    }
    return <p>something wrong</p>
  }
}

export default ErrorCatch
