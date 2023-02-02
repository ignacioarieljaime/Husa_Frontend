import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function ProductResourceBox({ pim, data }) {
	let { structure } = data
	const router = useRouter()
	return (
		<div id={data.name + data.id} className='resources py-7 py-sm-18'>
			<article className='article'>
				<h2 className='my-10'>Resources</h2>
			</article>
			<ul>
				{pim?.assets.map(
					(item, index) =>
						item.type_id === 3 && (
							<li key={index}>
								<a href={item.url ? item.url : ''} download>
									<span className='underline-on-hover text-uppercase'>
										{item.caption ? item.caption : item.title}
									</span>
								</a>
							</li>
						)
				)}
				<li>
					<Link
						href={`/support/${
							router.pathname.split('/')[router.pathname.split('/').length - 1]
						}`}>
						<a>
							<span className='underline-on-hover text-uppercase'>
								PRODUCT SUPPORT
							</span>
						</a>
					</Link>
				</li>
				{structure?.installationUrl?.value &&
				!structure?.installationUrl?.value === 'null' ? (
					<li>
						<Link href={structure?.installationUrl?.value}>
							<a>
								<span className='underline-on-hover text-uppercase'>
									INSTALLATION REQUEST
								</span>
							</a>
						</Link>
					</li>
				) : null}
			</ul>
		</div>
	)
}

export default ProductResourceBox
