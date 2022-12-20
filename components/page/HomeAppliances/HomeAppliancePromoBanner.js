import React from 'react'

const HomeAppliancePromoBanner = ({ data: { structure } }) => {
	return (
		<section>
			<div className='header-secondary2 home_appliances_promo_banner'>
				<img
					src={structure?.image?.src}
					alt={structure?.image?.alt}
					width='100%'
					height='100%'
				/>
			</div>
		</section>
	)
}

export default HomeAppliancePromoBanner
