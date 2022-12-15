import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faLinkedinIn,
	faTwitter,
	faFacebook
} from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify'
import {
	FacebookShareButton,
	TwitterShareButton,
	LinkedinShareButton
} from 'react-share'
function BlogDescriptionWithShare({ data: { structure } }) {
	const [location, setLocation] = useState('')
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


	useEffect(() => {
		setLocation(window.location.href)
	}, [])
	

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
				url={location}
				key={index}
				className='text-primary-dark px-2 mx-1'>
				<FontAwesomeIcon icon={icon} size={'xl'} />
			</Component>
		)
	}

	return (
		<section>
			<div className='blog_text_container py-md-20 my-20'>
				<article className='blog-article'>
					<h3>{structure?.title?.value}</h3>
					<div
						dangerouslySetInnerHTML={{
							__html: structure?.text?.value
						}}></div>
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
				</article>
			</div>
		</section>
	)
}

export default BlogDescriptionWithShare
