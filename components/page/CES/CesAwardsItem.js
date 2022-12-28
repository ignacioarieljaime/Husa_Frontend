import CustomImage from 'components/common/CustomImage'
import React from 'react'

const CesAwardsItem = ({ data }) => {
	return (
		<div className='item'>
			<h5 className='award_title'>{data?.title?.value}</h5>
			<div className='award_image'>
				<CustomImage
					src={data?.image?.src}
					alt={data?.image?.alt}
					wrapperWidth={'100%'}
				/>
			</div>
		</div>
	)
}

export default CesAwardsItem
