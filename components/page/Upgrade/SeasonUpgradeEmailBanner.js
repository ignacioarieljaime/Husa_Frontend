import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { toast } from 'react-toastify'

const SeasonUpgradeEmailBanner = ({ data }) => {
	const [content, setContent] = useState(null)
	const [email, setEmail] = useState('')
	const [checkbox, setCheckbox] = useState(false)
	const [loading, setLoading] = useState(false)
	const router = useRouter()
	useEffect(() => {
		setContent(data?.structure)
		if (router.asPath.includes(data?.name + data?.id)) {
			setTimeout(() => {
				ref.current.scrollIntoView()
			}, 1000)
		}
	}, [])

	async function submit(e) {
		e.preventDefault()
		setLoading(true)
		try {
			let response = await axios.post(
				`${process.env.NEXT_PUBLIC_CRM_API_ROUTE}/${process.env.NEXT_PUBLIC_SEASON_UPGRADE_TOKEN}`,
				{ email: email }
			)

			if (response.status === 200) {
				toast.success('successful')
				setEmail('')
			} else {
				toast.error('is not true')
			}
			setLoading(false)
		} catch (error) {
			setLoading(false)
			toast.error('Submission Failed')
			console.log(error)
		}
	}

	return (
		<section>
			<div id={data?.name + data?.id} className='season_upgrade_email_banner'>
				<div className='content'>
					<div className='text_content'>
						<p className='pretitle'>{content?.subtitle?.value}</p>
						<h3
							className='title'
							dangerouslySetInnerHTML={{
								__html: content?.title?.value
							}}></h3>
						<p
							className='text'
							dangerouslySetInnerHTML={{
								__html: content?.text?.value
							}}></p>
					</div>
					<form onSubmit={e => submit(e)} className='form_content'>
						<input
							value={email}
							onChange={e => setEmail(e.target.value)}
							placeholder='Enter Email Address'
							className='input'
							required
							type='email'
						/>
						<div className='checkbox'>
							<button type='button' onClick={() => setCheckbox(prev => !prev)}>
								{checkbox && (
									<FontAwesomeIcon
										icon={faCheck}
										size='xs'
										className='text-white'
									/>
								)}
							</button>
							<p>
								I have read and understand the{' '}
								{content?.link?.value && (
									<Link href={content?.link?.value}>
										<a> Privacy Policy.</a>
									</Link>
								)}
							</p>
						</div>
						<button
							disabled={!checkbox}
							className='n-btn medium danger-upgrade full_btn_md'>
							Sign Up
							{loading && <Spinner className={'ms-2'} size={'sm'} />}
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default SeasonUpgradeEmailBanner
