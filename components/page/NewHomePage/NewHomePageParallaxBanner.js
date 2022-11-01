import React, { useEffect } from 'react'
import Link from 'next/link'
import {
	MouseParallaxContainer,
	MouseParallaxChild
} from 'react-parallax-mouse'
import AOS from 'aos'
import 'aos/dist/aos.css'

import ParallaxBanner from '../../../public/assets/images/parallxBanner.png'

const NewHomePageParallaxBanner = ({ data }) => {
	const structure = {
		image: {
			src: ParallaxBanner.src
		},
		title: {
			value: 'It all starts with X'
		},
		description: {
			value: 'Pre-order the limited edition ULED X today.'
		},
		link: {
			value: '/',
			title: 'Sign Up Now'
		}
	}

	useEffect(() => {
		AOS.init()
	})

	return (
		<section>
			<MouseParallaxContainer globalFactorX={1} globalFactorY={1}>
				<div className='parallax-banner'>
					<img
						src={structure?.image?.src}
						alt={structure?.image?.alt}
						className={'img-fluid'}
					/>
					<div className='banner-content'>
						<MouseParallaxChild
							factorX={0.03}
							factorY={0.03}
							resetOnLeave={true}>
							<div>
								<h1
									className='title fs-5qx'
									data-aos='fade-up'
									data-aos-duration='900'
									data-aos-delay='300'>
									{structure?.title?.value}
								</h1>
								<p
									className='description fs-5 fs-md-4'
									data-aos='fade'
									data-aos-duration='700'
									data-aos-delay='1500'>
									{structure?.description?.value}
								</p>
								<Link href={structure?.link?.value}>
									<a
										className='n-btn white'
										data-aos='fade'
										data-aos-duration='900'
										data-aos-delay='2000'>
										{structure?.link?.title}
									</a>
								</Link>
							</div>
						</MouseParallaxChild>
					</div>
				</div>
			</MouseParallaxContainer>
		</section>
	)
}

export default NewHomePageParallaxBanner
