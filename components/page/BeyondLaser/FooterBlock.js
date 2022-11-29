import Link from 'next/link'
import React from 'react'

const FooterBlock = ({ data: { structure } }) => {
	return (
		<section>
			<div className='beyond_laser_footer_block'>
				<img
					src={structure?.image1?.src}
					alt={structure?.image1?.alt}
					width='120'
				/>
				<img
					src={structure?.image2?.src}
					alt={structure?.image2?.alt}
					width='200'
					className='mt-5'
				/>
				<div
					className='title'
					dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></div>
				<ul className='social_media'>
					{structure?.list?.value.map((item, index) => (
						<li key={index}>
							<Link href={item?.link?.value}>
								<a>
									<img src={item?.image?.src} alt={item?.image?.alt} />
								</a>
							</Link>
						</li>
					))}
				</ul>
				<div
					className='copy_right'
					dangerouslySetInnerHTML={{
						__html: structure?.copyRight?.value
					}}></div>
			</div>
		</section>
	)
}

export default FooterBlock
