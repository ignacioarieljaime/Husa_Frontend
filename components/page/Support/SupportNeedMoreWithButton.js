import React from 'react'
import Link from 'next/link'
import CustomImage from '../../common/CustomImage'

function SupportNeedMoreWithButton({ data }) {
	let { structure } = data
	return (
		<section>
			<div className='heading support-heading support-new-heading'>
				<CustomImage
					src={structure?.image?.src}
					alt={structure?.image?.alt}
					wrapperWidth='100%'
					wrapperHeight={'375px'}
				/>
				<div className='heading-text'>
					<h4
						className='text-white fs-2hx fw-normal mb-7'
						style={{ color: '#fff' }}>
						{structure?.title?.value}
					</h4>
					{structure?.link?.value && (
						<Link href={structure?.link?.value ? structure?.link?.value : '/'}>
							<a className='n-btn outline-white transparent'>
								{structure?.link?.title}
							</a>
						</Link>
					)}
				</div>
			</div>
		</section>
	)
}

export default SupportNeedMoreWithButton
