import React, { useEffect, useReducer, useRef, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { toast } from 'react-toastify'
import XIcon from 'components/icons/XIcon'

const SignUpPopUp = ({ data }) => {
	const { structure } = data
	const [content, setContent] = useState(null)
	const [hasClosed, setHasClosed] = useState(false)
	const [loading, setLoading] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const [email, setEmail] = useState('')

	const timeoutNumber = Number(content?.timeout?.value * 1000)
	const scrollNumber = Number(content?.distance?.value)

	useEffect(() => {
		setContent(structure)
	}, [])

	async function submitHandler(e) {
		e.preventDefault()
		console.log({ EMAIL: email })
		// NOTE FROM BEN:
		// I dont know how our API works so this code will need to be modified by you
		// The email needs to get added to the HiSense Lead list in the CXM

		// setLoading(true)
		// try {
		// 	let response = await axios.post(
		// 		`${process.env.I_DONT_KNOW_THE_API_ENVS}/${process.env.I_DONT_KNOW_THE_API_TOKENS}`,
		// 		formBody
		// 	)

		// 	if (response.status === 200 && response.data?.userForm) {
		// 		toast.success('Submission is successful')
		// 		dispatch({
		// 			email: ''
		// 		})
		// 	} else {
		// 		setLoading(false)
		// 		toast.error('Submission Failed')
		// 	}
		// 	setLoading(false)
		// } catch (error) {
		// 	setLoading(false)
		// 	toast.error('Submission Failed')
		// 	console.log(error)
		// }

		// Closes modal
		setHasClosed(true)
		setIsOpen(false)
	}

	const handleScroll = () => {
		if (typeof window !== 'undefined' && typeof scrollNumber === 'number') {
			const newScrollY = Math.round(window.scrollY)

			if (newScrollY >= scrollNumber && !isOpen && !hasClosed) {
				setIsOpen(true)
			}
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [scrollNumber])

	if (timeoutNumber)
		setTimeout(() => {
			if (!hasClosed && !isOpen) setIsOpen(true)
		}, timeoutNumber)

	const closeHandler = () => {
		if (isOpen) setIsOpen(false)
		if (!hasClosed) setHasClosed(true)
	}

	return (
		isOpen &&
		!hasClosed && (
			<div className='signup_popup'>
				<div className='signup_popup___container'>
					<div className='signup_popup___container___content'>
						<div className='signup_popup___container___content___image'>
							<img
								src={content?.image?.src}
								alt={content?.image?.alt}
								className='background'
							/>
						</div>
						<div className='signup_popup___container___content___text'>
							<h5 className='signup_popup___container___content___text___title'>
								{content?.title?.value}
							</h5>

							<form
								className='signup_popup___container___content___text___form'
								onSubmit={submitHandler}>
								<div className='signup_popup___container___content___text___form___field'>
									<input
										name='email'
										type='email'
										placeholder='Email Address'
										required
										value={email}
										onChange={e => setEmail(e.target.value)}
									/>
								</div>

								<div className='signup_popup___container___content___text___form___buttons'>
									<button
										type='submit'
										disabled={loading}
										className='signup_popup___container___content___text___form___buttons___submit_btn'>
										{loading ? (
											<Spinner color='#000' size='sm' />
										) : (
											<span>Subscribe</span>
										)}
									</button>

									<button
										button='button'
										className='signup_popup___container___content___text___form___buttons___cancel_btn'
										onClick={() => closeHandler()}>
										<span>No Thanks</span>
									</button>
								</div>
							</form>
						</div>
					</div>

					<button
						className='signup_popup___container___close_btn'
						onClick={() => closeHandler()}>
						<span>
							<XIcon />
						</span>
					</button>
				</div>
			</div>
		)
	)
}

export default SignUpPopUp
