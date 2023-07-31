import { useAspectRatio } from 'hooks/useAspectRatio'
import React from 'react'

export const HomeAppliancesHeaderCategoryItem = _data => {
	const aspectRatio = useAspectRatio(_data?.data?.image?.src)

	return (
		<li>
			<div
				className='image'
				style={{
					width:
						aspectRatio > 1
							? ((1 / aspectRatio) * 60).toFixed(2) + '%'
							: aspectRatio < 1
							? ((1 / aspectRatio) * 100).toFixed(2) + '%'
							: '45%'
				}}>
				<img
					src={_data?.data?.image?.src}
					alt={_data?.data?.image?.alt}
					height={'100%'}
				/>
			</div>
			<h6>{_data?.data?.title?.value}</h6>
		</li>
	)
}
const HomeAppliancesHeaderCategory = ({ data }) => {
	const { structure } = data
	return (
		<section>
			<div className='ha_header_cat'>
				<div className='content'>
					<h4
						className='title'
						dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></h4>
					<ul className='category'>
						{structure?.list?.value.map((item, index) => (
							<HomeAppliancesHeaderCategoryItem data={item} key={index} />
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default HomeAppliancesHeaderCategory
