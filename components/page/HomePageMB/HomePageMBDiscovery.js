import React from 'react'
import HomePageMBDiscoveryItem from './HomePageMBDiscoveryItem'

const HomePageMBDiscovery = ({ data }) => {
	let { structure } = data
	return (
		<section>
			<div className='home-page-mb-discovery py-20'>
				{structure?.title?.value && (
					<h2 className='fs-2qx mb-17'>{structure?.title?.value}</h2>
				)}

				<div className='row justify-content-evenly align-items-center mx-0'>
					{structure?.list?.value.map((item, index) => (
						<HomePageMBDiscoveryItem
							key={index}
							image={item?.image}
							link={item?.link}
							title={item?.title?.value}
							paragraph={item?.paragraph?.value}
							width={100 / structure?.list?.value?.length}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default HomePageMBDiscovery
