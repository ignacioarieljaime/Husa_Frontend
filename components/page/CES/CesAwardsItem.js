import CustomImage from 'components/common/CustomImage'
import Link from 'next/link'
import React from 'react'

const CesAwardsItem = ({ data }) => {
	return data?.link?.value ? (
		<Link href={data?.link?.value}>
			<a className='d-block'>
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
			</a>
		</Link>
	) : (
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
