import Link from 'next/link'
import React, { useState } from 'react'
import { RouteHandler } from 'utils/routeHandler'

function ProductsItemLink({ data, currentSize, isCurrent }) {
	const [url] = useState(RouteHandler(data.id))
	return (
		<li>
			{url ? (
				<Link href={url}>
					<a
						className={`px-3 py-1 border-1 border product-mini-link border-dark btn-outline-dark text-dark ${
							isCurrent ? ' product-mini-link-active' : ''
						}`}>
						{currentSize}
					</a>
				</Link>
			) : (
				<button disabled className='px-3 py-1 border-1  text-dark mb-0 w-100'>
					{currentSize}
				</button>
			)}
		</li>
	)
}

export default ProductsItemLink
