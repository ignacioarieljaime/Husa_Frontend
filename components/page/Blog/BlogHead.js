import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faLinkedinIn,
	faTwitter,
	faFacebook
} from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Link from 'next/link'
import { toast } from 'react-toastify'
import {
	FacebookShareButton,
	TwitterShareButton,
	LinkedinShareButton
} from 'react-share'

function BlogHead({ data: { structure } }) {
	const socialMedia = {
		link: {
			button: <button></button>,
			icon: faLink
		},
		linkedin: {
			button: LinkedinShareButton,
			icon: faLinkedinIn
		},
		facebook: {
			button: FacebookShareButton,
			icon: faFacebook
		},
		twitter: {
			button: TwitterShareButton,
			icon: faTwitter
		}
	}

	const copyUrl = () => {
		toast.success('Link copied successfully')
		navigator.clipboard.writeText(window.location.href)
	}

	const buttonGenerator = (Component, icon, index) => {
		if (icon === faLink)
			return (
				<button
					key={index}
					className='text-primary-dark bg-transparent border-0 px-2 mx-1'
					onClick={copyUrl}>
					<FontAwesomeIcon icon={icon} size={'xl'} />
				</button>
			)
		return (
			<Component
				url={window.location.href}
				key={index}
				className='text-primary-dark px-2 mx-1'>
				<FontAwesomeIcon icon={icon} size={'xl'} />
			</Component>
		)
	}

	return (
		<section>
			<div className='blog-header overflow-hidden mt-20'>
				<div className='px-3 mb-13'>
					<Link
						href={structure?.tagLink?.value ? structure?.tagLink?.value : '/'}>
						<a className='text-primary-dark fs-5 fw-normal mb-10 d-block text-decoration-none'>
							{structure?.tagLink?.title}
						</a>
					</Link>
					<div
						className='header-text header-gradient-text mb-12'
						dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></div>
					<span>{structure?.sharingTitle?.value}</span>
					<div className='row mt-7'>
						{structure?.list?.value.map((item, index) =>
							buttonGenerator(
								socialMedia[item?.socialMedia?.value].button,
								socialMedia[item?.socialMedia?.value].icon,
								index
							)
						)}
					</div>
				</div>
			</div>
		</section>
	)
}

export default BlogHead
