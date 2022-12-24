import CustomImage from 'components/common/CustomImage'
import Link from 'next/link'
import React from 'react'

const CesHero = ({ data: { structure } }) => {
	return (
		<section>
			<div className='ces_hero'>
				<div className='custom_container'>
					<CustomImage
						src={structure?.backgroundImage?.src}
						alt={'parallax background'}
						className={'img-fluid'}
						wrapperHeight={'100%'}
						wrapperWidth={'100%'}
					/>
					<div className='banner-content'>
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
								href={structure?.link?.value ? structure?.link?.value : '/'}>
								<a
									className='n-btn white'
									data-aos='fade'
									data-aos-duration='900'
									data-aos-delay='2000'>
									{structure?.link?.title}
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CesHero
