import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faLinkedinIn,
	faTwitter,
	faFacebook
} from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { faLink } from '@fortawesome/free-solid-svg-icons'

function BlogDescriptionWithShare({ data: { structure } }) {
	return (
		<section>
			<div className='tiny-banner container py-md-20 my-20'>
				<article className='blog-article'>
					<div
						dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></div>
					<span>{structure?.sharingTitle?.value}</span>
					<div className='row mt-7'>
						{structure?.list?.value.map((item, index) => (
							<a
								href={item?.link?.value}
								key={index}
								className='text-primary-dark'>
								{console.log(item)}
								<FontAwesomeIcon icon={faLinkedinIn} size={'xl'} />
							</a>
						))}
					</div>
				</article>
			</div>
		</section>
	)
}

export default BlogDescriptionWithShare
