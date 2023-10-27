import React from 'react'
import CustomImage from 'components/common/CustomImage'

const CesHero2 = ({ data: { structure } }) => {
	return (
		<section>
			<div className='ces_hero type_2'>
				<div className='custom_container'>
					<CustomImage
						src={structure?.backgroundImage?.src}
						alt={'background'}
						className={'img-fluid'}
						wrapperHeight={'100%'}
						wrapperWidth={'100%'}
					/>
				</div>
			</div>
		</section>
	)
}

export default CesHero2
