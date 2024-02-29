import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { RouteHandler } from 'utils/routeHandler'
import CustomImage from 'components/common/CustomImage'

const ProductPackagesSliderItem = ({ data }) => {
	console.log(data)

	return (
		<div>
			<CustomImage src={data?.image} alt={data?.name} />
			<h5>{data?.name}</h5>
			<Link href={RouteHandler(data?.id) ? RouteHandler(data?.id) : '/'}>
				<a>Learn more</a>
			</Link>
		</div>
	)
}

export default ProductPackagesSliderItem
