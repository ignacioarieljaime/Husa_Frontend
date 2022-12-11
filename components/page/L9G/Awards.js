import CustomImage from 'components/common/CustomImage'
import React from 'react'

const Awards = ({ data: { structure } }) => {
	return (
		<section className='l9g'>
			<div className='awards'>
				<div className=' py-18'>
					<h2 className='fs-2hx fw-bold text-start m-4'>
						{structure?.title?.value}
					</h2>
				</div>
				<div className='awards-list'>
					{structure?.awards?.value.map((award, index) => (
						<CustomImage src={award?.image?.src} alt={award?.image?.alt} />
					))}
				</div>
			</div>
		</section>
	)
}

export default Awards
