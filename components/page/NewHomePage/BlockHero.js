import React, { useEffect } from 'react'
import Link from 'next/link'
import {
	MouseParallaxContainer,
	MouseParallaxChild
} from 'react-parallax-mouse'
import AOS from 'aos'
import 'aos/dist/aos.css'
import CustomImage from '../../common/CustomImage'
import OpenPageOnNewTab from "public/assets/images/OpenNewPageIcon.png"

const BlockHero = ({ data: { structure } }) => {
	useEffect(() => {
		AOS.init()
	}, [])

	return (
		<section>
			<MouseParallaxContainer globalFactorX={1} globalFactorY={1}>
				<div className='parallax-banner'>
					<CustomImage
						src={structure?.backgroundImage?.src}
						alt={'parallax background'}
						className={'img-fluid'}
						wrapperHeight={'100%'}
						wrapperWidth={'100%'}
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
									className='description fs-4'
									data-aos='fade'
									data-aos-duration='700'
									data-aos-delay='1500'>
									{structure?.subtitle?.value}
								</p>
								<Link
									target={
										structure?.link?.target ? structure?.link?.target : '_self'
									}
									href={structure?.link?.value ? structure?.link?.value : '/'}>
									<a
										className='n-btn white'
										data-aos='fade'
										data-aos-duration='900'
										data-aos-delay='2000'>
										{structure?.link?.title}
										{structure?.link?.target === '_blank' && (
											<img
												style={{ marginLeft: '10px' }}
												src={OpenPageOnNewTab.src}
											/>
										)}
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

export default BlockHero
