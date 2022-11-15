import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faLinkedinIn,
	faTwitter,
	faFacebook
} from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { faLink } from '@fortawesome/free-solid-svg-icons'

function BlogDescriptionWithShare() {
	return (
		<section>
			<div className='tiny-banner container py-md-20 my-20'>
				<article className='article'>
					<h4 className='mb-10 fs-3'>
						Lastly, if we don't want to create a TV shrine, how do we decorate
						around the TV?
					</h4>
					<div className='mb-15'>
						<p className='m-auto mb-3 fs-base fw-normal text-muted'>
							We may all think that good feng shui would mean absolute symmetry,
							but Cliff tells us to stay away from that. "The key to décorating
							around a TV Is not to create too much symmetry with cabinets
							flanking at either side or two table lamps. Instead treat It like
							a picture on the wall and décorate the space as If It were of
							equal Importance to the rest of the room."
						</p>
						<p className='m-auto mb-3 fs-base fw-normal text-muted'>
							He also notes that the size of the TV also affect placement. "The
							bigger the TV, the more centrally It should be placed, while a
							small TV can be placed almost like a secondary fixture to one
							corner." Cliff, with all due respect, we won't be putting our baby
							In the corner, but we do get what you're saying.
						</p>
					</div>
					<span>Share article</span>
					<div className='row mt-7'>
						<a href='#' className='text-primary-dark'>
							{/* <i className='fa-brands fa-xl fa-linkedin-in'></i> */}
							<FontAwesomeIcon icon={faLinkedinIn} size={'xl'} />
						</a>
						<a href='#' className='text-primary-dark'>
							{/* <i className='fa-brands fa-xl fa-twitter'></i> */}
							<FontAwesomeIcon icon={faTwitter} size={'xl'} />
						</a>
						<a href='#' className='text-primary-dark'>
							{/* <i className='fa-brands fa-xl fa-facebook'></i> */}
							<FontAwesomeIcon icon={faFacebook} size={'xl'} />
						</a>
						<a href='#' className='text-primary-dark'>
							{/* <i className='fa-solid fa-xl fa-link'></i> */}
							<FontAwesomeIcon icon={faLink} size={'xl'} />
						</a>
					</div>
				</article>
			</div>
		</section>
	)
}

export default BlogDescriptionWithShare
