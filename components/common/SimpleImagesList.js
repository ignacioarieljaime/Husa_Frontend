import React from 'react'

const SimpleImagesList = ({ data: { structure } }) => {
	return (
		<section>
			<div className='simple_images_list'>
				{structure?.list?.value.map((item, index) => (
					<div
						key={index}
						className='item'
						style={{ width: 100 / structure?.list?.value.length + '%' }}>
						<img src={item?.image?.src} alt={item?.image?.alt} width='100%' />
					</div>
				))}
			</div>
		</section>
	)
}

export default SimpleImagesList
