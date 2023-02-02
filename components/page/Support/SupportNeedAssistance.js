import React from 'react'

// image
import ImageBg from 'public/assets/images/support/support-bg.jpg'
import Link from 'next/link'
import CustomImage from 'components/common/CustomImage'

function SupportNeedAssistance({ data }) {
	let { structure } = data
	return (
		<section id={data.name + data.id}>
			<div className='heading support-heading'>
				<CustomImage
					src={structure?.image?.src}
					alt={structure?.image?.alt}
					wrapperWidth='100%'
				/>
				<div className='heading-text'>
					<h4 className='text-white fs-2qx mb-5' style={{ color: '#fff' }}>
						{structure?.title?.value}
					</h4>
					<Link href={structure?.link?.value ? structure?.link?.value : '/'}>
						<a className='btn btn-light rounded-5 px-4 py-2'>
							{structure?.link?.title}
						</a>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default SupportNeedAssistance
