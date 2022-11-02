import React, { useState } from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import Link from 'next/link'
import axios from 'axios'
import Spinner from 'components/common/Spinner'

const SupportNewProducts = ({ data }) => {
	const [categoryId, setCategoryId] = useState()
	const [searchProductsList, setSearchProductsList] = useState()
	const [searchBoxCondition, setSearchBoxCondition] = useState(false)

	let { structure } = data

	const searchHandler = async _value => {
		setSearchBoxCondition(true)
		if (_value.length >= 2) {
			setSearchProductsList('loading')
			try {
				let response = await axios.get(
					`https://imcxm.dev-api.hisenseportal.com/api/husa/searchProduct?${
						categoryId ? `categoryId=${categoryId}&` : ''
					}string=${_value}`
				)
				setSearchProductsList(response.data.data)
			} catch (error) {
				setSearchProductsList([])
				console.log(error)
			}
		} else if (_value.length === 0) {
			setSearchProductsList([])
		}
	}
	return (
		<section>
			<div className='support-products'>
				<h3 className='section-title container-fluid'>
					Select a product category to get started.
				</h3>
				<Swiper
					navigation={false}
					pagination={false}
					spaceBetween={35}
					slidesPerView={'auto'}
					centeredSlides={true}
					grabCursor={true}
					className='support-products-slider'>
					{structure?.list?.value.map((item, index) => (
						<SwiperSlide
							key={index}
							className='slider-item pointer-event'
							onClick={() => {
								setCategoryId(item?.category?.value)
								setSearchProductsList([])
							}}>
							<div className='d-flex flex-column '>
								<img
									src={item?.image?.src}
									alt={item?.image?.alt}
									title={item?.image?.title}
									className='slider-image'
								/>
								<a
									href={item?.link?.value}
									className='slider-title n-btn outline-black'>
									{item?.link?.title}
								</a>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<div className='container-fluid d-flex justify-content-center'>
					<div className='position-relative'>
						<div className='support-products-searchbox'>
							<input
								type='text'
								placeholder='please select your product'
								onChange={e => searchHandler(e.target.value)}
								onBlur={() =>
									setTimeout(() => {
										setSearchBoxCondition(false)
									}, 500)
								}
							/>
							<button>
								<FontAwesomeIcon icon={faMagnifyingGlass} size={'md'} />
							</button>
						</div>

						{searchBoxCondition && (
							<ul
								className='position-absolute mt-3 top-100 d-flex flex-column gap-2 w-100 list bg-white list-unstyled py-10 px-4 shadow overflow-auto'
								style={{ maxHeight: '300px' }}>
								{searchProductsList === 'loading' ? (
									<li className='py-5'>
										<Spinner size={20} />
									</li>
								) : Array.isArray(searchProductsList) &&
								  searchProductsList.length > 0 ? (
									searchProductsList.map((item, index) => (
										<li key={'search-list-' + index}>
											<Link href={item.route}>
												<a className='text-primary decora'>
													{item.product.name}
												</a>
											</Link>
										</li>
									))
								) : (
									<li>its empty</li>
								)}
							</ul>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}

export default SupportNewProducts
