import React, { useState, useEffect } from 'react'
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { GetProducts } from 'services/ExtendedWarranty'
import Spinner from 'components/common/Spinner'

const ExtendedWarrantyBanner = ({ data: { structure } }) => {
	const [searchTerm, setSearchTerm] = useState('')
	const [productsList, setProductsList] = useState()
	const [showProductsList, setShowProductsList] = useState(false)
	const [text, setText] = useState(null)

	useEffect(() => {
		setText(structure?.title?.value)
	}, [])
	const searchProduct = async _searchValue => {
		setProductsList('loading')
		setShowProductsList(true)
		setSearchTerm(_searchValue)
		try {
			let response = await GetProducts(null, null, _searchValue)
			setProductsList(response.data.products)
		} catch (error) {
			setProductsList(null)
			console.log(error)
		}
	}

	return (
		<section>
			<div className='heading extended-warrant-banner'>
				<img
					src={structure?.image?.src}
					alt={structure?.image?.alt}
					width={'100%'}
					style={{ height: '100%' }}
					className={'img-fluid'}
				/>
				<div className='heading-text px-3'>
					<div
						className='text-white mb-4 mb-md-7'
						dangerouslySetInnerHTML={{ __html: text }}></div>
					{structure?.showSearch?.value && (
						<div className='support-products-searchbox'>
							<input
								type='text'
								placeholder='start typing your model number'
								value={searchTerm}
								onChange={e => searchProduct(e.target.value)}
							/>
							{showProductsList ? (
								<button
									onClick={() => {
										setShowProductsList(false)
										setSearchTerm('')
									}}
									className='text-white'>
									<FontAwesomeIcon icon={faXmark} />
								</button>
							) : (
								<span className='text-white'>
									<FontAwesomeIcon icon={faMagnifyingGlass} />
								</span>
							)}

							{showProductsList && (
								<div>
									<ul>
										{productsList === 'loading' ? (
											<Spinner size={35} />
										) : Array.isArray(productsList) ? (
											<>
												{productsList.map(item => (
													<li
														data-toggle='tooltip'
														data-placement='top'
														title={`${item.name} (${item?.model})`}>
														<Link
															href={`/${structure?.link?.value}?productId=${item.id}`}>
															<a>
																{item.name} ({item?.model})
															</a>
														</Link>
													</li>
												))}
											</>
										) : (
											'empty'
										)}
									</ul>
								</div>
							)}
						</div>
					)}
				</div>
			</div>
		</section>
	)
}

export default ExtendedWarrantyBanner
