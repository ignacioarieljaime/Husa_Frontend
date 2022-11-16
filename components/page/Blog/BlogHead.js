import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faLinkedinIn,
	faTwitter,
	faFacebook
} from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { faLink } from '@fortawesome/free-solid-svg-icons'

function BlogHead({ data: { structure } }) {
	return (
		<section>
			<div className='blog-header mt-20'>
				<div className='container mb-13'>
					<h2 className='text-primary-dark fs-5 fw-normal mb-10'>
						Home Appliances
					</h2>
					<div
						dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></div>
					{/* <h1 className='header-text mb-12'>
						TV Room Feng Shui Tips with
						<span className='header-gradient-text'>Cliff Tan</span>
					</h1> */}
					<span>{structure?.sharingTitle?.value}</span>
					<div className='row mt-7'>
						{structure?.list?.value.map((item, index) => (
							<a
								href={item?.link?.value}
								key={index}
								className='text-primary-dark'>
								<FontAwesomeIcon icon={faLinkedinIn} size={'xl'} />
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default BlogHead
