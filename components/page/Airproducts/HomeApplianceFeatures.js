import Link from 'next/link'
import React from 'react'
import HomeApplianceFeaturesItem from './HomeApplianceFeaturesItem'

function HomeApplianceFeatures() {
	return (
		<section className='home_appliance_features'>
			<div className='box_text'>
				<h3>
					Super Cool
					<span className='ms-2 text-primary'>Features</span>
				</h3>
				<Link href={'/s'}>
					<a>SHOP ALL REFRIGERATORS</a>
				</Link>
			</div>
			<div className='items row'>
				<HomeApplianceFeaturesItem />
			</div>
		</section>
	)
}

export default HomeApplianceFeatures
