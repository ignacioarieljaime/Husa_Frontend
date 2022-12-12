import axios from 'axios'
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
		let errorComponent = JSON.stringify(error.stack)
			?.split('at ')[1]
			?.split(' (')[0]

		this.saveError(`${error.message} in the  ${errorComponent} component`)
	}

	saveError = async _error => {
		console.log(_error)
		let message = {
			message: _error,
			route: window.location.href,
			status: 0
		}
		try {
			let response = await axios.post(
				`${process.env.NEXT_PUBLIC_CXM_API_ROUTE}/addError`,
				message
			)
		} catch (error) {
			console.log(error)
		}
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
