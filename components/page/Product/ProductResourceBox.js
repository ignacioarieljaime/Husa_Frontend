import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import OpenNewPageIcon from 'public/assets/images/OpenNewPageIcon.png'

function ProductResourceBox({ pim, data }) {
	let { structure } = data
	const router = useRouter()

	const warrantyHandler = _warrantyName => {
		const categoryFields = pim?.Category?.customFields
		const properties = findDataInArray(
			pim?.properties,
			'title',
			'Accessories'
		)?.items
		const warranty = findDataInArray(properties, 'title', 'Warranty')

		if (_warrantyName) return warranty?.title

		const warrantyFileUrl = categoryFields?.find(item =>
			item?.custom_field?.name.includes(warranty?.value)
		)?.media?.external_url
		const customWarrantyFile = pim?.assets?.find(
			item => item?.content_type === 'Warrenty'
		)?.url

		if (!customWarrantyFile && warrantyFileUrl)
			return (
				<li>
					<a
						target='_blank'
						href={customWarrantyFile || warrantyFileUrl}
						className='n-btn outline-white transparent d-block text-uppercase'
						download={true}
						style={{
							padding: '15px 16px 14px'
						}}>
						<span className='underline-on-hover text-uppercase'>
							{warranty?.title}
						</span>
					</a>
				</li>
			)
	}

	const findDataInArray = (_array, _selector, _label) => {
		return _array?.find(item => item[_selector] === _label)
	}

	return (
		<div id={data.name + data.id} className='product_resources'>
			<h4 className='title'>Resources</h4>
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
											<a className='text-decoration-none '>
												<span
													className='n-btn outline-white transparent d-block text-uppercase'
													style={{
														padding: '15px 16px 14px'
													}}>
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
										<a
											href={item.url ? item.url : ''}
											download
											className='text-decoration-none '>
											<span
												className='n-btn outline-white transparent d-block text-uppercase'
												style={{
													padding: '15px 16px 14px'
												}}>
												{item?.content_type === 'Warrenty'
													? warrantyHandler(true)
													: item.caption
													? item.caption
													: item.title}
											</span>
										</a>
									</li>
								)}
							</>
						)
				)}
				{warrantyHandler()}
				<li>
					<Link
						href={`/support/${
							router.pathname.split('/')[router.pathname.split('/').length - 1]
						}`}>
						<a className='text-decoration-none '>
							<span
								className='n-btn outline-white transparent d-block text-uppercase'
								style={{
									padding: '15px 16px 14px'
								}}>
								PRODUCT SUPPORT
							</span>
						</a>
					</Link>
				</li>
				{structure?.installationUrl?.value &&
				!structure?.installationUrl?.value === 'null' ? (
					<li>
						<Link href={structure?.installationUrl?.value}>
							<a
								className='n-btn outline-white transparent d-block text-uppercase'
								style={{
									padding: '15px 16px 14px'
								}}>
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
