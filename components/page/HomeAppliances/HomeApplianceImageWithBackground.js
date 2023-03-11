import React from 'react'

const HomeApplianceImageWithBackground = ({ data: { structure } }) => {
	return (
		<section>
			<div className='heading home-appliance-image'>
				<img
					src={structure?.image?.src}
					alt={structure?.image?.alt}
					width='100%'
					height='100%'
				/>
				<div className='heading-text'>
					<h1>{structure?.title?.value}</h1>
					<h4>{structure?.subtitle?.value}</h4>
				</div>
			</div>
		</section>
	)
}

export default HomeApplianceImageWithBackground
