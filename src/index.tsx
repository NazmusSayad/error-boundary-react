import react from 'react'

interface ErrorBoundary {
  props: any
  state: any
  setState: any
}

class ErrorBoundary extends react.Component {
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
    const { children, element } = this.props

    if (!react.isValidElement(element)) {
      throw new Error("Please fill 'element' prop with a valid component.")
    }

    if (this.state.error) return element
    return children
  }
}

export default ErrorBoundary
