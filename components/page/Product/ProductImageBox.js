import React from 'react'

import CustomImage from 'components/common/CustomImage'
import { useAspectRatio } from 'hooks/useAspectRatio'

function ProductImageBox({ data }) {
	let { structure } = data

	const aspectRatio = useAspectRatio(structure?.image?.src)

	return (
		<div
			id={data.name + data.id}
			className='header-secondary2 header-secondary-product-image'
			style={
				aspectRatio < 1
					? { paddingTop: (aspectRatio * 100).toFixed(2) + '%' }
					: {}
			}>
			<CustomImage
				src={structure?.image?.src}
				wrapperClass={'position-absolute top-0'}
				wrapperHeight={'101%'}
				wrapperWidth='100%'
				alt={structure?.image?.alt}
			/>
		</div>
	)
}

export default ProductImageBox
