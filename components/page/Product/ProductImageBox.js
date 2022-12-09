import React from 'react'

import CustomImage from 'components/common/CustomImage'

function ProductImageBox({ data }) {
	let { structure } = data
	return (
		<div id={data.name + data.id} className='header-secondary2'>
			{structure?.image?.src && (
				<CustomImage
					src={structure?.image?.src}
					wrapperClass={'position-absolute top-0 start-0'}
					wrapperHeight={'100%'}
					wrapperWidth={'100%'}
					alt={structure?.image?.alt}
				/>
			)}
		</div>
	)
}

export default ProductImageBox
