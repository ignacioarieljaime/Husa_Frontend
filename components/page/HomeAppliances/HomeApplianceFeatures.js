import Link from 'next/link'
import React from 'react'
import HomeApplianceFeaturesitem from './HomeApplianceFeaturesitem'

const HomeApplianceFeatures = ({ data: { structure } }) => {
	return (
		<section>
			<div className='cool-features article container'>
				<h2 className='title'>
					{structure?.mainTitleBlack?.value}{' '}
					<span className='text-primary-new'>
						{structure?.mainTitleColored?.value}
					</span>
				</h2>
				<Link href={structure?.link?.value}>
					<a className='link fs-8'>{structure?.link?.title}</a>
				</Link>
				<div className='cool-features-container'>
					{structure?.list?.value.map((item, index) => (
						<HomeApplianceFeaturesitem key={index} data={item} />
					))}
				</div>
			</div>
		</section>
	)
}

export default HomeApplianceFeatures
