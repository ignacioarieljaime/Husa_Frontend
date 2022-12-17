import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const BeyondLaserMomentsBlock = ({ data }) => {
	const { structure } = data
	const [text, setText] = useState(null)
	useEffect(() => {
		setText(structure?.text?.value)
	}, [])
	return (
		<section>
			<div id={data?.name + data?.id} className='beyond_laser_moments_block'>
				<div
					className='text'
					data-aos='fade-up'
					data-aos-delay='500'
					data-aos-duration='1000'
					dangerouslySetInnerHTML={{ __html: text }}></div>
				<div className='moments'>
					{structure?.list?.value.map((item, index) => (
						<figure key={index} className='moment'>
							<Link href={item?.link?.value ? item?.link?.value : '/'}>
								<a>
									<img
										src={item?.image?.src}
										alt={item?.image?.alt}
										data-aos='fade-up'
										data-aos-delay='500'
										data-aos-duration='1000'
									/>
									<figcaption
										data-aos='fade'
										data-aos-delay='1500'
										data-aos-duration='1000'>
										{item?.title?.value}
									</figcaption>
								</a>
							</Link>
						</figure>
					))}
				</div>
				<div
					className='laser_tv'
					data-aos='fade'
					data-aos-delay='500'
					data-aos-duration='1000'>
					<img src={structure?.image?.src} alt={structure?.image?.alt} />
				</div>
			</div>
		</section>
	)
}

export default BeyondLaserMomentsBlock
