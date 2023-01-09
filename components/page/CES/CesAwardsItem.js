import CustomImage from 'components/common/CustomImage'
import Link from 'next/link'
import React from 'react'

const CesAwardsItem = ({ data }) => {
	return (
		<div className='item'>
			{data?.link?.value ? (
				<Link href={data?.link?.value}>
					<a>
						<div className='img_container'>
							<CustomImage
								src={data?.image?.src}
								alt={data?.image?.alt}
								wrapperWidth={'100%'}
							/>
						</div>
						<div className='w-100'>
							<h5 className='award_title'>{data?.title?.value}</h5>
							{data?.subtitle?.value ? (
								<div className='award_subtitle'>{data?.subtitle?.value}</div>
							) : null}
							{data?.link?.value ? (
								<Link href={data?.link?.value}>
									<a className='n-btn white-text d-block w-fit'>
										{data?.link?.title}
									</a>
								</Link>
							) : null}
						</div>
					</a>
				</Link>
			) : null}
		</div>
	)
}

export default CesAwardsItem
