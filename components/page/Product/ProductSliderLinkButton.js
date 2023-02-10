import Link from 'next/link'
import React, { useState } from 'react'
import { RouteHandler } from 'utils/routeHandler'

function ProductSliderLinkButton({ data, pim }) {
	const [url] = useState(RouteHandler(data.products[0], 'product'))
	return (
		<>
			{pim?.name?.includes(data?.title) ? (
				<span
					style={{
						border: '1px solid #239d98',
						fontSize: '16px',
						color: '#239d98',
						padding: '3px 9px',
						height: '39px',
						display: 'inline-flex',
						alignItems: 'center'
					}}
					className={` m-2 rounded-3 m-0 `}>
					{data.title}
				</span>
			) : url ? (
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
