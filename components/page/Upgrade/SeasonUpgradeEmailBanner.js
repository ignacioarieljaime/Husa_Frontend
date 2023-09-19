import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const SeasonUpgradeEmailBanner = ({ data }) => {
	const [content, setContent] = useState(null)
	const [email, setEmail] = useState('')
	const [checkbox, setCheckbox] = useState(false)
	useEffect(() => {
		setContent(data?.structure)
	}, [])
	return (
		<section>
			<div id={data?.name + data?.id} className='season_upgrade_email_banner'>
				<div className='content'>
					<div className='text_content'>
						<p className='pretitle'>don’t miss out</p>
						<h3 className='title'>sign up for upgrade alerts</h3>
						<p className='text'>
							Get all the up to date Upgrade Season Deal updates as they drop.
						</p>
					</div>
					<form className='form_content'>
						<input
							value={email}
							onChange={e => setEmail(e.target.value)}
							placeholder='Enter Email Address'
							className='input'
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
								<Link href={'/'}>
									<a> Privacy Policy.</a>
								</Link>
							</p>
						</div>
						<button className='n-btn medium danger-upgrade full_btn_md'>
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default SeasonUpgradeEmailBanner
