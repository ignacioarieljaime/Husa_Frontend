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

function BlogHead({ data: { structure } }) {
	const icons = {
		link: faLink,
		linkedin: faLinkedinIn,
		facebook: faFacebook,
		twitter: faTwitter
	}

	const copyUrl = () => {
		toast.success('Link copied successfully')
		navigator.clipboard.writeText(window.location.href)
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
							item?.socialMedia?.value !== 'link' ? (
								<a
									href={item?.link?.value}
									key={index}
									className='text-primary-dark'>
									<FontAwesomeIcon
										icon={icons[item?.socialMedia?.value]}
										size={'xl'}
									/>
								</a>
							) : (
								<button
									onClick={copyUrl}
									key={index}
									className='text-primary-dark bg-transparent border-0'>
									<FontAwesomeIcon
										icon={icons[item?.socialMedia?.value]}
										size={'xl'}
									/>
								</button>
							)
						)}
					</div>
				</div>
			</div>
		</section>
	)
}

export default BlogHead
