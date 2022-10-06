import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faChevronDown,
	faCircleInfo,
	faXmark
} from '@fortawesome/free-solid-svg-icons'

function BloHeadBanner() {
	return (
		<section>
			<div className='blog-header mt-20'>
				<div className='container mb-13'>
					<h2 className='text-primary-dark fs-5 fw-normal mb-10'>
						Home Appliances
					</h2>
					<h1 className='header-text mb-12'>
						TV Room Feng Shui Tips with
						<span className='header-gradient-text'>Cliff Tan</span>
					</h1>
					<span>Share article</span>
					<div className='row mt-7'>
						<a href='#' className='text-primary-dark'>
							<i className='fa-brands fa-xl fa-linkedin-in'></i>
						</a>
						<a href='#' className='text-primary-dark'>
							<i className='fa-brands fa-xl fa-twitter'></i>
						</a>
						<a href='#' className='text-primary-dark'>
							<i className='fa-brands fa-xl fa-facebook'></i>
						</a>
						<a href='#' className='text-primary-dark'>
							<i className='fa-solid fa-xl fa-link'></i>
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BloHeadBanner
