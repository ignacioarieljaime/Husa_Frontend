import Link from 'next/link'
import React, { useState } from 'react'
import { RouteHandler } from 'utils/routeHandler'

function ProductSliderLinkButton({ data, pim }) {
	const [url] = useState(RouteHandler(data.products[0], 'product'))
	return (
		<>
			{url ? (
				<Link href={url}>
					<a
						className={`btn  m-2 rounded-3 m-0 ${
							pim?.custom_fields[2]?.value === data.title
								? 'btn-primary-new text-white'
								: 'btn-outline-dark'
						}`}>
						{data.title}
					</a>
				</Link>
			) : (
				<button
					disabled
					className={`btn  m-2 rounded-3 m-0 ${
						pim?.custom_fields[2]?.value === data.title
							? 'btn-primary-new text-white'
							: 'btn-outline-dark'
					}`}>
					{data.title}
				</button>
			)}
		</>
	)
}

export default ProductSliderLinkButton
