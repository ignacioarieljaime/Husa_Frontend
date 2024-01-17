import CustomImage from 'components/common/CustomImage'
import React, { useState, useEffect } from 'react'

const ProductFeaturesCards = ({ data }) => {
	const { structure } = data
	// const [content, setContent] = useState(null)
	// useEffect(() => {
	// 	setContent(structure)
	// })
	return (
		<section>
			<div className='hvac_features'>
				<h2
					className='title'
					dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></h2>
				<div className='cards'>
					{structure?.list?.value.map((item, index) => (
						<div
							className={`cards_item row mx-0 ${item?.order?.value}`}
							key={index}>
							<div className='col-12 content'>
								<h3 className='title'>{item?.title?.value}</h3>
								<div
									className='text'
									dangerouslySetInnerHTML={{ __html: item?.text?.value }}></div>
							</div>
							<div className='col-12 images'>
								<CustomImage
									src={item?.image1?.src}
									alt={item?.image1?.alt}
									wrapperClass='mb-4'
									wrapperWidth={'100%'}
								/>
								<CustomImage
									src={item?.image2?.src}
									alt={item?.image2?.alt}
									wrapperClass=''
									wrapperWidth={'100%'}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default ProductFeaturesCards
