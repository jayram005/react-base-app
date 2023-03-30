import React, { Component } from 'react'
import Typography from '@mui/material/Typography'
import Fade from '@mui/material/Fade'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    console.log(error)
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props
    if (hasError) {
      return (
        <div className="flex flex-col flex-1 items-center justify-center p-16">
          <div className="max-w-512 text-center mt-60">
            <Fade in={true} timeout={100}>
              <Typography
                variant="h2"
                color="inherit"
                className="font-medium mb-16"
              >
                An error Occurred
              </Typography>
            </Fade>

            <Fade in={true} timeout={100}>
              <Typography variant="h5" color="textSecondary" className="mb-16">
                Please try again later. If problem persists please contact
                Opensalon PRO support.
              </Typography>
            </Fade>
          </div>
        </div>
      )
    }
    return children
  }
}

export default ErrorBoundary
