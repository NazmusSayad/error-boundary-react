import React from 'react'

interface ErrorBoundary {
  props: any
  state: {
    error: null | any
    errorInfo: null | any
  }
  setState: any
}

class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    })
  }

  render() {
    const { children, element: ErrorComponent } = this.props

    if (!this.state.error) return children

    if (ErrorComponent instanceof Function) {
      return React.createElement(ErrorComponent, {
        error: this.state.error,
        errorInfo: this.state.errorInfo,
      })
    }

    return ErrorComponent
  }
}

export default ErrorBoundary
