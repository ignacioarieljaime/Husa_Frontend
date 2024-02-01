import React, { useEffect, useReducer, useRef, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { toast } from 'react-toastify'
import XIcon from 'components/icons/XIcon'
import axios from 'axios'
import useOutsideClick from 'hooks/useOutsideClick'

const SignUpPopUp = ({ data }) => {
	const { structure } = data
	const [content, setContent] = useState(null)
	const [hasClosed, setHasClosed] = useState(false)
	const [loading, setLoading] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const [email, setEmail] = useState('')

	const popupRef = useRef()
	const outSide = useOutsideClick(popupRef)

	const timeoutNumber = Number(content?.timeout?.value * 1000)
	const scrollNumber = Number(content?.distance?.value)

	useEffect(() => {
		setContent(structure)
	}, [])

	async function submitHandler(e) {
		e.preventDefault()
		console.log({ EMAIL: email })

		setLoading(true)
		try {
			let response = await axios.post(
				// `${process.env.NEXT_PUBLIC_CRM_API_ROUTE}/${process.env.NEWS_SIGNUP_FORM_TOKEN}`,
				`${process.env.NEXT_PUBLIC_CRM_API_ROUTE}/F276979a74645p`,
				{
					email
				}
			)

			if (response.status === 200 && response.data?.userForm) {
				toast.success('Submission is successful')
				setEmail('')
				setHasClosed(true)
				setIsOpen(false)
			} else {
				toast.error('Submission Failed')
			}
		} catch (error) {
			toast.error('Submission Failed')
			console.log(error)
		} finally {
			setLoading(false)
		}
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
			<div
				className='signup_popup'
				onClick={() => {
					if (outSide) {
						closeHandler()
					}
				}}>
				<div className='signup_popup___container' ref={popupRef}>
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
										{''}
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
