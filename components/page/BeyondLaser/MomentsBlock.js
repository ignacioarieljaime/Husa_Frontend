import Link from 'next/link'
import React from 'react'

const MomentsBlock = ({ data: { structure } }) => {
	return (
		<section>
			<div className='beyond_laser_moments_block'>
				<div
					className='text'
					dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></div>
				<div className='moments'>
					{structure?.list?.value.map((item, index) => (
						<figure key={index} className='moment'>
							<Link href={item?.link?.value}>
								<a>
									<img src={item?.image?.src} alt={item?.image?.alt} />
									<figcaption>{item?.title?.value}</figcaption>
								</a>
							</Link>
						</figure>
					))}
				</div>
				<div className='laser_tv'>
					<img src={structure?.image?.src} alt={structure?.image?.alt} />
				</div>
			</div>
		</section>
	)
}

export default MomentsBlock
