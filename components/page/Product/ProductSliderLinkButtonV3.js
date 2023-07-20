import Link from 'next/link'
import React, { useState } from 'react'
import { RouteHandler } from 'utils/routeHandler'

function ProductSliderLinkButtonV3({ data, pim, theme }) {
	const [url] = useState(RouteHandler(data.products[0], 'product'))
	return (
		<>
			{pim?.name?.includes(data?.title) ? (
				<span className={`sizes_item ${theme === 'light' ? 'white' : 'dark'}`}>
					{data.title}
				</span>
			) : url ? (
				<Link href={url}>
					<a
						className={`sizes_item ${theme === 'light' ? 'white' : 'dark'} ${
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
					className={`sizes_item ${theme === 'light' ? 'white' : 'dark'} ${
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

export default ProductSliderLinkButtonV3
