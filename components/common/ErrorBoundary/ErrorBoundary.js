import { Component } from 'react'

class ErrorBoundary extends Component {
	constructor(props) {
		super(props)

		// Define a state variable to track whether is an error or not
		this.state = { hasError: false }
	}
	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI

		return { hasError: true }
	}
	componentDidCatch(error, errorInfo) {
		// You can use your own error logging service here
		console.log({ error, errorInfo })
	}
	render() {
		// Check if the error is thrown
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return (
				<div class='main-error-page'>
					<h1 class='error-title'>Woops! Something went wrong :(</h1>
					<h2 class='error-subtitle'>
						Have you tried turning it off and on again?
					</h2>
				</div>
			)
		}

		// Return children components in case of no error

		return this.props.children
	}
}

export default ErrorBoundary
