import Link from 'next/link'
import React, { useState } from 'react'
import { RouteHandler } from 'utils/routeHandler'

function ProductsItemLink({ data, currentSize }) {
	const [url] = useState(RouteHandler(data.products[0]))
	return (
		<li>
			{url ? (
				<Link href={url}>
					<a
						className={`px-3 py-1 border-1 border product-mini-link border-dark btn-outline-dark text-dark ${
							data.title === currentSize ? ' product-mini-link-active' : ''
						}`}>
						{data.title}
					</a>
				</Link>
			) : (
				<button disabled className='px-3 py-1 border-1  text-dark mb-0 w-100'>
					{data.title}
				</button>
			)}
		</li>
	)
}

export default ProductsItemLink
