import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const BeyondLaserFooterBlock = ({ data }) => {
	const { structure } = data
	// const [content, setContent] = useState(null)
	// useEffect(() => {
	// 	setContent(structure)
	// }, [])
	return (
		<section>
			<div className='beyond_laser_footer_block'>
				<img
					src={structure?.image1?.src}
					alt={structure?.image1?.alt}
					width='120'
					data-aos='fade-up'
					data-aos-delay='300'
					data-aos-duration='1000'
				/>
				<img
					src={structure?.image2?.src}
					alt={structure?.image2?.alt}
					width='200'
					className='mt-5'
					data-aos='fade-up'
					data-aos-delay='500'
					data-aos-duration='1000'
				/>
				<div
					data-aos='fade-up'
					data-aos-delay='700'
					data-aos-duration='1000'
					className='title'
					dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></div>
				<ul
					className='social_media'
					data-aos='fade-up'
					data-aos-delay='300'
					data-aos-duration='1000'>
					{structure?.list?.value.map((item, index) => (
						<li key={index}>
							<Link
								target={item?.link?.target ? item?.link?.target : '_self'}
								href={item?.link?.value ? item?.link?.value : '/'}>
								<a target={item?.link?.target ? item?.link?.target : '_self'}>
									<img src={item?.image?.src} alt={item?.image?.alt} />
								</a>
							</Link>
						</li>
					))}
				</ul>
				<div
					data-aos='fade'
					data-aos-delay='300'
					data-aos-duration='1000'
					className='copy_right'
					dangerouslySetInnerHTML={{
						__html: structure?.copyRight?.value
					}}></div>
			</div>
		</section>
	)
}

export default BeyondLaserFooterBlock
