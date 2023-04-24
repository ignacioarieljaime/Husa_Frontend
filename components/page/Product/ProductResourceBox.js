import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import OpenNewPageIcon from 'public/assets/images/OpenNewPageIcon.png'

function ProductResourceBox({ pim, data }) {
	let { structure } = data
	const router = useRouter()
	return (
		<div id={data.name + data.id} className='resources py-7 py-sm-18'>
			<article className='article'>
				<h4 style={{ fontSize: '48px' }} className='my-10'>
					Resources
				</h4>
			</article>
			<ul>
				{pim?.assets.map(
					(item, index) =>
						item.type_id === 3 && (
							<>
								{item.caption === 'Installation Request' ? (
									<li key={index}>
										<Link
											target='_self'
											href={'/televisions/laser-tv/installation-request'}>
											<a>
												<span className='underline-on-hover text-uppercase'>
													{item.caption ? item.caption : item.title}
												</span>
												<img
													style={{ marginLeft: '10px' }}
													src={OpenNewPageIcon.src}
												/>
											</a>
										</Link>
									</li>
								) : (
									<li key={index}>
										<a href={item.url ? item.url : ''} download>
											<span className='underline-on-hover text-uppercase'>
												{item.caption ? item.caption : item.title}
											</span>
										</a>
									</li>
								)}
							</>
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
								<img style={{ marginLeft: '5px' }} src={OpenNewPageIcon.src} />
							</a>
						</Link>
					</li>
				) : null}
			</ul>
		</div>
	)
}

export default ProductResourceBox
