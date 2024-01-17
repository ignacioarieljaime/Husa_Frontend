import React, { useEffect, useState } from 'react'
import CustomImage from 'components/common/CustomImage'

const CircularImageBlocks = ({ data }) => {
	const { structure } = data
	// const [content, setContent] = useState(null)
	// useEffect(() => {
	// 	setContent(structure)
	// })
	return (
		<section>
			<div className='hvac_sales_cycle'>
				<h2
					className='title'
					dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></h2>
				<div className='cycle'>
					{structure?.list?.value.map((item, index) => (
						<div
							key={index}
							className='cycle_item'
							style={{ width: 100 / structure?.list?.value.length + '%' }}>
							<div className='image_container'>
								<CustomImage
									src={item.backgroundImage?.src}
									alt={item.backgroundImage?.alt}
									wrapperWidth={'100%'}
									wrapperHeight={'100%'}
									wrapperClass={'background'}
								/>
								<CustomImage
									src={item.image?.src}
									alt={item.image?.alt}
									WrapperMaxWidth={'100px'}
									wrapperWidth={'100%'}
									wrapperClass={'icon'}
								/>
							</div>
							<h4>{item.title?.value}</h4>
						</div>
					))}
				</div>
				<div
					className='text'
					dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></div>
			</div>
		</section>
	)
}

export default CircularImageBlocks
