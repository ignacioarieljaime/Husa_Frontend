import Link from 'next/link'
import React from 'react'

const HomeAppliancesImageBox = ({ data }) => {
	const { structure } = data
	return (
		<section>
			<div className='ha_image_box'>
				<div className='content'>
					<p className='subtitle'>{structure?.subtitle?.value}</p>
					<h2
						className='title'
						dangerouslySetInnerHTML={{
							__html: structure?.title?.value
						}}></h2>
					{structure?.link?.value && (
						<Link
							target={
								structure?.link?.target ? structure?.link?.target : '_self'
							}
							href={structure?.link?.value ? structure?.link?.value : '/'}>
							<a
								target={
									structure?.link?.target ? structure?.link?.target : '_self'
								}
								style={{ width: '150px', marginBottom: '54px' }}
								className='black w-fit n-btn d-block mx-auto medium'>
								{structure?.link?.title}
								{structure?.link?.target === '_blank' && (
									<img
										style={{ marginLeft: '10px' }}
										src={OpenPageOnNewTab.src}
									/>
								)}
							</a>
						</Link>
					)}
					<img
						src={structure?.image?.src}
						alt={structure?.image?.alt}
						width={'100%'}
						className='image'
					/>
				</div>
			</div>
		</section>
	)
}

export default HomeAppliancesImageBox
