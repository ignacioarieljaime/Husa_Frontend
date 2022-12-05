import React, { useState } from 'react'
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { GetProducts } from 'services/ExtendedWarranty'
import Spinner from 'components/common/Spinner'

const ExtendedWarrantyBanner = ({ data: { structure } }) => {
	const [searchTerm, setSearchTerm] = useState('')
	const [productsList, setProductsList] = useState()
	const [showProductsList, setShowProductsList] = useState(false)

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
				<div className='heading-text'>
					<div
						className='text-white mb-4 mb-md-10'
						dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></div>
					{structure?.showSearch?.value && (
						<div className='support-products-searchbox'>
							<input
								type='text'
								placeholder='start typing your model number'
								value={searchTerm}
								onChange={e => searchProduct(e.target.value)}
							/>
							{Array.isArray(productsList) ? (
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
													<li>
														<Link href={`/ewp-wizard-plan-selector/${item.id}`}>
															<a>{item.name}</a>
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
