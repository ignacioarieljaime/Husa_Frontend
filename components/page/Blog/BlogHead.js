import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faLinkedinIn,
	faTwitter,
	faFacebook
} from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

function BlogHead({ data: { structure } }) {
	const icons = {
		link: faLink,
		linkedin: faLinkedinIn,
		facebook: faFacebook,
		twitter: faTwitter
	}

	return (
		<section>
			<div className='blog-header mt-20'>
				<div className='container mb-13'>
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
						{structure?.list?.value.map((item, index) => (
							<a
								href={item?.link?.value}
								key={index}
								className='text-primary-dark'>
								<FontAwesomeIcon
									icon={icons[item?.socialMedia?.value]}
									size={'xl'}
								/>
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default BlogHead
