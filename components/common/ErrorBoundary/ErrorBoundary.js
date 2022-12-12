import axios from 'axios'
import Logo from 'components/icons/Logo'
import { Component } from 'react'
import {
	MouseParallaxChild,
	MouseParallaxContainer
} from 'react-parallax-mouse'
import CustomImage from '../CustomImage'

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
				<MouseParallaxContainer globalFactorX={1} globalFactorY={1}>
					<div className='error_page'>
						<div className='image_container'>
							<CustomImage
								src='https://assets.hisense-usa.com/resources/themes/default/images/products/lg9/section-7-daylight.jpg'
								alt='background'
								wrapperWidth={'100%'}
								wrapperHeight={'100%'}
							/>
							<div className='backdrop'></div>
						</div>
						<div className='content'>
							<MouseParallaxChild
								factorX={0.015}
								factorY={0.015}
								resetOnLeave={true}>
								<div className='mb-20'>
									<Logo width={'250'} height={'50'} />
								</div>
								<h2 className='fs-3x lh-base mb-15'>
									Oops!
									<br />
									We're sorry
								</h2>
								<p className='fs-8 fs-md-5'>
									Our website is under construction, please be patient.
								</p>
							</MouseParallaxChild>
						</div>
					</div>
				</MouseParallaxContainer>
			)
		}
		// Return children components in case of no error
		return this.props.children
	}
}

export default ErrorBoundary
