import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useReducer, useRef, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { toast } from 'react-toastify'

const NewsRoomAnnouncementsForm = ({ data }) => {
	const { structure } = data
	// const [content, setContent] = useState(null)
	const [loading, setLoading] = useState(false)
	const [formBody, dispatch] = useReducer(
		(state, updatedState) => ({
			...state,
			...updatedState
		}),
		{
			first_name: '',
			last_name: '',
			company: '',
			email: ''
		}
	)
	const router = useRouter()
	const ref = useRef()

	useEffect(() => {
		// setContent(data?.structure)
		if (router.asPath.includes(data?.name + data?.id)) {
			setTimeout(() => {
				ref.current.scrollIntoView()
			}, 1000)
		}
	}, [])

	function formHandler(_key, _value) {
		dispatch({ [_key]: _value })
	}

	async function submitHandler(e) {
		e.preventDefault()
		setLoading(true)
		try {
			let response = await axios.post(
				`${process.env.NEXT_PUBLIC_CRM_API_ROUTE}/${process.env.NEXT_PUBLIC_NEWSROOM_ANNOUNCEMENTS_TOKEN}`,
				formBody
			)

			if (response.status === 200 && response.data?.userForm) {
				toast.success('Submission is successful')
				dispatch({
					first_name: '',
					last_name: '',
					company: '',
					email: ''
				})
			} else {
				setLoading(false)
				toast.error('Submission Failed')
			}
			setLoading(false)
		} catch (error) {
			setLoading(false)
			toast.error('Submission Failed')
			console.log(error)
		}
	}

	return (
		<section id={data?.name + data?.id} ref={ref}>
			<div className='news_announcements_form'>
				<h6
					className='news_announcements_form___title'
					dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></h6>
				<form
					className='news_announcements_form___form'
					onSubmit={submitHandler}>
					<div className='news_announcements_form___form___body'>
						<div className='news_announcements_form___form___body___field'>
							<input
								name='first_name'
								type='text'
								placeholder='First name'
								required
								value={formBody.first_name}
								onChange={e => formHandler(e.target.name, e.target.value)}
							/>
						</div>
						<div className='news_announcements_form___form___body___field'>
							<input
								name='last_name'
								type='text'
								placeholder='Last Name'
								required
								value={formBody.last_name}
								onChange={e => formHandler(e.target.name, e.target.value)}
							/>
						</div>
						<div className='news_announcements_form___form___body___field'>
							<input
								name='company'
								type='text'
								placeholder='Company'
								required
								value={formBody.company}
								onChange={e => formHandler(e.target.name, e.target.value)}
							/>
						</div>
						<div className='news_announcements_form___form___body___field'>
							<input
								name='email'
								type='email'
								placeholder='Email'
								required
								value={formBody.email}
								onChange={e => formHandler(e.target.name, e.target.value)}
							/>
						</div>
					</div>
					<button
						disabled={loading}
						className='news_announcements_form___form___submit_btn'>
						{loading ? (
							<Spinner color='#000' size='sm' />
						) : (
							<span>{structure?.button_title?.value}</span>
						)}
					</button>
				</form>
			</div>
		</section>
	)
}

export default NewsRoomAnnouncementsForm
