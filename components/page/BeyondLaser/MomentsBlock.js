import Link from 'next/link'
import React from 'react'

const MomentsBlock = ({ data: { structure } }) => {
	structure = {
		text: {
			value:
				'<h2>Moments to<br />last a lifetime.</h2><p>Hisense, a global leader in display technologies, has developed a new series of 4K Laser TVs that can transform the way we love, create and entertain.</p>'
		},
		list: {
			value: [
				{
					image: {
						src: 'https://www.hisense-usa.com/beyondlaser/images/eld.png',
						alt: ''
					},
					link: { value: '/' },
					title: { value: 'LOVE OF CINEMA' }
				},
				{
					image: {
						src: 'https://www.hisense-usa.com/beyondlaser/images/mom.png',
						alt: ''
					},
					link: { value: '/' },
					title: { value: 'Family time' }
				},
				{
					image: {
						src: 'https://www.hisense-usa.com/beyondlaser/images/painter.png',
						alt: ''
					},
					link: { value: '/' },
					title: { value: 'studio companion' }
				}
			]
		},
		image: {
			src: '	https://www.hisense-usa.com/beyondlaser/images/laserbox.png',
			alt: ''
		}
	}

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
