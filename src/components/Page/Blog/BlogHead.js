import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faLinkedinIn,
	faTwitter,
	faFacebook
} from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { faLink } from '@fortawesome/free-solid-svg-icons'

function BlogHead() {
	return (
		<section>
			<div class='blog-header mt-20'>
				<div class='container mb-13'>
					<h2 class='text-primary-dark fs-5 fw-normal mb-10'>
						Home Appliances
					</h2>
					<h1 class='header-text mb-12'>
						TV Room Feng Shui Tips with
						<span class='header-gradient-text'>Cliff Tan</span>
					</h1>
					<span>Share article</span>
					<div class='row mt-7'>
						<a href='#' class='text-primary-dark'>
							{/* <i class='fa-brands fa-xl fa-linkedin-in'></i> */}
							<FontAwesomeIcon icon={faLinkedinIn} size={'xl'} />
						</a>
						<a href='#' class='text-primary-dark'>
							{/* <i class='fa-brands fa-xl fa-twitter'></i> */}
							<FontAwesomeIcon icon={faTwitter} size={'xl'} />
						</a>
						<a href='#' class='text-primary-dark'>
							{/* <i class='fa-brands fa-xl fa-facebook'></i> */}
							<FontAwesomeIcon icon={faFacebook} size={'xl'} />
						</a>
						<a href='#' class='text-primary-dark'>
							{/* <i class='fa-solid fa-xl fa-link'></i> */}
							<FontAwesomeIcon icon={faLink} size={'xl'} />
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BlogHead
