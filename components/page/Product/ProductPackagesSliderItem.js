import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { RouteHandler } from 'utils/routeHandler'
import CustomImage from 'components/common/CustomImage'

const ProductPackagesSliderItem = ({ data }) => {
	console.log(data)

	return (
		<div>
			<CustomImage src={data?.media?.src} alt={data?.product?.name} />
			<h5>{data?.product?.category?.name + ' ' + data?.product?.name}</h5>
			<Link href={'/' + data?.model}>
				<a>Learn more</a>
			</Link>
		</div>
	)
}

export default ProductPackagesSliderItem
