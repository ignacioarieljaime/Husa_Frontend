import React from 'react'
import CustomImage from 'components/common/CustomImage'

const CesBanner2 = ({ data: { structure } }) => {
	return (
		<section>
			<div className='ces_banner type_2'>
				<div className='custom_container'>
					<div className='image_container'>
						<CustomImage
							src={structure?.image1?.src}
							alt={structure?.image1?.alt}
							wrapperWidth={'100%'}
							WrapperMaxWidth={'120px'}
						/>
						<CustomImage
							src={structure?.image2?.src}
							alt={structure?.image2?.alt}
							wrapperWidth={'100%'}
							WrapperMaxWidth={'120px'}
						/>
					</div>
					<div className='d-flex flex-wrap flex-column flex-sm-row justify-content-between align-items-center mb-5 mb-md-0'>
						<div className='text'>{structure?.leftText?.value}</div>
						<div className='text'>{structure?.rightText?.value}</div>
					</div>
					<h1 className='title'>{structure?.title?.value}</h1>
				</div>
			</div>
		</section>
	)
}

export default CesBanner2
