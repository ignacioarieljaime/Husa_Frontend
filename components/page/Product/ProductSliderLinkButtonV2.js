import Link from 'next/link'
import React, { useState } from 'react'
import { RouteHandler } from 'utils/routeHandler'

function ProductSliderLinkButtonV2({ data, pim }) {
	const [url] = useState(RouteHandler(data.products[0]))

	return (
		<>
			{url ? (
				<Link href={url}>
					<a
						className={`n-btn  m-2 rounded-3 m-0 ${
							pim?.custom_fields[2]?.value === data.title
								? ' white'
								: 'outline-white transparent'
						}`}>
						{data.title}
					</a>
				</Link>
			) : (
				<button
					disabled
					className={`n-btn  m-2 rounded-3 m-0 ${
						pim?.custom_fields[2]?.value === data.title
							? ' white'
							: 'outline-white transparent'
					}`}>
					{data.title}
				</button>
			)}
		</>
	)
}

export default ProductSliderLinkButtonV2
