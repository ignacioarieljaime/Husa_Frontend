import CustomImage from 'components/common/CustomImage'
import React from 'react'

const BlackFridayHeroImage = ({ data: { structure } }) => {
	return (
		<section>
			<div className='black_friday_image_box header-secondary2 '>
				<CustomImage
					src={structure?.image?.src}
					alt={structure?.image?.alt}
					wrapperWidth='100%'
					wrapperHeight='100%'
				/>
			</div>
		</section>
	)
}

export default BlackFridayHeroImage
